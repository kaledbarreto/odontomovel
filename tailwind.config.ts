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
        white: "#FEFEFE",
        primary: {
          50: "#EEF1F7",
          100: "#C9D2E5",
          200: "#A3B3D4",
          300: "#7D93C2",
          400: "#5874B1",
          500: "#284679",
          600: "#223C67",
          700: "#1B3050",
          800: "#13233A",
          900: "#0C1625",
        },
        green: {
          50: "#EDF7F2",
          100: "#C7E9D6",
          200: "#A0DABB",
          300: "#79CB9F",
          400: "#52BC84",
          500: "#4DAD75",
          600: "#409460",
          700: "#33784C",
          800: "#265B39",
          900: "#193E26",
        },
        yellow: {
          50: "#FEFAEC",
          100: "#FDF0C2",
          200: "#FAEA99",
          300: "#F8DF71",
          400: "#F7D85A",
          500: "#F7CF4A",
          600: "#D4A91A",
          700: "#A88615",
          800: "#7C630F",
          900: "#504009",
        },
        grafite: "#101828",
        grayui: "#667085",
        graylight: "#F2F4F7",
        warning: "#F7CF4A",
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
