import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pophen: {
          navy: {
            DEFAULT: "#002e5b",
            50: "#f0f5fa",
            100: "#e0ebf5",
            200: "#c1d6ea",
            300: "#92b7dc",
            400: "#5c92cb",
            500: "#3873b8",
            600: "#275aa0",
            700: "#1f4781",
            800: "#002e5b", // Primary Logo Brand Navy
            900: "#002244",
            950: "#001428",
          },
          blue: {
            DEFAULT: "#0077be", // Engineering Blue Accent
            hover: "#0064a3",
            light: "#009fe3",
            subtle: "#eef7fc",
          },
          cyan: {
            DEFAULT: "#00a8e8",
            light: "#38bdf8",
          },
          slate: {
            light: "#f8fafc",
            border: "#e2e8f0",
            text: "#334155",
            heading: "#0f172a",
          }
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      fontSize: {
        xs: ['15px', { lineHeight: '1.25rem' }],
        sm: ['17px', { lineHeight: '1.4rem' }],
        base: ['19px', { lineHeight: '1.6rem' }],
        lg: ['21px', { lineHeight: '1.75rem' }],
        xl: ['23px', { lineHeight: '1.85rem' }],
        '2xl': ['27px', { lineHeight: '2.1rem' }],
        '3xl': ['33px', { lineHeight: '2.35rem' }],
        '4xl': ['39px', { lineHeight: '2.6rem' }],
        '5xl': ['51px', { lineHeight: '1.08' }],
        '6xl': ['63px', { lineHeight: '1.05' }],
        '7xl': ['75px', { lineHeight: '1' }],
        '8xl': ['99px', { lineHeight: '1' }],
        '9xl': ['131px', { lineHeight: '1' }],
      },
      boxShadow: {
        "industrial": "0 10px 30px -5px rgba(0, 46, 91, 0.08), 0 4px 6px -2px rgba(0, 46, 91, 0.04)",
        "industrial-lg": "0 20px 40px -10px rgba(0, 46, 91, 0.12), 0 8px 12px -4px rgba(0, 46, 91, 0.06)",
        "card-hover": "0 20px 35px -5px rgba(0, 119, 190, 0.15), 0 10px 10px -5px rgba(0, 46, 91, 0.04)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern": "linear-gradient(to right, rgba(0,46,91,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,46,91,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
