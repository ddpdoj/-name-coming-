import { Element } from './element.model';

export interface ElementConsumedEffect {
  element: Element;
  type: ['attackBuff' | 'moveBuff' | 'other'];
  buffModifier?: number;
  elementInfused?: Element;
  otherEffects?: string[];
}
