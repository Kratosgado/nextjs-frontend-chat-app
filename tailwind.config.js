/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  daisyui: {
    themes: ["night"],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}