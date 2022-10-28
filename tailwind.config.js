/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      margin: "auto",
    },
    extend: {
      fontSize: {
        sm2: "0.95em",
      },
      letterSpacing: {
        widest2: "0.15rem",
      },
      colors: {
        "royal-blue": "hsl(228, 45%, 44%)",
        "light-grey": "hsl(217, 12%, 63%)",
        "medium-grey": "hsl(216, 12%, 54%)",
        "sp-charcoal": "hsl(215, 23%, 14%)",
        "dark-blue": "hsl(213, 19%, 18%)",
        "very-dark-blue": "hsl(216, 12%, 8%)",
        "sp-orange": "hsl(25, 97%, 53%)",
      },
      spacing: {
        88: "22rem",
      },
    },
  },
  plugins: [],
};
