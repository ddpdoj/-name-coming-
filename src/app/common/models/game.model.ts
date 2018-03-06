import { MonsterHealth } from './monster-health.model';

export class Game {
  public name: string;
  public prosperity: number;
  public donations: number;
  public partyLocation: string;
  public partyNotes: string;
  public partyAchievements: any;
  public reputation: number;
  public globalAchievements: any;
  public scenariosUnlocked: any[];
  public scenariosComplete: any[];
  public treasuresUnlocked: any[];
  public monsterHealth: MonsterHealth;
}
