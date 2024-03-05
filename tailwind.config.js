/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      sans: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
      inter: "Inter",
      worksans: "Work Sans",
      roboto: "Roboto",
      notosans: "Noto Sans",
    },
    extend: {
      colors: {
        accent: {
          light: "#86db9f",
          DEFAULT: "#5fcf80",
          dark: "#34A853",
        },
        primary: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22",
        },
        deemgreen: "#638763",
        whitegray: "#F0F5F0",
        graywhite: "#DBE5DB",
        dark: "#121712",
        white: "#ffffff",

        tahiti: {
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
