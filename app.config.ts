export default defineAppConfig({
  icon: {
    mode: 'css',
    cssLayer: 'base'
  },
  myConst: {
    layout: {
      header: {
        navItems: [
          {
            label: 'Blogs',
            to: '/blogs'
          },
          {
            label: 'About',
            to: '/about'
          }
        ]
      },
      footer: {
        title: 'Tri To Blog. All rights reserved.'
      }
    },
    iconSizes: {
      default: '24'
    }
  }
})
