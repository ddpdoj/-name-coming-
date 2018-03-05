import { Component } from '@angular/core';

import { CoreService } from '../../core/services/core.service';
import { EnhancementTypes } from '../../core/models/enhancement-types.model';
import * as Upgrades from '../../core/constants/upgrades';

class Types {
  public stickerType: string;
  public summonPlusOneAbility: string;
  public baseOtherEffect: string;
  public playerPlusOneAbility: string;
  public levelOfAbilityCard: number;
  public numberOfCurrentlyTargetedHexes: number;
  public numberOfPreviousEnhancements: number;
  public multipleTargets: boolean;
}

@Component({
  selector: 'app-enhancements',
  templateUrl: './enhancements.component.html',
  styleUrls: ['./enhancements.component.scss']
})
export class EnhancementsComponent {

  public cost: number;
  public enhancementState: EnhancementTypes;
  public stickerTypes = Upgrades.STICKER_TYPES;
  public icons = Upgrades.ICONS;
  public previousEnhancementCost = Upgrades.PREVIOUS_ENHANCEMENT_COST;
  public levelCost = Upgrades.LEVEL_COST;
  public playerPlusOneAbilityLines = Upgrades.PLAYER_PLUS_ONE_ABILITY_LINES;
  public summonPlusOneAbilityLines = Upgrades.SUMMON_PLUS_ONE_ABILITY_LINES;
  public baseOtherEffects = Upgrades.BASE_OTHER_EFFECTS;
  public abilityCardLevels = [];
  public previousEnhancements = [];
  public numberOfHexes = [];

  constructor(public service: CoreService) {
    this.cost = this.calculateCost();

    for (let i = 2; i < 14; i++) {
      this.numberOfHexes.push(i);
    }
    for (let i = 0; i < 4; i++) {
      this.previousEnhancements.push(i);
    }
    for (let i = 1; i < 10; i++) {
      this.abilityCardLevels.push(i);
    }

    const test = this.playerPlusOneAbilityLines[this.playerPlusOneAbilityLines['cost']];
  }

  public hexCost(index: number): number {
    return Math.floor( 200 / index );
  }

  private calculateCost(): number {
    let cost = 0;

    if (this.enhancementState.stickerType === 'playerPlus1') {
      if (this.enhancementState.playerPlusOneAbility)
        cost += Upgrades.PLAYER_PLUS_ONE_ABILITY_LINES[this.enhancementState.playerPlusOneAbility].cost;
      else
        return 0;
    }
    else if (this.enhancementState.stickerType === 'summonPlus1') {
      if (this.enhancementState.summonPlusOneAbility)
        cost += Upgrades.SUMMON_PLUS_ONE_ABILITY_LINES[this.enhancementState.summonPlusOneAbility].cost;
      else
        return 0;
    }
    else if (this.enhancementState.stickerType === 'attackHex')
      cost += Math.floor( 200 / this.enhancementState.numberOfCurrentlyTargetedHexes );
    else if (this.enhancementState.stickerType === 'otherEffect') {
      if (this.enhancementState.baseOtherEffect)
        cost += Upgrades.BASE_OTHER_EFFECTS[this.enhancementState.baseOtherEffect].cost;
      else
        return 0;
    }
    else
      return 0;

    if (this.enhancementState.multipleTargets && this.enhancementState.stickerType !== 'attackHex')
      cost *= 2;

    cost += Upgrades.LEVEL_COST[this.enhancementState.levelOfAbilityCard - 1];
    cost += Upgrades.PREVIOUS_ENHANCEMENT_COST[this.enhancementState.numberOfPreviousEnhancements];

    return cost;
  }

  public stickerTypeClick(type): void {
    if (this.enhancementState.stickerType === type)
      this.enhancementState.stickerType = '';
    else
      this.enhancementState.stickerType = type;
  }

  summonPlusOneAbilityClick(effect) {
    if (this.enhancementState.summonPlusOneAbility === effect)
      this.enhancementState.summonPlusOneAbility = '';
    else
      this.enhancementState.summonPlusOneAbility = effect;
  }

  baseOtherEffectClick(effect) {
    if (this.enhancementState.baseOtherEffect === effect)
      this.enhancementState.baseOtherEffect = '';
    else
      this.enhancementState.baseOtherEffect = effect;
  }

  playerPlusOneAbilityClick(abilityLine) {
    if (this.enhancementState.playerPlusOneAbility === abilityLine)
      this.enhancementState.playerPlusOneAbility = '';
    else
      this.enhancementState.playerPlusOneAbility = abilityLine;
  }

  levelClick(level) {
    this.enhancementState.levelOfAbilityCard = level;
  }

  numberOfHexesClick(hexes) {
    this.enhancementState.numberOfCurrentlyTargetedHexes = hexes;
  }

  previousEnhancementClick(number) {
    this.enhancementState.numberOfPreviousEnhancements = number;
  }

  multipleTargetClick() {
    this.enhancementState.multipleTargets = !this.enhancementState.multipleTargets;
  }

  showOtherOptions() {
    if (this.enhancementState.stickerType === 'playerPlus1') {
      if (this.enhancementState.playerPlusOneAbility)
        return true;
    }
    else if (this.enhancementState.stickerType === 'summonPlus1') {
      if (this.enhancementState.summonPlusOneAbility)
        return true;
    }
    else if (this.enhancementState.stickerType === 'attackHex')
      return true;
    else if (this.enhancementState.stickerType === 'otherEffect') {
      if (this.enhancementState.baseOtherEffect)
        return true;
    }

    return false;
  }

}
