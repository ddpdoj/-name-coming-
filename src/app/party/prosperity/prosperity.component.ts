import { Component, ChangeDetectorRef } from '@angular/core';

import { CoreService } from '../../core/services/core.service';
import { Game } from '../../core/models/game.model';
import { DONATION_MILESTONES, TREASURE_SCENARIOS, TREASURES, SCENARIO_TREAURES } from '../../core/constants/treasures';

@Component({
  selector: 'app-prosperity',
  templateUrl: './prosperity.component.html',
  styleUrls: ['./prosperity.component.scss']
})
export class ProsperityComponent {

  /*** Public Properties ***/
  public game: Game;
  public donationMilestones = DONATION_MILESTONES;
  public treasures = TREASURES;
  public treasureScenarios = TREASURE_SCENARIOS;
  public level = 0;
  public prosperityCountArray: number[] = [];
  public donationsArray: number[] = [];
  public donationsCountArray: number[] = [];
  public itemLevels = [
    '001 - 014',
    '015 - 021',
    '022 - 028',
    '029 - 035',
    '036 - 042',
    '043 - 049',
    '050 - 056',
    '057 - 063',
    '064 - 070'
  ];
  /*** End Public Properties ***/

  /*** Public Getters ***/
  public get prosperityLevel(): number {
    switch (true) {
      case (this.game.prosperity < 4):
        return 1;
      case (this.game.prosperity < 9):
        return 2;
      case (this.game.prosperity < 15):
        return 3;
      case (this.game.prosperity < 22):
        return 4;
      case (this.game.prosperity < 30):
        return 5;
      case (this.game.prosperity < 39):
        return 6;
      case (this.game.prosperity < 50):
        return 7;
      case (this.game.prosperity < 64):
        return 8;
      case (this.game.prosperity >= 64):
        return 9;
      default:
        return 1;
    }
  }
  public get availableTreasures() {
    let availableTreasures = [];

    for (let i = 0; i < this.game.scenariosUnlocked.length; i++) {
      const scenarioNumber = this.game.scenariosUnlocked[i];
      availableTreasures = availableTreasures.concat(SCENARIO_TREAURES[scenarioNumber]);
    }

    return availableTreasures;
  }
  public get treasuresInCompleteScenarios() {
    let treasuresInCompleteScenarios = [];

    for (let i = 0; i < this.game.scenariosComplete.length; i++) {
      const scenarioNumber = this.game.scenariosComplete[i];
      treasuresInCompleteScenarios = treasuresInCompleteScenarios.concat(SCENARIO_TREAURES[scenarioNumber]);
    }

    return treasuresInCompleteScenarios;
  }
  /*** End Public Getters ***/

  constructor(
    private changeDetector: ChangeDetectorRef,
    public service: CoreService
  ) {
    this.game = JSON.parse(JSON.stringify(this.service.game));
    this.prosperityCountArray = Array(65 - this.game.prosperity).fill(0).map(
      (x, i) => this.game.prosperity + 1 + i);
    this.donationsArray = Array(this.game.donations + 1).fill(0).map(
      (x, i) => i + 1);
    this.donationsCountArray = Array(100 - this.game.donations).fill(0).map(
      (x, i) => this.game.donations + 1 + i);
  }

  public changeProsperity(increment: number): void {
    this.service.changeProsperity(increment);

    if (increment === 1 && this.service.game['prosperity'] > this.game.prosperity)
      this.prosperityCountArray.splice(0, 1);
    else if (increment === -1 && this.service.game['prosperity'] < this.game.prosperity)
      this.prosperityCountArray.splice(0, 0, this.prosperityCountArray[0] - 1);

    this.game = JSON.parse(JSON.stringify(this.service.game));
    this.changeDetector.detectChanges();
  }

  public donateToGreatOak(increment: number): void {
    this.service.changeProsperity(increment);

    if (increment === 1 && this.service.game['donations'] > this.game.donations) {
      this.donationsArray.push(this.service.game['donations']);
      this.donationsCountArray.splice(0, 1);
    }
    else if (increment === -1 && this.service.game['donations'] < this.game.donations) {
      this.donationsArray.pop();
      this.donationsCountArray.splice(0, 0, this.donationsCountArray[0] - 1);
    }

    this.game = JSON.parse(JSON.stringify(this.service.game));
    this.changeDetector.detectChanges();
  }

  public toggleTreasure(index: number) {
    const treasuresUnlockedCopy = this.game.treasuresUnlocked;
    const indexOfScenarioToRemoveFromUnlocked = treasuresUnlockedCopy.indexOf(index);

    if (indexOfScenarioToRemoveFromUnlocked >= 0)
      treasuresUnlockedCopy.splice(indexOfScenarioToRemoveFromUnlocked, 1);
    else if (this.availableTreasures.indexOf(index) >= 0)
      treasuresUnlockedCopy.push(index);

    this.game.treasuresUnlocked = treasuresUnlockedCopy;
    this.service.game = JSON.parse(JSON.stringify(this.game));
  }

}
