const { Lato, Ubuntu } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      filroy: ["Filroy", "sans-serif"],
      Lato: ["Lato", "sans-serif"],
      Ubuntu: ["Ubuntu", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",

        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "bg-1": "#f3f4f6",
        "bg-2": "#21252b",
      },
      colors: {
        "white-1": "#f3f4f6",
      },
      grayscale: {
        50: "50%",
        75: "75%",
        100: "100%",
      },
    },
  },
  variants: {
    extend: {
      grayscale: ["hover", "focus"],
    },
  },
  plugins: [],
};
