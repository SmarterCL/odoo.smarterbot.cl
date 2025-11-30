/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#714B67',
          dark: '#5b394f',
          light: '#875A7B'
        }
      },
      fontFamily: {
        sans: ['system-ui','Inter','sans-serif']
      }
    }
  },
  plugins: []
};
