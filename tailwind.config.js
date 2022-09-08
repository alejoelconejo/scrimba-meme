/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Karla', ...defaultTheme.fontFamily.sans],
      meme: ['impact', ...defaultTheme.fontFamily.sans],
    },
    dropShadow: {
      meme: [
        '2px 2px 0 #000',
        '-2px -2px 0 #000',
        '2px -2px 0 #000',
        '2px 2px 0 #000',
        '0 2px 0 #000',
        '2px 0 0 #000',
        '0 -2px 0 #000',
        '-2px 0 0 #000',
        '2px 2px 5px #000',
      ],
    },
    extend: {
      gridTemplateColumns: {
        recommended: 'repeat(auto-fill, minmax(250px, 1fr))',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
