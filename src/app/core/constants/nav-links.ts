export class NavLink {
  public id: string;
  public icon: string;
  public link: string;
}

export const NAV_LINKS = [
  { id: 'Party', icon: 'party', link: '/party' },
  { id: 'Achievements', icon: 'achievement', link: '/achievements' },
  { id: 'Scenarios', icon: 'map', link: '/global' },
  { id: 'Calculators', icon: 'calculator', link: '/calculators' },
  { id: 'Monsters', icon: 'monster', link: 'monsters' },
  { id: 'LOS/AI', icon: 'los-ai', link: 'los' }
];
