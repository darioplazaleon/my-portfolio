const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "web-orange": {
          50: "#fffbea",
          100: "#fff4c5",
          200: "#ffe787",
          300: "#ffd548",
          400: "#ffc01e",
          500: "#fca311",
          600: "#df7500",
          700: "#b95104",
          800: "#963e0a",
          900: "#7b330c",
          950: "#471901",
        },
      },
    },
  },
  plugins: [
    addDynamicIconSelectors()
  ],
};
