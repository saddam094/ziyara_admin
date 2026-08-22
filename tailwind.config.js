/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#064E3B', // Deep Emerald Green
          light: '#059669',
          dark: '#022C22',
        },
        secondary: {
          DEFAULT: '#D4AF37', // Muted Gold
          light: '#FDE047',
          dark: '#A16207',
        },
        background: '#FDFBF7', // Light warm gray / off-white
      }
    },
  },
  plugins: [],
}
