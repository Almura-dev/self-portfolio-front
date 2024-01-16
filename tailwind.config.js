/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        bg: "#18191a",
        fill: "#1c1e21",
        primary: "#0866ff",
        "primary-variant": "#b0b3b8",
      },
      textColor: {
        primary: "#0866ff",
        "primary-variant": "#b0b3b8",
        fill: "#e4e6eb",
      },
    },
  },
  plugins: [],
};
