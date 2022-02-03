
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    colors:

      ({ colors }) => ({
        inherit: colors.inherit,
        current: colors.current,
        transparent: colors.transparent,
        black: colors.black,
        white: colors.white,
        slate: colors.slate,
        gray: colors.gray,
        zinc: colors.zinc,
        neutral: colors.neutral,
        stone: colors.stone,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
        'navbarColor': '#388087',
        'lightNavbar': '#6FB3BB',
        'lightBlue': '#BADFE7',
        'lightGreen': '#C2EDCE',
        'backgroundColor': '#F6F6F2',
        'footerColor': '#15474f'
      }),

    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}