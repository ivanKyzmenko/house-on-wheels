const NAVIGATION = [
  {
    title: 'home',
    link: 'home',
    id: 'home',
    menu: [
      {
        title: 'regular #1',
        link: '#',
        submenu: false
      },
      {
        title: 'regular #2',
        link: '#',
        submenu: false
      },
      {
        title: 'Sub',
        id: 'sub',
        link: '#',
        submenu: true,
        submenuList: [
          {
            title: 'sub 1',
            link: '#'
          },
          {
            title: 'sub 2',
            link: '#'
          }
        ]
      }
    ]
  },
  {
    title: 'gallery',
    link: 'gallery',
    id: 'gallery'
    // menu: [
    //   {
    //     title: 'regular #1',
    //     link: '#'
    //   },
    //   {
    //     title: 'regular #2',
    //     link: '#'
    //   },
    //   {
    //     title: 'regular #3',
    //     link: '#'
    //   }
    // ]
  },
  {
    title: 'inventory',
    link: 'inventory',
    id: 'inventory',
    menu: [
      {
        title: 'regular #1',
        link: '#'
      },
      {
        title: 'regular #2',
        link: '#'
      },
      {
        title: 'regular #3',
        link: '#'
      }
    ]
  },
  {
    title: 'faq',
    link: 'faq',
    id: 'faq',
    menu: [
      {
        title: 'regular #1',
        link: '#'
      },
      {
        title: 'regular #2',
        link: '#'
      },
      {
        title: 'regular #3',
        link: '#'
      }
    ]
  }
]

module.exports = {
  NAVIGATION
}
