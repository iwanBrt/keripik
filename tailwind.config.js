/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#E8A938',
          amber: '#D4A24E',
          cream: '#F5DEB3',
          wheat: '#DEB887',
          linen: '#C4956A',
          tan: '#8B5A2B',
          brown: '#3A1F0B',
          dark: '#1A0E06',
          accent: '#E8C468',
          cta: '#D4873E',
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
