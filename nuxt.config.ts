// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/google-fonts"],
  compatibilityDate: "2024-09-21",
  googleFonts: {
    families: {
      Inter: true,
    },
  },
});
