/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      margin: "auto",
    },
    extend: {
      colors: {
        "royal-blue": "hsl(228, 45%, 44%)",
        "light-grey": "hsl(217, 12%, 63%)",
        "medium-grey": "hsl(216, 12%, 54%)",
        "dark-blue": "hsl(213, 19%, 18%)",
        "sp-orange": "hsl(25, 97%, 53%)",
      },
    },
  },
  plugins: [],
};
