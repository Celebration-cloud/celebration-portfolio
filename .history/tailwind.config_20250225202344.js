import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
       <Link
          isExternal
          className="text-foreground-800 max-sm:hidden"
          href="https://github.com/Celebration-cloud"
        >
          <i
            className="pi pi-github hover:text-foreground-700"
            style={{ fontSize: "1.2rem" }}
          />
        </Link>
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}
