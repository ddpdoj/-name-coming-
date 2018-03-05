export class Enhancement {
  public cost: number;
  public title: string;
  public icon: string;
}

export const ICONS = {
  elementAir: '../../../assets/images/icons/elements/element-small-air.png',
  elementAll: '../../images/icons/elements/element-small-all.png',
  elementConsume: '../../images/icons/elements/element-small-consume.png',
  elementDark: '../../images/icons/elements/element-small-dark.png',
  elementEarth: '../../images/icons/elements/element-small-earth.png',
  elementFire: '../../images/icons/elements/element-small-fire.png',
  elementIce: '../../images/icons/elements/element-small-ice.png',
  elementLight: '../../images/icons/elements/element-small-light.png',

  statusEffectAddTarget: '../../images/icons/status-effect/status-effect-small-add-target.png',
  statusEffectBless: '../../images/icons/status-effect/status-effect-small-bless.png',
  statusEffectCurse: '../../images/icons/status-effect/status-effect-small-curse.png',
  statusEffectDisarm: '../../images/icons/status-effect/status-effect-small-disarm.png',
  statusEffectImmobilize: '../../images/icons/status-effect/status-effect-small-immobilize.png',
  statusEffectInvisible: '../../images/icons/status-effect/status-effect-small-invisible.png',
  statusEffectMuddle: '../../images/icons/status-effect/status-effect-small-muddle.png',
  statusEffectPierce: '../../images/icons/status-effect/status-effect-small-pierce.png',
  statusEffectPoison: '../../images/icons/status-effect/status-effect-small-poison.png',
  statusEffectPush: '../../images/icons/status-effect/status-effect-small-push.png',
  statusEffectPull: '../../images/icons/status-effect/status-effect-small-pull.png',
  statusEffectStrengthen: '../../images/icons/status-effect/status-effect-small-strengthen.png',
  statusEffectStun: '../../images/icons/status-effect/status-effect-small-stun.png',
  statusEffectWound: '../../images/icons/status-effect/status-effect-small-wound.png',

  generalAttack: '../../images/icons/general/general-small-attack.png',
  generalAttackHex: '../../images/icons/general/general-small-attack-hex.png',
  generalHeal: '../../images/icons/general/general-small-heal.png',
  generalJump: '../../images/icons/general/general-small-jump.png',
  generalLoot: '../../images/icons/general/general-small-loot.png',
  generalMove: '../../images/icons/general/general-small-move.png',
  generalRange: '../../images/icons/general/general-small-range.png',
  generalRetaliate: '../../images/icons/general/general-small-retaliate.png',
  generalShield: '../../images/icons/general/general-small-shield.png',
  generalTarget: '../../images/icons/general/general-small-target.png',
  generalPlusOne: '../../images/icons/general/general-small-plus-one.png',
};

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
