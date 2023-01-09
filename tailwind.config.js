/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['"Trebuchet MS"', "sans-serif"],
    },
    colors: {
      darkGreen: "#00713d",
      lightGreen: "#45aa42",
      topFootGreen: "#028046",
      black: "#000305",
      white: "#fff",
      gray: "rgba(235, 235, 235)",
      highlight: "#3A8F37",
      mainBG: "#f7f7f7",
    },
    extend: {},
  },
  plugins: [],
};
