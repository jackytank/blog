export default defineAppConfig({
  icon: {
    mode: 'css',
    cssLayer: 'base'
  },
  myConst: {
    layout: {
      header: {
        title: 'Jackytank',
        navItems: {
          'Blogs': '/blogs',
          'About': '/about'
        }
      },
    },
    iconSizes: {
      default: '24'
    }
  }
});
