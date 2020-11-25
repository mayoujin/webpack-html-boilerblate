// tailwind.config.js
const plugin = require("tailwindcss/plugin");

const newUtilities = {};

module.exports = {
  theme: {
    extend: {
      colors: {
        heavy: "var(--color-text-heavy)",
        contrary: "var(--color-text-contrary)",
        medium: "var(--color-text-medium)",
        light: "var(--color-text-light)",
      },
      spacing: {},
    },
    fontFamily: {
      // primary: ["Blogger Sans", "sans-serif"],
      // secondary: ["Inter", "sans-serif"],
      // body: ["Inter", "sans-serif"],
    },
    screens: {
      // mobile: { max: "767px" },
      // tablet: { min: "768px", max: "1199px" },
      // desktop: { min: "1200px" },
      // portrait: { raw: "(orientation: portrait)" },
      // landscape: { raw: "(orientation: landscape)" },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities(newUtilities, {
        respectPrefix: false,
      });
    }),
  ],
};
