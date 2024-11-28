/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["selector", '[class*="app-dark"]'],
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/assets/primevue/**/*.css", // Corrected glob pattern
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-primeui"), // Your custom plugin
  ],
};
