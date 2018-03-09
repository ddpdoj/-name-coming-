import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { MatSidenav } from '@angular/material/sidenav';

import { Game } from '../models/game.model';
import { GLOBAL_ACHIEVEMENTS } from '../constants/achievements';
import { DONATION_MILESTONES } from '../constants/treasures';

@Injectable()
export class CoreService {

  public subject = new Subject();
  public CHANGE_GAME_EVENT = 'changeGame';
  public MAX_PROSPERITY = 64;
  private dropboxUri = '';
  private _game: Game;

  public set game(value: Game) {
    this._game = value;
  }
  public get game(): Game {
    return this._game;
  }
  public get shopPriceModifier(): number {
    if (this._game.reputation >= 19) return -5;
    else if (this._game.reputation >= 15) return -4;
    else if (this._game.reputation >= 11) return -3;
    else if (this._game.reputation >= 7) return -2;
    else if (this._game.reputation >= 3) return -1;
    else if (this._game.reputation >= -2) return 0;
    else if (this._game.reputation >= -6) return 1;
    else if (this._game.reputation >= -10) return 2;
    else if (this._game.reputation >= -14) return 3;
    else if (this._game.reputation >= -18) return 4;
    else if (this._game.reputation >= -20) return 5;
    else return 0;
  }

  constructor() {
    this.game = this.getLastSavedGame() ? this.getLastSavedGame() : new Game();
  }

  public toggleSidenav(): void {
    this.subject.next();
  }

  public getLastSavedGame(): Game {
    return this._game;
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

  // public changeProsperity(amount: number): void {
  //   let newProsperity = this._game.prosperity + amount;

  //   if (newProsperity > this.MAX_PROSPERITY) {
  //     newProsperity = this.MAX_PROSPERITY;
  //   }
  //   else if (newProsperity < 0) {
  //     newProsperity = 0;
  //   }

  //   this._game.prosperity = newProsperity;
  // }

  // public donateToGreatOak(amount: number): void {
  //   const newDonations = this._game.donations + amount;
  //   let prosperityChange = 0;

  //   if (newDonations !== this._game.donations) {
  //     if (DONATION_MILESTONES.indexOf(newDonations) > -1 && amount > 0)
  //       prosperityChange = 1;
  //     else if (DONATION_MILESTONES.indexOf(this._game.donations) > -1 && amount < 0)
  //       prosperityChange = -1;
  //   }

  //   let newProsperity = this._game.prosperity + prosperityChange;

  //   if (newProsperity > 64)
  //     newProsperity = 64;
  //   else if (newProsperity < 0)
  //     newProsperity = 0;

  //   this._game.donations = newDonations;
  //   this._game.prosperity = newProsperity;
  // }

}
