/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins_medium: ["Poppins Medium", "sans-serif"],
        poppins_bold: ["Poppins Bold", "sans-serif"],
        poppins_semibold: ["Poppins SemiBold", "sans-serif"],
        poppins_regular: ["Poppins Regular", "sans-serif"],
      },
      colors: {
        white: "#FFFFFF",
        dark: "#707070",
        blue: "#326CF9",
        green: "#0FC65C",
        gray: "#919191",
        black: "#000000",
        shark: "#2D2D2D",
        darkgreen: "#043016",
        lightblack: "#0D0D0D",
      },
    },
  },
  plugins: [],
};
