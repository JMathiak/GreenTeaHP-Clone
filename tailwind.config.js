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
      hoveredText: "#dadcd2",
      buttonHover: "#368534",
      lightGrayBox: "#f9f9f9",
    },
    extend: {
      backgroundImage: {
        banner1: "url('/images/banner01.png')",
        banner2: "url('/images/banner02.png')",
        banner3: "url('/images/banner03.png')",
      },
    },
  },
  plugins: [],
};
