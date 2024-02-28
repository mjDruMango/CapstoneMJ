/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-purple": "#360136",
        "custom-purple-1": "#4a014a",
      },
      zIndex: {
        '1': 1,
        '60': 60,
        '70': 70,
        '80': 80,
        '90': 90,
        '100': 100,
      },
    },
  },
  plugins: [],
}