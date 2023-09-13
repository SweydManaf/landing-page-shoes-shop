/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "shoes1-mobile": "10px 10px 0px 0px #30f",
        "shoes1-mobile-hover": "10px 10px 0px 0px #0E2624",
        "button-box-shadow": "5px 5px 0px 0px #000",
        "button-box-shadow-hover": "5px 5px 0px 0px #0E2624",
      },
    },
  },
  plugins: [],
};
