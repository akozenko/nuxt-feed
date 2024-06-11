// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/eslint'],
  nitro: {
    experimental: {
      websocket: true,
    },
  },
  app: {
    rootId: 'nuxt-feed',
  },
});