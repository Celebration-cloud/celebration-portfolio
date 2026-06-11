import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(button|card|checkbox|code|date-picker|input|kbd|link|listbox|navbar|slider|snippet|spinner|toggle|table|ripple|form|calendar|date-input|popover|divider|spacer).js",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#00E5FF',
          dark: '#0A1920',
          border: '#1A3338',
          gray: '#A0AAB2',
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
