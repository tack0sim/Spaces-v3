// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  runtimeConfig: {
    API_URL: "https://api.artic.edu/api/v1/artworks",
    public: {
      API_URL_public: "https://api.artic.edu/api/v1/artworks",
    },
  },

  vite: {
    plugins: [tailwindcss()],
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
  ],

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
