/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: { min: "320px", max: "480px" },
      sm: { min: "481px", max: "640px" },
      md: { min: "641px", max: "768px" },
      lg: { min: "769px", max: "900px" },
      xl: { min: "901px", max: "1024px" },
      "2xl": { min: "1025px", max: "1200px" },
      "3xl": { min: "1201px", max: "1440px" },
      "4xl": "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: {
        50: "#111111",
        100: "#000000",
      },
      grey: {
        50: "#808080",
        100: "#f0f2f5",
      },
      red: {
        50: "#bc2a8d",
        100: "#FF0000",
        150: "#FF6347",
      },
      purple: {
        50: "#8a3ab9",
      },
      blue: {
        50: "#1877f2",
        100: "#0000FF",
      },
      green: {
        50: "#32CD32",
        100: "#42B72A",
      },
      gold: {
        50: "#DAA700",
      },
    },
    fontFamily: {
      RobotoLight: ["Roboto-light", "sans-serif"],
      RobotoThin: ["Roboto-Thin", "sans-serif"],
      RobotoRegular: ["Roboto-Regular", "sans-serif"],
      RobotoMedium: ["Roboto-Medium", "sans-serif"],
      RobotoBold: ["Roboto-Bold", "sans-serif"],
    },
    extend: {
      spacing: {
        125: "500px",
      },
      flex: {
        3: "3 3 0%",
        3.5: "3.5 3.5 0%",
        4: "4 4 0%",
        5: "5 5 0%",
        5.5: "5.5 5.5 0%",
        9: "9 9 0%",
      },
      borderRadius: {
        "4xl": "30px",
      },
    },
  },
  plugins: [],
};
