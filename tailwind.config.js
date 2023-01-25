/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors: {
      darkGreen: "#00713d",
      lightGreen: "#45aa42",
      topFootGreen: "#028046",
      black: "#000305",
      white: "#fff",
      gray: "rgba(235, 235, 235)",
      highlight: "#3A8F37",
      mainBG: "#f7f7f7",
      borderGray: "#dddddd",
      darkFontGreen: "#0b713d",
      ctwGreen: "#147c4c",
      ylfGreen: "#4fae4d",
      grayText: "#5c5c5c",
    },
    extend: {
      backgroundImage: {
        banner: "url('/images/banner01.png')",
      },
    },
  },
  plugins: [],
};
