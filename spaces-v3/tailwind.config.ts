/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundOpacity: {
        "10": "0.1",
        "20": "0.2",
        "50": "0.5",
        "95": "0.95",
      },
      opacity: {
        "15": "0.15",
        "35": "0.35",
        "65": "0.65",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
