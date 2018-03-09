import { MonsterHealth } from './monster-health.model';
import { Character } from './character.model';

export class Game {
  public name = '';
  public prosperity = 0;
  public donations = 0;
  public partyLocation = '';
  public partyNotes = '';
  public partyAchievements = {};
  public reputation = 0;
  public globalAchievements = {};
  public scenariosUnlocked: any[] = [];
  public scenariosComplete: any[] = [];
  public treasuresUnlocked: any[] = [];
  public monsterHealth: MonsterHealth;
  public characters: Character[];
}
