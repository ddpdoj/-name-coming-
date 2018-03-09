import { ICONS } from '../constants/icons';

export class Enhancement {
  public cost: number;
  public title: string;
  public icon: string;
}

export const PLAYER_PLUS_ONE_ABILITY_LINES = {
  move: { cost: 30, title: 'Move', icon: ICONS.generalMove },
  attack: { cost: 50, title: 'Attack', icon: ICONS.generalAttack },
  range: { cost: 30, title: 'Range', icon: ICONS.generalRange },
  shield: { cost: 100, title: 'Shield', icon: ICONS.generalShield },
  push: { cost: 30, title: 'Push', icon: ICONS.statusEffectPush },
  pull: { cost: 30, title: 'Pull', icon: ICONS.statusEffectPull },
  pierce: { cost: 30, title: 'Pierce', icon: ICONS.statusEffectPierce },
  retaliate: { cost: 100, title: 'Retaliate', icon: ICONS.generalRetaliate },
  heal: { cost: 30, title: 'Heal', icon: ICONS.generalHeal },
  target: { cost: 50, title: 'Target', icon: ICONS.generalTarget },
};

export const SUMMON_PLUS_ONE_ABILITY_LINES = {
  move: { cost: 100, title: 'Move', icon: ICONS.generalMove },
  attack: { cost: 100, title: 'Attack', icon: ICONS.generalAttack },
  range: { cost: 50, title: 'Range', icon: ICONS.generalRange },
  hp: { cost: 50, title: 'HP', icon: ICONS.generalHeal },
};

export const BASE_OTHER_EFFECTS = {
  poison: { cost: 75, title: 'Poison', icon: ICONS.statusEffectPoison },
  wound: { cost: 75, title: 'Wound', icon: ICONS.statusEffectWound },
  muddle: { cost: 50, title: 'Muddle', icon: ICONS.statusEffectMuddle },
  immobilize: { cost: 100, title: 'Immobilize', icon: ICONS.statusEffectImmobilize },
  disarm: { cost: 150, title: 'Disarm', icon: ICONS.statusEffectDisarm },
  curse: { cost: 75, title: 'Curse', icon: ICONS.statusEffectCurse },
  strengthen: { cost: 50, title: 'Strengthen', icon: ICONS.statusEffectStrengthen },
  bless: { cost: 50, title: 'Bless', icon: ICONS.statusEffectBless },
  jump: { cost: 50, title: 'Jump', icon: ICONS.generalJump },
  anyElement: { cost: 150, title: 'Any Element', icon: ICONS.elementAll },
  specificElement: { cost: 100, title: 'Specific Element', icon: ICONS.elementFire },
};

export const STICKER_TYPES = {
  playerPlus1: { title: 'Player' },
  summonPlus1: { title: 'Summon' },
  attackHex: { title: 'Attack Hex' },
  otherEffect: { title: 'Other Effect' },
};

export const LEVEL_COST = [0, 25, 50, 75, 100, 125, 150, 175, 200];
export const PREVIOUS_ENHANCEMENT_COST = [0, 75, 150, 225];
