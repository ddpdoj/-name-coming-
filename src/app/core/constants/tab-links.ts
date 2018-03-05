export class TabLink {
  public path: string;
  public title: string;
}

export const TAB_LINKS = {
  ACHIEVEMENTS: [
    {
      path: '/achievements/party',
      title: 'Party'
    },
    {
      path: '/achievements/global',
      title: 'Global'
    }
  ],
  CALCULATORS: [
    {
      path: '/calculators/enchanements',
      title: 'Enhancements'
    },
    {
      path: '/calculators/scenario-level',
      title: 'Scenario Level'
    }
  ],
  MAP_CALCULATORS: [
    {
      path: '/map-calculators/line-of-sight',
      title: 'Line Of Sight'
    },
    {
      path: '/map-calculators/monster-ai',
      title: 'Monster AI'
    }
  ],
  PARTY: [
    {
      path: '/party/details',
      title: 'Details'
    },
    {
      path: '/party/characters',
      title: 'Characters'
    },
    {
      path: '/party/prosperity',
      title: 'Prosperity'
    }
  ]
};
