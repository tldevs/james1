module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          // 900: "#202225",
          900: "#131720",
          800: "#202530",
          // 800: "#8d23d7",
          // 800: "#ffffff",
          700: "#36393f",
          600: "#4f545c",
          500: "#273138",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        },
        blue: {
          // 600: "#0687b0",
        },
      },
      backgroundImage: {
        background_gradient: "url('./assets/background-gradient.jpg')",
      },
    },
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
    },
    screens: {
      xs: { max: "640px" },
      sm: { min: "640px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px" },
      "2xl": { min: "1536px" },
    },
    // height: {
    //   800: "80vh",
    // },
  },
  variants: {
    extend: {
      animation: ["motion-safe"],
      opacity: ["disabled"],
      cursor: ["disabled"],
      transform: ["disabled"],
      backgroundColor: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
