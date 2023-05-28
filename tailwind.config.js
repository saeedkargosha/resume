/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        neutral: colors.gray,
        accent: colors.orange,
        success: colors.green,
        warning: colors.yellow,
        danger: colors.red,
      },
    },
  },
  plugins: [],
}
