import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

import FileSaver from 'file-saver';

import { Game } from '../models/game.model';
import { GLOBAL_ACHIEVEMENTS } from '../models/global-achievements.model';

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

  constructor(private _http: HttpClient) {
    this.game = this.getGameLocalStorage() ? this.getGameLocalStorage() : {
      name: '',
      prosperity: 0,
      donations: 0,
      partyLocation: '',
      partyNotes: '',
      partyAchievements: '',
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

  public upgradeGame(game: Game) {
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
  }

  public loadGame(game) {
    this.upgradeGame(game);
  }

  public saveGame() {
    const dateNow = new Date();
    const filename = 'gloomhaven_save_' + dateNow.toISOString();
    let data = JSON.stringify(this.game, null, 2);
    data = data.replace(/[\n\r]/g, '\r\n');

    const blob = new Blob([data], {type: 'text/plain;charset=utf-8'});
    FileSaver.saveAs(blob, filename);
  }

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

    // this particular Dropbox saver requires that the file to be saved is accessible via a URL
    // so first we upload the file to a temporary file host
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

}
