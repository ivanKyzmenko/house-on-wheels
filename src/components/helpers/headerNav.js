const NAVIGATION = [
  {
    title: 'home',
    link: 'home',
    id: 'home',
    menu: [
      {
        title: 'menu item example',
        link: '#',
        submenu: false
      },
      {
        title: 'menu with submenu example',
        id: 'sub',
        link: '#',
        submenu: true,
        submenuList: [
          {
            title: 'submenu item example',
            link: '#'
          },
          {
            title: 'submenu item example',
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
  },
  {
    title: 'inventory',
    link: 'inventory',
    id: 'inventory'
  },
  {
    title: 'faq',
    link: 'faq',
    id: 'faq'
  }
]

module.exports = {
  NAVIGATION
}
