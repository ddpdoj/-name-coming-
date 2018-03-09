import { ActionCard } from './action-card.model';

export interface Character {
  name: string;
  class: string;
  classImg: string;
  race?: string;
  level: number;
  hitPoints?: number;
  experience?: number;
  perks?: string[];
  availableActionCards?: ActionCard[];
  nonAvailableActionCards?: ActionCard[];
}
