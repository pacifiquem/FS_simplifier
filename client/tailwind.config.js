/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      Lato: ['"Lato"'],
    },
    colors: {
      textColor: "#292929e3",
    },
  },
  plugins: [require("flowbite/plugin")],
};
