import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(50%)", opacity: "1" },
          "100%": { transform: "translateX(95%)", opacity: "0" },
        },
        moveDown: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(20px)" },
        },
        moveUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.5s infinite",
        moveDown: "moveDown ease-out forwards",
        moveUp: "moveUp ease-out forwards",
      },
      boxShadow: {
        nav_shadow: "0px 15px 58px rgba(0, 0, 0, 0.7)",
      },
      colors: {
        gray: {
          primary: "var(--primary-gray)",
          secondary: "var(--secondary-gray)",
          tertiary: "var(--tertiary-gray)",
        },
        violet: "var(--primary-violet)",
        light_violet: "var(--secondary-violet)",
        foreground: "var(--foreground)",
        background: "var(--background)",
        mobile_bg: "var(--mobile-bg)",
      },
      fontFamily: {
        global: "Neuve-Regular",
        TSR: "TSR",
      },
      padding: {
        global: "125px",
      },
      spacing: {
        navbar: "85px",
      },
    },
  },
  plugins: [],
};
export default config;
