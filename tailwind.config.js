module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'noto': ['"Noto Serif"'],
        'roboto': ["Roboto"]
      },
      height: {
        'header': 128,
        'footer': 150,
        'screen-header': 'calc(100vh - 128px)',
        'screen-75': '75vh',
        'screen-50': '50vh'
      },
      maxWidth: {
        '1/2': '50%',
        '3/5': '60%',
        '3/4': '75%',
      },
      minWidth: {
        '300': 300
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
