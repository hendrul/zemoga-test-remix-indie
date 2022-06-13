/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      colors: {
        brand: {
          background: {
            lighter: "rgba(255, 255, 255, .8)",
            light: "rgba(255, 255, 255, .4)",
            dark: "rgba(0, 0, 0, .4)",
            darker: "rgba(0, 0, 0, .6)",
          },
          green: {
            positive: "rgb(60, 187, 180)",
          },
          yellow: {
            negative: "rgb(249, 173, 29)",
          },
          gray: {
            light: "rgba(235, 235, 235, 1)",
            dark: "rgba(70, 70, 70, 1)",
            darker: "rgba(51, 51, 51, 1)",
          },
        },
      },
    },
    screens: {
      mobile: "500px",
      tablet: "768px",
      desktop: "1100px",
    },
  },
  plugins: [],
};
