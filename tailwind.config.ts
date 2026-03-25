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
        "2xl": "1280px", // max-w-7xl roughly
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
      fontSize: {
        h1: "clamp(1.875rem, 5vw, 3.75rem)",
        h2: "clamp(1.5rem, 4vw, 2.5rem)",
      },
      spacing: {
        "18": "4.5rem",
        "36": "9rem",
      },
      colors: {
        primary: {
          50: '#e6ebf0',
          100: '#ccD7E1',
          200: '#99AFc3',
          300: '#6687a5',
          400: '#335F87',
          500: '#003366',
          600: '#002952',
          700: '#001E3D',
          800: '#001429',
          900: '#000A14',
        },
        brand: {
          orange: '#FF6B00',
        }
      },
      boxShadow: {
        hero: "0 35px 60px -12px rgba(0,0,0,0.25)",
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
