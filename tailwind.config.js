/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FEFFF0",
        secondary: "#0C0C0C",
        accent: "#ff6347",
      },
      fontFamily: {
        primary: ["Space Grotesk"],
      },
    },
  },
  plugins: [],
};
