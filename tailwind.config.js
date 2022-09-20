/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Karla', ...defaultTheme.fontFamily.sans],
      meme: ['Impact', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      gridTemplateColumns: {
        recommended: 'repeat(auto-fill, minmax(200px, 1fr))',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
