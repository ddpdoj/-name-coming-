import { Component } from '@angular/core';

import { POSSIBLE_ACHIEVEMENTS } from '../../common/constants/global-achievements';
import { MyCommonService } from '../../common/services/common.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent {

  public possibleAchievements = POSSIBLE_ACHIEVEMENTS;

  constructor(public service: MyCommonService) { }

}
