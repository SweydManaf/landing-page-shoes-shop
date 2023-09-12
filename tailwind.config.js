/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "shoes1-mobile": "10px 10px 0px 0px #30f",
        "button-box-shadow": "5px 5px 0px 0px #000;",
      },
    },
  },
  plugins: [],
};
