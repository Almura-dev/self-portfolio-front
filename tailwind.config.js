/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'bg': '#2F4858',
        'bg-variant': '#245F72',
        'primary': '#3AC08F',
        'primary-variant': '#00A894',
      },
      textColor: {
        'primary': '#3AC08F',
        'primary-variant': '#00A894',
      },
    },
  },
  plugins: [],
}
