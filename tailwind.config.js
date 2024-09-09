/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        avenir: ["avenir", "sans-serif"],
      },

      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        primaryGreen: "#009F79",
      },
      fontSize: {
        xxxs: "0.5rem", //8px
        xxs: "0.625rem", //10px
        xs: "0.75rem", //12px
        sm: "0.875rem", //14px
        base: "1rem", //16px
        lg: "1.125rem", //18px
        xl: "1.25rem", //20px
        "1xl": "1.375rem", //22px
        "2xl": "1.5rem", //25px
        "3xl": "1.875rem", //30px
        "4xl": "2rem", //36px
        title1: "63px",
        title2: "54px",
      },
      screens: {
        xsm: "360px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1680px",
      },
    },
  },
  plugins: [],
};
