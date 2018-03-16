import { Component, ElementRef, ChangeDetectorRef, AfterViewChecked } from '@angular/core';

import { CoreService } from '../../core/services/core.service';
import { Game } from '../../core/models/game.model';

@Component({
  selector: 'app-party-achievements',
  templateUrl: './party-achievements.component.html',
  styleUrls: ['./party-achievements.component.scss']
})
export class PartyAchievementsComponent implements AfterViewChecked {

  public acquiredAchievements = [];
  public availableAchievements = [];
  public calcGridHeight = 0;
  public game: Game;

  constructor(
    private el: ElementRef,
    private changeDetector: ChangeDetectorRef,
    public service: CoreService
  ) {
    this.game = JSON.parse(JSON.stringify(this.service.game));
    this.acquiredAchievements = Object.values(this.service.game['acquiredPartyAchievements']);
    this.availableAchievements = Object.values(this.service.game['availablePartyAchievements']);
  }

  ngAfterViewChecked() {
    const bodyHeight = this.el.nativeElement.querySelector('#global-accordion')['clientHeight'];
    this.calcGridHeight = this.calcGridHeight !== bodyHeight - 130 ? bodyHeight - 130 : this.calcGridHeight;

    this.changeDetector.detectChanges();
  }

}
