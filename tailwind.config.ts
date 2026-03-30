import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1200px",
      },
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-montserrat)", "sans-serif"],
      },
      fontSize: {
        h1: "clamp(2.75rem, 5vw, 3.25rem)",
        h2: "clamp(1.75rem, 4vw, 2.125rem)",
        h3: "clamp(1.25rem, 3vw, 1.5rem)",
      },
      spacing: {
        "18": "4.5rem",
        section: "5rem",
      },
      colors: {
        primary: {
          50: "#EBF2FA",
          100: "#C4D9F1",
          200: "#9CC1E8",
          300: "#74A8DE",
          400: "#4C90D5",
          500: "#1F5E99",
          600: "#1A5088",
          700: "#153E6A",
          800: "#0F2D4C",
          900: "#0A1C30",
        },
        green: {
          50: "#EAFAF3",
          100: "#C2F0DC",
          200: "#99E5C4",
          300: "#66D8A8",
          400: "#3DC98D",
          500: "#1FAF7A",
          600: "#199663",
          700: "#127A4E",
          800: "#0C5D3A",
          900: "#064026",
        },
        grafite: "#101828",
        grayui: "#667085",
        graylight: "#F2F4F7",
        warning: "#F79009",
        danger: "#D92D20",
        bordercolor: "#D0D5DD",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)",
        elevated: "0 10px 25px -5px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
