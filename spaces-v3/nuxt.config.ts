// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: true,
  runtimeConfig: {
    API_URL: "https://api.artic.edu/api/v1/artworks",
    public: {
      API_URL_public: "https://api.artic.edu/api/v1/artworks",
    },
  },

  css: ["~/assets/css/tailwind.css"],
  image: {
    domains: ["www.artic.edu", "cdn.sanity.io"],
    sanity: {
      projectId: "r9cp4rz9",
    },
  },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxt/scripts",
    "@nuxt/ui",
    "@nuxt/test-utils",
    "@nuxtjs/sanity",
    "nuxt-viewport",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ],

  colorMode: {
    preference: "system",
    fallback: "light",
    storage: "sessionStorage",
  },

  viewport: {
    breakpoints: {
      desktop: 1024,
      desktopMedium: 1280,
      desktopWide: 1600,

      mobile: 320,
      mobileMedium: 375,
      mobileWide: 425,

      tablet: 768,
    },

    cookie: {
      expires: 365, // 365 days
      name: "viewport",
      path: "/",
      sameSite: "Strict",
      secure: true,
    },

    defaultBreakpoints: {
      desktop: "desktop",
      mobile: "mobile",
      tablet: "tablet",
    },

    fallbackBreakpoint: "desktop",

    feature: "minWidth",
  },

  icon: {
    serverBundle: {
      collections: ["mdi"],
    },
  },

  sanity: {
    projectId: "r9cp4rz9",
    dataset: "production",
  },
});
