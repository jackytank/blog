// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@ant-design-vue/nuxt',
  ],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
})