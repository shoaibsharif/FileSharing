const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  jit: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
