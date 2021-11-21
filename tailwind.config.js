const defaultTheme = require('tailwindcss/defaultTheme');

const smallSizes = {
  // up to 96
  15: '3.75rem',
  17: '4.25rem',
  18: '4.5rem',
  22: '5.5rem',
  30: '7.5rem',
  50: '12.5rem',
  68: '17rem',
  75: '18.75rem',
  79: '19.75rem',
  86: '21.5rem',
  90: '22.5rem',
};
const largeSizes = {
  // from to 96
  100: '25rem',
  107: '26.75rem',
  112: '28rem',
  128: '32rem',
  144: '36rem',
  152: '38rem',
  160: '40rem',
  192: '48rem',
};
const allSizes = { ...smallSizes, ...largeSizes };

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
      maxHeight: { ...defaultTheme.height, ...allSizes },
      minHeight: { ...defaultTheme.height, ...allSizes },
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
