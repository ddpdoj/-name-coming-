import { Component } from '@angular/core';

import { MyCommonService } from '../../common/services/common.service';
import { Game } from '../../common/models/game.model';
import { Scenerio, SCENARIOS } from '../../common/constants/scenerios';

@Component({
  selector: 'app-scenarios',
  templateUrl: './scenarios.component.html',
  styleUrls: ['./scenarios.component.scss']
})
export class ScenariosComponent {

  public game: Game;
  public campaignScenarios: any[];
  public personalQuests: any[];
  public randomScenarios: any[];
  public otherScenarios: any[];
  public kickstarterScenarios: any[];
  public soloScenarios: any[];

  constructor(public service: MyCommonService) {
    this.game = JSON.parse(JSON.stringify(this.service.game));

    for (let i = 1; i < SCENARIOS.length; i++) {
      if (i < 52)
        this.campaignScenarios.push(this.separateScenarios(i));
      else if (i < 63)
        this.personalQuests.push(this.separateScenarios(i));
      else if (i < 72)
        this.randomScenarios.push(this.separateScenarios(i));
      else if (i < 96)
        this.otherScenarios.push(this.separateScenarios(i));
      else if (i < 106) {
        const scenario = this.separateScenarios(i);
        scenario['buttonText'] = 'K' + (i - 95);

        this.kickstarterScenarios.push(scenario);
      }
      else if (i < 123) {
        const scenario = this.separateScenarios(i);
        scenario['buttonText'] = 'S' + (i - 105);

        this.soloScenarios.push(scenario);
      }
    }
  }

  private separateScenarios(index: number): any {
    if (index > SCENARIOS.length + 1) {
      return {};
    }

    const returnItem = { colClass: 'col-xs-6' };
    const scenario = SCENARIOS[index];

    if (this.game.scenariosComplete.indexOf(index) > -1)
      returnItem['buttonClass'] = 'btn-scoundrel';
    else if (this.game.scenariosUnlocked.indexOf(index) > -1) {
      if (this.isAllowedToDoScenario(index))
        returnItem['buttonClass'] = 'btn-doomstalker';
      else
        returnItem['buttonClass'] = 'btn-lightning';

      returnItem['buttonText'] = index + ': ' + scenario.title;
      returnItem['colClass'] = 'col-xs-12';
    }

    return returnItem;
  }

  private isAllowedToDoScenario(index: number): boolean {
    const scenario = SCENARIOS[index];

    if (scenario.onlyOneAchievementRequired) {
      if (scenario.globalAchievementsRequired.length > 0) {
        for (let i = 0; i < scenario.globalAchievementsRequired.length; i++) {
          const requiredGlobalAchievement = scenario.globalAchievementsRequired[i];

          if (this.game.globalAchievements[requiredGlobalAchievement] === 'true')
            return true;
        }
      }

      if (scenario.partyAchievementsRequired.length > 0) {
        for (let i = 0; i < scenario.partyAchievementsRequired.length; i++) {
          const requiredPartyAchievement = scenario.partyAchievementsRequired[i];

          if (this.game.partyAchievements[requiredPartyAchievement] === 'true')
            return true;
        }
      }

      return false;
    }
    else {
      if (scenario.globalAchievementsRequired.length > 0) {
        for (let i = 0; i < scenario.globalAchievementsRequired.length; i++) {
          const requiredGlobalAchievement = scenario.globalAchievementsRequired[i];

          if (this.game.globalAchievements[requiredGlobalAchievement] !== 'true')
            return false;
        }
      }

      if (scenario.globalAchievementsRequiredIncomplete.length > 0) {
        for (let i = 0; i < scenario.globalAchievementsRequiredIncomplete.length; i++) {
          const requiredGlobalAchievementIncomplete = scenario.globalAchievementsRequiredIncomplete[i];

          if (this.game.globalAchievements[requiredGlobalAchievementIncomplete])
            return false;
        }
      }

      if (scenario.partyAchievementsRequired.length > 0) {
        for (let i = 0; i < scenario.partyAchievementsRequired.length; i++) {
          const requiredPartyAchievement = scenario.partyAchievementsRequired[i];

          if (this.game.partyAchievements[requiredPartyAchievement] !== 'true')
            return false;
        }
      }
    }

    return true;
  }

  public toggleScenarioClick(index: number): void {
    if (this.game.scenariosComplete.indexOf(index) >= 0)
      this.lockScenario(index);
    else if (this.game.scenariosUnlocked.indexOf(index) >= 0) {
      if (this.isAllowedToDoScenario(index))
        this.completeScenario(index);
      else
        this.lockScenario(index);
    }
    else
      this.unlockScenario(index);
  }

  private completeScenario(index: number): void {
    if (this.game.scenariosComplete.indexOf(index) >= 0)
      return;

    this.game.scenariosComplete.push(index);
    this.service.game = JSON.parse(JSON.stringify(this.game));
  }

  private unlockScenario(index: number): void {
    if (this.game.scenariosUnlocked.indexOf(index) >= 0) {
      return;
    }

    this.game.scenariosUnlocked.push(index);
    this.service.game = JSON.parse(JSON.stringify(this.game));
  }

  private lockScenario(index: number): void {
    const indexOfScenarioToRemoveFromUnlocked = this.game.scenariosUnlocked.indexOf(index);
    const indexOfScenarioToRemoveFromComplete = this.game.scenariosComplete.indexOf(index);

    if (indexOfScenarioToRemoveFromUnlocked >= 0) {
      this.game.scenariosUnlocked.splice(indexOfScenarioToRemoveFromUnlocked, 1);
    }

    if (indexOfScenarioToRemoveFromComplete >= 0) {
      this.game.scenariosUnlocked.splice(indexOfScenarioToRemoveFromComplete, 1);
    }

    this.service.game = JSON.parse(JSON.stringify(this.game));
  }

}
