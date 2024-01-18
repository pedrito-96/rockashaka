export default defineNuxtConfig({
  app: {
    head: {
      title: "RockAShaka",
    },
  },
  ssr: true,
  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/",
      exclude: ["/", "/services", "/about", "/contact"],
    },
  },
  modules: [
    "vite-plugin-vue-type-imports/nuxt",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-lodash",
    "@nuxtjs/color-mode",
    "@formkit/nuxt",
    "@nuxtjs/supabase",
    "nuxt-icons",
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
  build: {
    transpile: ["gsap"],
  },
});
