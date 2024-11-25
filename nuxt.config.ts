// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from "vite-plugin-eslint";

export default defineNuxtConfig({
  devtools: { enabled: true },

  vite: {
    plugins: [eslintPlugin()],
  },

  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@nuxt/eslint"],
  css: ["~/assets/icomoon/style.css"],
  eslint: {},
  compatibilityDate: "2024-09-08",
});
