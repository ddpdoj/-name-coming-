import { PARTY_ACHIEVEMENTS } from '../constants/party-achievements';
import { GLOBAL_ACHIEVEMENTS } from '../constants/global-achievements';

export class Scenerio {
  public title: string;
  public globalAchievementsRequired: string[];
  public globalAchievementsRequiredIncomplete: string[];
  public partyAchievementsRequired: string[];
  public onlyOneAchievementRequired: boolean;
}

export const SCENARIOS: Scenerio[] = [
  {
    title: null,
    globalAchievementsRequired: null,
    globalAchievementsRequiredIncomplete: null,
    partyAchievementsRequired: null,
    onlyOneAchievementRequired: null
  },
  {
    title: 'Black Barrow',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Barrow Lair',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.FIRST_STEPS],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Inox Encampment',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [GLOBAL_ACHIEVEMENTS.THE_MERCHANT_FLEES],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Crypt of the Damned',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Ruinous Crypt',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Decaying Crypt',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Vibrant Grotto',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.THE_POWER_OF_ENHANCEMENT, GLOBAL_ACHIEVEMENTS.THE_MERCHANT_FLEES],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Gloomhaven Warehouse',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [GLOBAL_ACHIEVEMENTS.THE_DEAD_INVADE],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.JEKSERAHS_PLANS],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Diamond Mine',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [GLOBAL_ACHIEVEMENTS.THE_MERCHANT_FLEES],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Plane of Elemental Power',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [GLOBAL_ACHIEVEMENTS.THE_RIFT_NEUTRALIZED],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Gloomhaven Square A',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [GLOBAL_ACHIEVEMENTS.END_OF_THE_INVASION],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Gloomhaven Square B',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [GLOBAL_ACHIEVEMENTS.END_OF_THE_INVASION],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Temple of the Seer',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Frozen Hollow',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Shrine of Strength',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Mountain Pass',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Lost Island',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Abandoned Sewers',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Forgotten Crypt',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.THE_POWER_OF_ENHANCEMENT],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Necromancer\'s Sanctum',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.THE_MERCHANT_FLEES],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Infernal Throne',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [GLOBAL_ACHIEVEMENTS.THE_RIFT_NEUTRALIZED],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Temple of the Elements',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.A_DEMONS_ERRAND, PARTY_ACHIEVEMENTS.FOLLOWING_CLUES],
    onlyOneAchievementRequired: true
  },
  {
    title: 'Deep Ruins',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Echo Chamber',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Icecrag Ascent',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Ancient Cistern',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.WATER_BREATHING],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.THROUGH_THE_RUINS],
    onlyOneAchievementRequired: true
  },
  {
    title: 'Ruinous Rift',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [GLOBAL_ACHIEVEMENTS.ARTIFACT_LOST],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.STONEBREAKERS_CENSER],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Outer Ritual Chamber',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.DARK_BOUNTY],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Sanctuary of Gloom',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.AN_INVITATION],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Shrine of the Depths',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.THE_VOICES_COMMAND],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Plane of Night',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.THE_POWER_OF_ENHANCEMENT, GLOBAL_ACHIEVEMENTS.ARTIFACT_RECOVERED],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Decrepit Wood',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.THE_VOICES_COMMAND],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Savvas Armory',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.THE_VOICES_COMMAND, PARTY_ACHIEVEMENTS.THE_DRAKES_COMMAND],
    onlyOneAchievementRequired: true
  },
  {
    title: 'Scorched Summit',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.THE_DRAKES_COMMAND],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Gloomhaven Battlements A',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [GLOBAL_ACHIEVEMENTS.THE_RIFT_NEUTRALIZED],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.A_DEMONS_ERRAND],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Gloomhaven Battlements B',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [GLOBAL_ACHIEVEMENTS.THE_RIFT_NEUTRALIZED],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.A_DEMONS_ERRAND],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Doom Trench',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.WATER_BREATHING],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Slave Pens',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Treacherous Divide',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Ancient Defense Network',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.THE_VOICES_COMMAND, PARTY_ACHIEVEMENTS.THE_VOICES_TREASURE],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Timeworn Tomb',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.THE_VOICES_COMMAND],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Realm of the Voice',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.THE_SCEPTER_AND_THE_VOICE],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Drake Nest',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.THE_POWER_OF_ENHANCEMENT],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Tribal Assault',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.REDTHORNS_AID],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Rebel Swamp',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.CITY_RULE_DEMONIC],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Nightmare Peak',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.ACROSS_THE_DIVIDE],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Lair of the Unseeing Eye',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.THROUGH_THE_TRENCH],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Shadow Weald',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.REDTHORNS_AID],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Rebel\'s Stand',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.CITY_RULE_DEMONIC],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Ghost Fortress',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.CITY_RULE_DEMONIC],
    globalAchievementsRequiredIncomplete: [GLOBAL_ACHIEVEMENTS.ANNIHILATION_OF_THE_ORDER],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'The Void',
    globalAchievementsRequired: [
      GLOBAL_ACHIEVEMENTS.END_OF_CORRUPTION_1,
      GLOBAL_ACHIEVEMENTS.END_OF_CORRUPTION_2,
      GLOBAL_ACHIEVEMENTS.END_OF_CORRUPTION_3
    ],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Noxious Cellar',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Crypt Basement',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Palace of Ice',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Foggy Thicket',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Bandit\'s Wood',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Investigation',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Bloody Shack',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Forgotten Grove',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Alchemy Lab',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Fading Lighthouse',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Pit of Souls',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Magma Pit',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Underwater Lagoon',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.WATER_BREATHING],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Sulfur Mine',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Clockwork Cove',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Arcane Library',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Toxic Moor',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Well of the Unfortunate',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Chained Isle',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Windswept Highlands',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Oozing Grove',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Rockslide Ridge',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Merchant Ship',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.HIGH_SEA_ESCORT],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Overgrown Graveyard',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.GRAVE_JOB],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Harrower Mine',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Vault of Secrets',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Sacrifice Pit',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Lost Temple',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.FISHS_AID],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Vigil Keep',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Temple of the Eclipse',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Burning Mountain',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Shadows Within',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.BAD_BUSINESS],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Crystalline Cave',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.TREMORS],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Sun Temple',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Harried Village',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Corrupted Cove',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.THE_POISONS_SOURCE],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Plane of Water',
    globalAchievementsRequired: [GLOBAL_ACHIEVEMENTS.WATER_BREATHING],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.WATER_STAFF],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Syndicate Hideout',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.SIN_RA],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Demonic Rift',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Wild Melee',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Back Alley Brawl',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.DEBT_COLLECTION],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Sunken Vessel',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.A_MAP_TO_TREASURE],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Vermling Nest',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Payment Due',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY_ACHIEVEMENTS.THROUGH_THE_NEST],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Just Another Night',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'A Quatryl Scorned',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Unreliable Medicine',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Unlikely Allies',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'The Sun Spire',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'A Ship in a Storm',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Arrival in Chains',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'The Doctor\'s Lab',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Skewed Perspective',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Panic Room',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Return to the Black Barrow',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'An Unfortunate Intrusion',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Corrupted Laboratory',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Armory Heist',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Stone Defense',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Rodent Liberation',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Caravan Escort',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Unnatural Insults',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Storage Fees',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Plane of the Wild Beasts',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Harvesting the Night',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Plagued Crypt',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Battle of the Bards',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Corrupted Hunt',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Aftermath',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'Elemental Secrets',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
  {
    title: 'The Caged Bear',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [],
    onlyOneAchievementRequired: false
  },
];
