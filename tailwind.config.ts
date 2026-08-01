import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50: "#fbf8ef",
          100: "#f1e8d5",
          200: "#ddc9a4",
          300: "#c7a670",
          400: "#aa8043",
          500: "#8b6431",
          600: "#6d4d29",
          700: "#503a22",
          800: "#34271a",
          900: "#1e1812",
          950: "#0f0b08"
        },
        forest: {
          50: "#eff7f1",
          100: "#dcebdd",
          200: "#b6d0b8",
          300: "#8eaf92",
          400: "#6a916f",
          500: "#4e7554",
          600: "#3f5f45",
          700: "#334c38",
          800: "#273a2b",
          900: "#17231b",
          950: "#0b130e"
        }
      },
      boxShadow: {
        soft: "0 24px 70px rgba(30, 24, 18, 0.12)",
        card: "0 18px 48px rgba(30, 24, 18, 0.08)"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
