const { Lato, Ubuntu } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
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
        "bg-2": "#30E612",
      },
      colors: {
        "white-1": "#f3f4f6",
        "green-1": "#30E612",
      },
      grayscale: {
        50: "50%",
        75: "75%",
        100: "100%",
      },
      dark: {
        backgroundColor: {
          "bg-1": "#1a202c", // Dark mode background color
          "bg-2": "#2d3748", // Dark mode secondary background color
        },
        colors: {
          "white-1": "#718096", // Dark mode text color
          "green-1": "#38a169", // Dark mode accent color
        },
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
