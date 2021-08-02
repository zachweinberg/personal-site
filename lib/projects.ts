export interface Project {
  title: string
  description: string
  url: string
}

export const getProjects = (): Project[] => {
  return [
    {
      title: 'Coinbase Pro Clone',
      description:
        "Recently I thought I would have some fun messing around with React Native. So I'm attempting to rebuild only the UI of the Coinbase Pro app.",
      url: 'https://github.com/zachweinberg/coinbasepro-react-native',
    },
    {
      title: 'Pinger',
      description:
        'A tool for accountants that allows them to configure their own ping alerts from QuickBooks Online or Xero that get delivered to Slack, Email or SMS!',
      url: 'https://ifpinger.ai',
    },

    {
      title: 'SongTree',
      description:
        'A complete song database backed by the Spotify API. I built this for fun just to have some fun with Spotify data.',
      url: 'https://songtree.app',
    },

    {
      title: 'My Bus Home',
      description:
        'A website for a bus transportation business that transports college students to and from colleges along the east coast.',
      url: 'https://www.mybushome.com',
    },
    {
      title: 'Tapfood',
      description:
        'A webapp built with React for a food delivery service based in New Jersey. Orders coming in everyday!',
      url: 'https://www.tapfood.us',
    },
    {
      title: 'Cubepros',
      description:
        'Cubepros is an accounting firm that helps transition your back office into a paperless, efficient powerhouse.',
      url: 'https://cubepros.com',
    },
    {
      title: 'Phish Player',
      description:
        'A small app to explore the music of the band Phish and search and play songs. Backed by the phish.in API.',
      url: 'https://phish.zachweinberg.com',
    },
  ]
}
