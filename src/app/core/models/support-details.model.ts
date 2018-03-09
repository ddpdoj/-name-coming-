import { StatusEffect } from './status-effect.model';
import { Element } from './element.model';

export class SupportDetails {
  public type: ['allyBuff' | 'selfBuff' | 'monsterDebuff' | 'heal' | 'allyAction' | 'monsterAction'];
  public attack?: number;
  public move?: number;
  public jump?: boolean;
  public pierce?: number;
  public loot?: number;
  public heal?: number;
  public target?: number;
  public range?: number;
  public shield?: number;
  public retaliate?: number;
  public push?: number;
  public pull?: number;
  public statusEffects?: StatusEffect[];
  public elementsInfused?: Element[];
  public specialEffects?: string[];
}
