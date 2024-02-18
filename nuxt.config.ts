export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
  },
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
  formkit: {
    autoImport: true,
    configFile: "./formkit.config.ts",
  },
  modules: [
    "vite-plugin-vue-type-imports/nuxt",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-lodash",
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
