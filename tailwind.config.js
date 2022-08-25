/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Karla", ...defaultTheme.fontFamily.sans],
      meme: ["impact", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}
