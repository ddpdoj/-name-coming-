import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

// import FileSaver from 'file-saver';

import { Game } from '../models/game.model';
import { GLOBAL_ACHIEVEMENTS } from '../constants/global-achievements';
import { DONATION_MILESTONES } from '../constants/treasures';

declare var Dropbox: any;

@Injectable()
export class MyCommonService {

  @Output() setModal = new Subject();
  @Output() closeModal = new Subject();

  public CHANGE_GAME_EVENT = 'changeGame';
  public MAX_PROSPERITY = 64;
  private dropboxUri = '';
  private _game = new Game();

  public set game(value: Game) {
    this.setGameLocalStorage(value);
    this._game = value;
  }
  public get game(): Game {
    return this._game;
  }

  public get shopPriceModifier(): number {
    if (this._game.reputation >= 19)
      return -5;
    else if (this._game.reputation >= 15)
      return -4;
    else if (this._game.reputation >= 11)
      return -3;
    else if (this._game.reputation >= 7)
      return -2;
    else if (this._game.reputation >= 3)
      return -1;
    else if (this._game.reputation >= -2)
      return 0;
    else if (this._game.reputation >= -6)
      return 1;
    else if (this._game.reputation >= -10)
      return 2;
    else if (this._game.reputation >= -14)
      return 3;
    else if (this._game.reputation >= -18)
      return 4;
    else if (this._game.reputation >= -20)
      return 5;
    else
      return 0;
  }

  constructor(private _http: HttpClient) {
    this.game = this.getGameLocalStorage() ? this.getGameLocalStorage() : {
      name: '',
      prosperity: 0,
      donations: 0,
      partyLocation: '',
      partyNotes: '',
      partyAchievements: {},
      reputation: 0,
      globalAchievements: {},
      scenariosUnlocked: [],
      scenariosComplete: [],
      treasuresUnlocked: [],
      monsterHealth: {
        defaultScenarioLevel: -1,
        defaultNumPlaying: -1,
        scenario: -1,
        monsters: []
      }
    };
  }

  public getGameLocalStorage(): Game {
    try {
      return JSON.parse(window.localStorage.getItem('game'));
    }
    catch (e) {
      return null;
    }
  }

  public setGameLocalStorage(game: Game): void {
    try {
      window.localStorage.setItem('game', JSON.stringify(game));
    }
    catch (e) { }
  }

  public loadGame(game: Game): void {
    if (
      game.globalAchievements[GLOBAL_ACHIEVEMENTS.THE_RIFT_CLOSED] ||
      game.globalAchievements[GLOBAL_ACHIEVEMENTS.THE_DEMON_DETHRONED]
    ) {
      // give the new achievement
      game.globalAchievements[GLOBAL_ACHIEVEMENTS.THE_RIFT_NEUTRALIZED] = true;

      // clear the old achievements to reduce confusion
      game.globalAchievements[GLOBAL_ACHIEVEMENTS.THE_RIFT_CLOSED] = false;
      game.globalAchievements[GLOBAL_ACHIEVEMENTS.THE_DEMON_DETHRONED] = false;
    }

    if (game.monsterHealth && !game.monsterHealth.defaultNumPlaying) {
      game.monsterHealth.defaultNumPlaying = 4;
    }

    if (!game.donations) {
      game.donations = 0;
    }

    this.game = game;
  }

  // public saveGame(): void {
  //   const dateNow = new Date();
  //   const filename = 'gloomhaven_save_' + dateNow.toISOString();
  //   let data = JSON.stringify(this.game, null, 2);
  //   data = data.replace(/[\n\r]/g, '\r\n');

  //   const blob = new Blob([data], {type: 'text/plain;charset=utf-8'});
  //   FileSaver.saveAs(blob, filename);
  // }

  public startSaveToDropbox(): void {
    const body = JSON.stringify(this.game);
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    this._http.post<any>(
      'https://api.myjson.com/bins',
      body,
      { headers: headers }
    ).subscribe(
      data => {
        this.dropboxUri = data.uri;
        this.setModal.next({ data: this.dropboxUri, type: 'dropboxSave' });
      },
      error => this.setModal.next({ data: error, type: 'error' })
    );
  }

  saveToDropbox(uri: string) {
    const that = this;
    const dateNow = new Date();
    const filename = 'gloomhaven_save_' + dateNow.toISOString() + '.txt';

    Dropbox.save(
      uri,
      filename,
      {
        success: () => {
          that.closeModal.next();
        },
        error: (error) => {
          that.setModal.next({ data: error, type: 'error' });
        }
      }
    );
  }

  public loadFromDropbox() {
    const that = this;

    Dropbox.choose({
      success: (files) => {
        that.chosenFromDropbox(files[0]);
      },
      linkType: 'direct',
      extensions: ['text']
    });
  }

  private chosenFromDropbox(file: any) {
    this._http.get(file.link).subscribe(
      (data: Game) => this.loadGame(data),
      error => this.setModal.next({ data: error, type: 'error' })
    );
  }

  public togglePartyAchievement(achievement: string): void {
    const partyAchievementsCopy = this._game.partyAchievements;

    if (this._game.partyAchievements[achievement] === 'true')
      partyAchievementsCopy[achievement] = 'lost';
    else if (partyAchievementsCopy[achievement] === 'lost')
      partyAchievementsCopy[achievement] = null;
    else
      partyAchievementsCopy[achievement] = 'true';

    this._game.partyAchievements = partyAchievementsCopy;
  }

  public toggleGlobalAchievement(achievement: string): void {
    const globalAchievementsCopy = this._game.globalAchievements;

    if (this._game.globalAchievements[achievement]) {
      globalAchievementsCopy[achievement] = null;
    }
    else {
      if (achievement.startsWith('Artifact')) {
        globalAchievementsCopy[GLOBAL_ACHIEVEMENTS.ARTIFACT_RECOVERED] = null;
        globalAchievementsCopy[GLOBAL_ACHIEVEMENTS.ARTIFACT_CLEANSED] = null;
        globalAchievementsCopy[GLOBAL_ACHIEVEMENTS.ARTIFACT_LOST] = null;
      }
      else if (achievement.startsWith('The Drake')) {
        globalAchievementsCopy[GLOBAL_ACHIEVEMENTS.THE_DRAKE_AIDED] = null;
        globalAchievementsCopy[GLOBAL_ACHIEVEMENTS.THE_DRAKE_SLAIN] = null;
      }
      else if (achievement.startsWith('City Rule')) {
        globalAchievementsCopy[GLOBAL_ACHIEVEMENTS.CITY_RULE_DEMONIC] = null;
        globalAchievementsCopy[GLOBAL_ACHIEVEMENTS.CITY_RULE_ECONOMIC] = null;
        globalAchievementsCopy[GLOBAL_ACHIEVEMENTS.CITY_RULE_MILITARISTIC] = null;
      }
      else if (achievement.startsWith('The Voice')) {
        globalAchievementsCopy[GLOBAL_ACHIEVEMENTS.THE_VOICE_FREED] = null;
        globalAchievementsCopy[GLOBAL_ACHIEVEMENTS.THE_VOICE_SILENCED] = null;
      }
      else if (achievement.startsWith('The Demon Dethroned')) {
        globalAchievementsCopy[GLOBAL_ACHIEVEMENTS.THE_RIFT_CLOSED] = null;
      }
      else if (achievement.startsWith('The Rift Closed')) {
        globalAchievementsCopy[GLOBAL_ACHIEVEMENTS.THE_DEMON_DETHRONED] = null;
      }

      globalAchievementsCopy[achievement] = 'true';
    }

    this._game.globalAchievements = globalAchievementsCopy;
  }

  public changeReputation(amount: number) {
    let newRep = this._game.reputation + amount;

    if (newRep > 20) {
      newRep = 20;
    }
    else if (newRep < -20) {
      newRep = -20;
    }

    this._game.reputation = newRep;
  }

  public changeProsperity(amount: number): void {
    let newProsperity = this._game.prosperity + amount;

    if (newProsperity > this.MAX_PROSPERITY) {
      newProsperity = this.MAX_PROSPERITY;
    }
    else if (newProsperity < 0) {
      newProsperity = 0;
    }

    this._game.prosperity = newProsperity;
  }

  public donateToGreatOak(amount: number): void {
    let newDonations = this._game.donations + amount;
    let prosperityChange = 0;

    if (newDonations > 100)
      newDonations = 100;
    else if (newDonations < 0)
      newDonations = 0;

    if (newDonations !== this._game.donations) {
      if (DONATION_MILESTONES.indexOf(newDonations) > -1 && amount > 0)
        prosperityChange = 1;
      else if (DONATION_MILESTONES.indexOf(this._game.donations) > -1 && amount < 0)
        prosperityChange = -1;
    }

    let newProsperity = this._game.prosperity + prosperityChange;

    if (newProsperity > 64)
      newProsperity = 64;
    else if (newProsperity < 0)
      newProsperity = 0;

    this._game.donations = newDonations;
    this._game.prosperity = newProsperity;
  }

}
