const { url } = require("inspector");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        2: "0 50px 20px -6px #798B7D",
      },
      animation: {
        shake: "shake 0.1s",
      },
      keyframes: {
        shake: {
          "10%": { transform: "rotate(100deg)" },
        },
      },
      colors: {
        "gray-1": "#F7F7F7",
        "gray-2": "#5C636E",
        "orange-10": "#F8B500",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "background-home":
          "linear-gradient(45deg, rgba(235,233,231,1) 65%, rgba(121,139,125,1) 99%);",
        "mobile-home": "url('./assets/homePageGraphic.png')",
        fixedBg: "url('./assets/fixedBg.jpg')",
        homeBg: "url('./assets/homeBg.png')",
      }),
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Pacifico: ["Pacifico", "cursive"],
      },
      content: {
        arrow: "url('./assets/arrow.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1500px",
    },
  },
  plugins: [],
};
