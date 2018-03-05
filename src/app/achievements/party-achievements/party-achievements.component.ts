import { Component } from '@angular/core';

import { CoreService } from '../../core/services/core.service';
import { PARTY_ACHIEVEMENTS } from '../../core/constants/party-achievements';

@Component({
  selector: 'app-party-achievements',
  templateUrl: './party-achievements.component.html',
  styleUrls: ['./party-achievements.component.scss']
})
export class PartyAchievementsComponent {

  public achievements = Object.values(PARTY_ACHIEVEMENTS);

  constructor(public service: CoreService) { }

}
