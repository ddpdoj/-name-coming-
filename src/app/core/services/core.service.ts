import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { MatSidenav } from '@angular/material/sidenav';

import { Game } from '../models/game.model';
import { GLOBAL_ACHIEVEMENTS } from '../constants/global-achievements';
import { DONATION_MILESTONES } from '../constants/treasures';

@Injectable()
export class CoreService {

  public toggleSidenavState = new Subject();
  public undoLastChange = new Subject();
  public CHANGE_GAME_EVENT = 'changeGame';
  public MAX_PROSPERITY = 64;
  private dropboxUri = '';
  private _game: Game;
  private _previousState: Game;

  public set game(value: Game) {
    this._game = value;
  }
  public get game(): Game {
    return this._game;
  }

  public set previousState(value: Game) {
    this._previousState = value;
  }
  public get previousState(): Game {
    return this._previousState;
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
    this.toggleSidenavState.next();
  }

  public undoLast(): void {
    this.undoLastChange.next();
  }

  public getLastSavedGame(): Game {
    return this._game;
  }

  public togglePartyAchievement(achievement: string): void {
    const acquiredPartyAchievementsCopy = this._game.acquiredPartyAchievements;
    const availablePartyAchievementsCopy = this._game.availablePartyAchievements;

    if (this._game.acquiredPartyAchievements[achievement] === 'true')
      acquiredPartyAchievementsCopy[achievement] = 'lost';
    else {
      acquiredPartyAchievementsCopy[achievement] = 'true';
      availablePartyAchievementsCopy[achievement] = null;
    }

    this._game.acquiredPartyAchievements = acquiredPartyAchievementsCopy;
    this._game.availablePartyAchievements = availablePartyAchievementsCopy;
  }

  public toggleGlobalAchievement(achievement: string): void {
    const acquiredGlobalAchievementsCopy = this._game.acquiredGlobalAchievements;
    const availableGlobalAchievementsCopy = this._game.availableGlobalAchievements;


    if (achievement.startsWith('Artifact')) {
      acquiredGlobalAchievementsCopy[GLOBAL_ACHIEVEMENTS.ARTIFACT_RECOVERED] = null;
      acquiredGlobalAchievementsCopy[GLOBAL_ACHIEVEMENTS.ARTIFACT_CLEANSED] = null;
      acquiredGlobalAchievementsCopy[GLOBAL_ACHIEVEMENTS.ARTIFACT_LOST] = null;
    }
    else if (achievement.startsWith('The Drake')) {
      acquiredGlobalAchievementsCopy[GLOBAL_ACHIEVEMENTS.THE_DRAKE_AIDED] = null;
      acquiredGlobalAchievementsCopy[GLOBAL_ACHIEVEMENTS.THE_DRAKE_SLAIN] = null;
    }
    else if (achievement.startsWith('City Rule')) {
      acquiredGlobalAchievementsCopy[GLOBAL_ACHIEVEMENTS.CITY_RULE_DEMONIC] = null;
      acquiredGlobalAchievementsCopy[GLOBAL_ACHIEVEMENTS.CITY_RULE_ECONOMIC] = null;
      acquiredGlobalAchievementsCopy[GLOBAL_ACHIEVEMENTS.CITY_RULE_MILITARISTIC] = null;
    }
    else if (achievement.startsWith('The Voice')) {
      acquiredGlobalAchievementsCopy[GLOBAL_ACHIEVEMENTS.THE_VOICE_FREED] = null;
      acquiredGlobalAchievementsCopy[GLOBAL_ACHIEVEMENTS.THE_VOICE_SILENCED] = null;
    }
    else if (achievement.startsWith('The Demon Dethroned')) {
      acquiredGlobalAchievementsCopy[GLOBAL_ACHIEVEMENTS.THE_RIFT_CLOSED] = null;
    }
    else if (achievement.startsWith('The Rift Closed')) {
      acquiredGlobalAchievementsCopy[GLOBAL_ACHIEVEMENTS.THE_DEMON_DETHRONED] = null;
    }

    acquiredGlobalAchievementsCopy[achievement] = 'true';

    this._game.acquiredGlobalAchievements = acquiredGlobalAchievementsCopy;
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

}
