export default defineAppConfig({
    icon: {
        mode: 'css',
        cssLayer: 'base'
    },
    cfg: {
        layout: {
            header: {
                title: 'jackytank',
                navItems: {
                    '/blogs': 'Blogs',
                    '/about': 'About'
                }
            },
        },
        iconSizes: {
            default: '24'
        },
    }
});
