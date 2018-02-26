import { MonsterHealth } from './monster-health.model';
import { GLOBAL_ACHIEVEMENTS } from './global-achievements.model';

export class Game {
  public name: string;
  public prosperity: number;
  public donations: number;
  public partyLocation: string;
  public partyNotes: string;
  public partyAchievements: string;
  public reputation: number;
  public globalAchievements: any;
  public scenariosUnlocked: any[];
  public scenariosComplete: any[];
  public treasuresUnlocked: any[];
  public monsterHealth: MonsterHealth;
}
