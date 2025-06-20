import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
      '@nuxt/content',
      '@vueuse/nuxt',
      '@nuxtjs/color-mode',
    ],
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    css: [
        '~/assets/css/main.css',
    ],
    content: {
        experimental: { sqliteConnector: 'native' },
    },
    colorMode: {
        classSuffix: '',
        preference: 'system',
        fallback: 'light',
    },
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
});