/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-orange": "#FF5722",
        "white": "#ffffff",
        "purple": "#3f3cbb",
        "midnight": "#121063",
        "metal": "#565584",
        "tahiti": "#3ab7bf",
        "silver": "#ecebff",
        "bubble-gum": "#ff77e9",
        "bermuda": "#78dcca",
        "blueish": "#84D2F6"
      },
    },
  },
  plugins: [],
};
