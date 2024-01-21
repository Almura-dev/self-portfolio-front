/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        bg: "#181818",
        fill: "#202020",
        primary: "#FF8A00",
        primaryVariant: "#b0b3b8",
      },
      textColor: {
        primary: "#009176",
        "primary-variant": "#b0b3b8",
        fill: "#e4e6eb",
      },
    },
  },
  plugins: [],
};
