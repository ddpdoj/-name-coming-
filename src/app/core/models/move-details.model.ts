import { StatusEffect } from './status-effect.model';
import { Element } from './element.model';
import { ElementConsumedEffect } from './element-consumed-effect.model';

export interface MoveDetails {
  move: number;
  jump?: boolean;
  heal?: number;
  retaliate?: number;
  push?: number;
  pull?: number;
  shield?: number;
  loot?: number;
  statusEffects?: StatusEffect[];
  elementsInfused?: Element[];
  elementConsumedEffects?: ElementConsumedEffect[];
  specialEffects?: string[];
}
