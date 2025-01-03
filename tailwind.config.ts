import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
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
        global: "150px",
      },
      spacing: {
        navbar: "85px",
      },
    },
  },
  plugins: [],
};
export default config;
