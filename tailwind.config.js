const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxs: '340px',
      xs: '475px',
      ...defaultTheme.screens,
    },
    rotate: {
      '-135': '-135deg', // custom
      135: '135deg', // custom
      ...defaultTheme.rotate,
    },
    extend: {
      transitionProperty: {
        maxHeight: 'maxHeight',
        margin: 'margin',
        width: 'width',
      },
    },
  },
  variants: {
    extend: {
      filter: ['hover', 'focus'],
      contrast: ['hover', 'focus'],
    },
  },
  plugins: [],
};
