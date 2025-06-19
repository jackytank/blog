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
                    'Blogs': '/blogs',
                    'About': '/about'
                }
            },
        },
        iconSizes: {
            default: '24'
        },
    }
});
