/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors : {
        'verde-bahamas': '#177870',
        gold: {
          light: '#FFD700', // Light Gold
          DEFAULT: '#FFA500', // Gold
          dark: '#B8860B', // Dark Gold
        },
      },
      fontFamily : {
        'montserrat' : "Montserrat",
      }
    },
  },
  plugins: [],
}

