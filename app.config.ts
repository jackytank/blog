export default defineAppConfig({
  icon: {
    mode: 'css',
    cssLayer: 'base'
  },
  myConst: {
    layout: {
      header: {
        title: 'Jackytank',
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
    },
    iconSizes: {
      default: '24'
    }
  }
})
