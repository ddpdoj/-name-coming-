export interface NavLink {
  name: string;
  icon?: string;
  path: string;
}

export const NAV_LINKS: NavLink[] = [
  { name: 'Party', icon: 'party', path: '/party' },
  { name: 'Achievements', icon: 'achievement', path: '/achievements' },
  { name: 'Scenarios', icon: 'map', path: '/global' },
  { name: 'Calculators', icon: 'calculator', path: '/calculators' },
  { name: 'Monsters', icon: 'monster', path: 'monsters' },
  { name: 'LOS/AI', icon: 'los-ai', path: 'los' }
];

export const TAB_LINKS = {
  ACHIEVEMENTS: new Array<NavLink>(
    { path: '/achievements/party', name: 'Party' },
    { path: '/achievements/global', name: 'Global' }
  ),
  CALCULATORS: new Array<NavLink>(
    { path: '/calculators/enchanements', name: 'Enhancements' },
    { path: '/calculators/scenario-level', name: 'Scenario Level' }
  ),
  MAP_CALCULATORS: new Array<NavLink>(
    { path: '/map-calculators/line-of-sight', name: 'Line Of Sight' },
    { path: '/map-calculators/monster-ai', name: 'Monster AI' }
  ),
  PARTY: new Array<NavLink>(
    { path: '/party/details', name: 'Details' },
    { path: '/party/prosperity', name: 'Stats' }
  )
};

