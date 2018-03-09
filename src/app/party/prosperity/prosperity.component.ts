import { Component, ChangeDetectorRef } from '@angular/core';

import { CoreService } from '../../core/services/core.service';
import { Game } from '../../core/models/game.model';
import { DONATION_MILESTONES, PROSPERITY_MILESTONES } from '../../core/constants/treasures';

@Component({
  selector: 'app-prosperity',
  templateUrl: './prosperity.component.html',
  styleUrls: ['./prosperity.component.scss']
})
export class ProsperityComponent {

  public prosperityMilestones = PROSPERITY_MILESTONES;
  public donationMilestones = DONATION_MILESTONES;
  public itemLevels = [
    ' - 014',
    ' - 021',
    ' - 028',
    ' - 035',
    ' - 042',
    ' - 049',
    ' - 056',
    ' - 063',
    ' - 070'
  ];
  private game: Game;
  private _shopModifiers = [
    {rep: -20, mod: 5},
    {rep: -18, mod: 4},
    {rep: -14, mod: 3},
    {rep: -10, mod: 2},
    {rep: -6, mod: 1},
    {rep: -2, mod: 0},
    {rep: 3, mod: -1},
    {rep: 7, mod: -2},
    {rep: 11, mod: -3},
    {rep: 15, mod: -4},
    {rep: 19, mod: -5}
  ];

  /*** Public Getters ***/
  public get prosperityLevel(): number {
    for (let i = 0; i < PROSPERITY_MILESTONES.length - 1; i++) {
      if (
        this.service.game['prosperity'] >= PROSPERITY_MILESTONES[i] &&
        this.service.game['prosperity'] < PROSPERITY_MILESTONES[i + 1]
      )
        return i + 1;
    }

    return this.service.game['prosperity'] === 64 ? 9 : 1;
  }
  public get prosperityCounter(): number[] {
    for (let i = 0; i < PROSPERITY_MILESTONES.length - 1; i++) {
      if (
        this.service.game['prosperity'] > PROSPERITY_MILESTONES[i] &&
        this.service.game['prosperity'] < PROSPERITY_MILESTONES[i + 1] + 1
      ) {
        const prosperityDiff = this.service.game['prosperity'] - PROSPERITY_MILESTONES[i];
        const prosperityModifier = this.service.game['prosperity'] > 4 ? 1 : 0;
        const currentProsperityRange = PROSPERITY_MILESTONES[i + 1] - PROSPERITY_MILESTONES[i];
        const prosperityMod = this.service.game['prosperity'] > 0 && prosperityDiff % currentProsperityRange > 0 ?
          prosperityDiff % currentProsperityRange : currentProsperityRange;

        return new Array(currentProsperityRange).fill(prosperityMod);
      }
    }

    return new Array(4).fill(0);
  }
  public get nextProsperityCounter(): number[] {
    for (let i = 0; i < PROSPERITY_MILESTONES.length - 1; i++) {
      if (
        PROSPERITY_MILESTONES[i + 2] &&
        this.service.game['prosperity'] > PROSPERITY_MILESTONES[i] &&
        this.service.game['prosperity'] < PROSPERITY_MILESTONES[i + 1] + 1
      ) {
        const arrayCount = PROSPERITY_MILESTONES[i + 2] - PROSPERITY_MILESTONES[i + 1];

        return new Array(arrayCount).fill(-1);
      }
    }

    return this.service.game['prosperity'] === 0 ? new Array(5).fill(-1) : [];
  }
  public get donationsCounter(): number[] {
    for (let i = 0; i < DONATION_MILESTONES.length - 1; i++) {
      if (
        this.service.game['donations'] > DONATION_MILESTONES[i] &&
        this.service.game['donations'] < DONATION_MILESTONES[i + 1] + 1
      ) {
        const donationDiff = this.service.game['donations'] - DONATION_MILESTONES[i];
        const donationModifier = this.service.game['donations'] > 100 ? 1 : 0;
        const currentDonationRange = DONATION_MILESTONES[i + 1] - DONATION_MILESTONES[i];
        const donationMod = this.service.game['donations'] > 0 && donationDiff % currentDonationRange > 0 ?
          donationDiff % currentDonationRange : currentDonationRange;

        return new Array(currentDonationRange / 10).fill(donationMod);
      }
    }

    return new Array(10).fill(0);
  }
  public get nextDonationsCounter(): number[] {
    for (let i = 0; i < DONATION_MILESTONES.length - 1; i++) {
      if (
        DONATION_MILESTONES[i + 2] &&
        this.service.game['donations'] > DONATION_MILESTONES[i] &&
        this.service.game['donations'] < DONATION_MILESTONES[i + 1] + 1
      ) {
        const arrayCount = DONATION_MILESTONES[i + 2] - DONATION_MILESTONES[i + 1];

        return new Array(arrayCount / 10).fill(-1);
      }
    }

    return this.service.game['donations'] === 0 ? new Array(5).fill(-1) : [];
  }
  public get shopModifier(): number {
    let shopMod = 0;

    this._shopModifiers.forEach(modifier => {
      shopMod = this.service.game['reputation'] >= modifier.rep ?
        modifier.mod : shopMod;
    });

    return shopMod;
  }
  /*** End Public Getters ***/

  constructor(
    private changeDetector: ChangeDetectorRef,
    public service: CoreService
  ) {
    this.game = JSON.parse(JSON.stringify(this.service.game));
  }

  public changeProsperity(increment: number): void {
    if (
      (this.service.game['prosperity'] === PROSPERITY_MILESTONES[this.prosperityLevel - 1] &&
      increment === -1) || this.service.game['prosperity'] > 63
    ) {
      return;
    }

    this.game.prosperity = this.service.game['prosperity'] + increment;
    this.service.game = JSON.parse(JSON.stringify(this.game));
    this.changeDetector.detectChanges();
  }

  public changeReputation(increment: number): void {
    if (
      (this.service.game['reputation'] < -19 && increment === -1) ||
      (this.service.game['reputation'] > 19 && increment === 1)
    ) {
      return;
    }

    this.game.reputation = this.service.game['reputation'] + increment;
    this.service.game = JSON.parse(JSON.stringify(this.game));
    this.changeDetector.detectChanges();
  }

  public prosperityCounterClasses(index: number, item: number, last: boolean): any {
    const counterInactive = (this.service.game['prosperity'] === 0 && item === 0) ||
      (this.service.game['prosperity'] !== 0 && item < index + 1);
    const counterMedium = this.nextProsperityCounter.length > 9;
    const counterSmall = this.nextProsperityCounter.length > 11 ||
      this.nextProsperityCounter.length === 0;

    return {
      'counter-inactive': counterInactive,
      'counter-md': counterMedium,
      'counter-sm': counterSmall,
      'last-counter': last
    };
  }

  public donationsCounterClasses(index: number, item: number, last: boolean): any {
    const counterInactive = (this.service.game['donations'] === 0 && item === 0) ||
      (this.service.game['donations'] !== 0 && item < (index + 1) * 10);

    return {
      'counter-inactive': counterInactive,
      'last-counter': last
    };
  }

  public donateToGreatOak(amount: number): void {
    this.game.donations = this.service.game['donations'] < 1000 ?
      this.service.game['donations'] + amount : this.service.game['donations'];

    this.game.prosperity = (this.service.game['prosperity'] < 64 &&
      this.game.donations !== this.service.game['donations'] &&
      DONATION_MILESTONES.indexOf(this.game.donations) > -1) ?
      this.service.game['prosperity'] + 1 : this.service.game['prosperity'];

    this.service.game = JSON.parse(JSON.stringify(this.game));
    this.changeDetector.detectChanges();
  }

}
