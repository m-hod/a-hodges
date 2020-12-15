module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'noto': ['"Noto Serif"']
      },
      height: {
        'header': 128,
        'footer': 128,
        'screen-header': 'calc(100vh - 128px)',
        'screen-75': '75vh',
        'screen-50': '50vh'
      },
      maxWidth: {
        '3/4': '75%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
