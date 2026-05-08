/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#F2C744',
          cream: '#D9CDBF',
          linen: '#A6886C',
          tan: '#8A6A50',
          clay: '#735A44',
          brown: '#402510',
          mint: '#93C9BE',
          dark: '#21130D'
        }
      },
      fontFamily: {
        display: ['Baloo 2', 'Nunito', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
        sans: ['Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
