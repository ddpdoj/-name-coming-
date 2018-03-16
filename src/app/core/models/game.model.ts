import { MonsterHealth } from './monster-health.model';
import { Character } from './character.model';
import { PARTY_ACHIEVEMENTS } from '../constants/party-achievements';
import { GLOBAL_ACHIEVEMENTS } from '../constants/global-achievements';

export class Game {
  public name = '';
  public prosperity = 0;
  public donations = 0;
  public partyLocation = '';
  public partyNotes = '';
  public reputation = 0;
  public acquiredPartyAchievements = {};
  public availablePartyAchievements = PARTY_ACHIEVEMENTS;
  public acquiredGlobalAchievements = {};
  public availableGlobalAchievements = GLOBAL_ACHIEVEMENTS;
  public scenariosUnlocked: any[] = [];
  public scenariosComplete: any[] = [];
  public treasuresUnlocked: any[] = [];
  public monsterHealth: MonsterHealth;
  public characters: Character[];
}
