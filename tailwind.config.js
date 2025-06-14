/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontfamily:{
        roboto: ['Roboto' , 'sans-serif']
      },
    },
  },
  plugins: [],
}