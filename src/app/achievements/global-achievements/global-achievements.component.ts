import { Component } from '@angular/core';

import { POSSIBLE_ACHIEVEMENTS } from '../../core/constants/achievements';
import { CoreService } from '../../core/services/core.service';

@Component({
  selector: 'app-global-achievements',
  templateUrl: './global-achievements.component.html',
  styleUrls: ['./global-achievements.component.scss']
})
export class GlobalAchievementsComponent {

  public possibleAchievements = POSSIBLE_ACHIEVEMENTS;

  constructor(public service: CoreService) { }

}
