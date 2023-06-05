export default defineNuxtConfig({
  app: {
    head: {
      title: "RockAShaka",
    },
  },
  modules: [
    "vite-plugin-vue-type-imports/nuxt",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-lodash",
    "nuxt-svgo",

  ],
  css: ["@/assets/scss/main.scss"],
  tailwindcss: {
    cssPath: "@/assets/scss/main.scss",
    viewer: false,
  },
  // https://nuxt.com/modules/lodash
  lodash: {
    prefix: "_",
    upperAfterPrefix: false,
  },
  svgo: {
    autoImportPath: './assets/'
  },
});
