const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '144': '36rem',
      },
      colors: {
        'primary': '#10B981',
      },
      textColor: {
        'primary': '#10B981',
      },
      screens: {
        'smaller': {'max':'1024px'},
        'maxsm': {'max':'640px'},
        'maxmd': {'max':'768px'}
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
