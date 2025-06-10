// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@ant-design-vue/nuxt',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt'
  ],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  antd: {
    extractStyle: true,
  },
  css: [
    'ant-design-vue/dist/reset.css',
  ],
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
  },
});