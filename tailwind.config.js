
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'navbarColor': '#388087',
      'lightNavbar': '#6FB3BB',
      'lightBlue': '#BADFE7',
      'lightGreen': '#C2EDCE',
      'backgroundColor': '#F6F6F2'
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}