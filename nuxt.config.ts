// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  nitro: {
    experimental: {
      websocket: true
    }
  },
  app: {
    rootId: "nuxt-feed",
  }
})