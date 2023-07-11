/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-blue" :"#5d87ff",
        "light-blue" : '#ecf2ff',
        "white" : '#fff'
      }
    },
  },
  plugins: [],
}