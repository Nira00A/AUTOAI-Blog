/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
   plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  theme: {
    extend: {
      fontfamily:{
        roboto: ['Roboto' , 'sans-serif']
      },
      screens:{
        'nav-lg': '1030px',
      }
    },
  },
  plugins: [],
}