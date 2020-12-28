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
        'primary': '#00FF00',
      },
      textColor: {
        'primary': '#10B981',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
