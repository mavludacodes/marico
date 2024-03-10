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
    },
  },
  plugins: [],
};
