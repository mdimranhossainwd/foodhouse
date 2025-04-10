/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      lobster: ["Lobster Two", "sans-serif"],
      pt: ["PT Sans Narrow", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
