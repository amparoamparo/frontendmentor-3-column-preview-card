/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        "primary-bright-orange": "hsl(31, 77%, 52%)",
        "primary-dark-cyan": "hsl(184, 100%, 22%)",
        "primary-darker-cyan": "hsl(179, 100%, 13%)",
        "neutral-transparent-white": "hsla(0, 0%, 100%, 0.75)",
        "neutral-light-grey": "hsl(0, 0%, 95%)",
      },
      fontFamily: {
        body: ["Lexend Deca", "sans-serif"],
        title: ["Big Shoulders Display", "sans-serif"],
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "2.5rem",
      },
      lineHeight: {
        paragraph: "1.55",
      },
      letterSpacing: {
        tight: "-0.03rem",
      },
      screens: {
        "3xl": "120rem",
      },
    },
  },
  plugins: [],
};
