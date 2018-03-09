import { ElementConsumedEffect } from './element-consumed-effect.model';
import { StatusEffect } from './status-effect.model';
import { Element } from './element.model';

export interface ActionDetail {
  attack?: number;
  pierce?: number;
  move?: number;
  jump?: boolean;
  loot?: number;
  heal?: number;
  target?: number;
  range?: number;
  shield?: number;
  retaliate?: number;
  push?: number;
  pull?: number;
  statusEffects?: StatusEffect[];
  elementsInfused?: Element[];
  elementConsumedEffects?: ElementConsumedEffect[];
  specialEffects?: string[];
  loss?: boolean;
  lastingEffect?: boolean;
  effectRoundDuration?: 'single' | 'infinite';
}
