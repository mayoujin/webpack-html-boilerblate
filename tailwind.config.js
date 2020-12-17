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
      },
      spacing: {},
    },
    fontFamily: {
      primary: "var(--typo-primary)",
      body: "var(--typo-primary)",
      secondary: "var(--typo-secondary)",
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
