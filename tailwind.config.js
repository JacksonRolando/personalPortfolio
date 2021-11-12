const colors = require('tailwindcss/colors')

module.exports = {
    // mode: "jit",
    purge: ["./src/**/*.html"],
    theme: {
      colors: {
        red: colors.rose,
        gray: colors.coolGray,
        purple: {
          light: '#272a45',
          DEFAULT: '1d1f33',
          dark: '#1d1f33',
          lighter: '#36385e'
        }
      },
    },
    variants: {},
    plugins: [],
  };