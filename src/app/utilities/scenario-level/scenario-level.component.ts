import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-scenario-level',
  templateUrl: './scenario-level.component.html',
  styleUrls: ['./scenario-level.component.scss']
})
export class ScenarioLevelComponent {

  public levelArray = [];
  public characters = [];
  public characterLevels = {
    character1: 0,
    character2: 0,
    character3: 0,
    character4: 0
  };

  constructor(private changeDetector: ChangeDetectorRef) {
    for (let i = 1; i <= 9; i++) {
      this.levelArray.push(i);
    }

    this.characters = Object.keys(this.characterLevels);
  }

  public levelButtonClick(character, value): void {
    this.characters[character] = this.characters[character] === value ? 0 : value;

    this.changeDetector.detectChanges();
  }

  public normalScenarioLevel(): string {
    let numberCharacters = 0;
    let totalLevels = 0;

    const levels = Object.values(this.characterLevels);

    levels.forEach(level => {
      if (level > 0) {
        totalLevels += level;
        numberCharacters += 1;
      }
    });

    const scenarioLevel = Math.ceil(totalLevels / numberCharacters / 2).toString() || '-';

    return scenarioLevel;
  }

}
