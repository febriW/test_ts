/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'raleway': ['Raleway']
    },
    extend: {
      colors: {
        'ready-green': '#79B625',
        'soldout-red': '#E64580',
        'detail' : '#006A4E'
      }
    },
  },
  plugins: [],
}

