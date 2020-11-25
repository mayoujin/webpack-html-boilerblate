const svgTags = require("svg-tags");
const skipTags = [
  "header",
  "footer",
  "main",
  "section",
  "nav",
  "article",
  "aside",
  "svg",
  "use",
  "module",
  "script",
  "template",
  ...svgTags,
];

module.exports = {
  plugins: {
    "posthtml-modules": {},
    "posthtml-expressions": {
      strictMode: false,
    },
    "posthtml-custom-bem": {
      skipTags: ["div", "span", "svg", "script", "module"],
    },
    "posthtml-custom-elements": {
      skipTags,
    },
    "posthtml-beautify": {
      blankLines: false,
    },
  },
};
