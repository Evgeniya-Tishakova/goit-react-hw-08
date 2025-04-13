// import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
        // sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
};
