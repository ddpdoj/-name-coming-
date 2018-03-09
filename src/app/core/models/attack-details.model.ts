import { StatusEffect } from './status-effect.model';
import { Element } from './element.model';
import { ElementConsumedEffect } from './element-consumed-effect.model';

export interface AttackDetails {
  attack: number;
  range?: number;
  target?: number;
  pierce?: number;
  push?: number;
  pull?: number;
  statusEffects?: StatusEffect[];
  elementsInfused?: Element[];
  elementConsumedEffects?: ElementConsumedEffect[];
  otherEffects?: string[];
}
