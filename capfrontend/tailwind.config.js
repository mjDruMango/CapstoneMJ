/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from "tailwindcss/colors";

import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#360136",
        "secondary": "#4a014a",
      },
      zIndex: {
        '1': 1,
        '60': 60,
        '70': 70,
        '80': 80,
        '90': 90,
        '100': 100,
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              textDecoration: "none",
              "&:hover": {
                opacity: ".75",
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    forms,
    typography,
  ],
}