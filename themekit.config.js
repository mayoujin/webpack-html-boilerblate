const { Api } = require("@yandex/themekit");

Api.registerFilter({
  name: "whitepaper/root",
  matcher: (prop) => {
    if (prop.name.startsWith("typo") === false && prop.name.startsWith("color") === false) {
      prop.group = "root";
      return true;
    }
    return false;
  },
});

Api.registerFilter({
  name: "whitepaper/typo",
  matcher: (prop) => {
    if (prop.name.startsWith("typo")) {
      prop.group = "typo";
      return true;
    }
    return false;
  },
});

module.exports = {
  entry: {
    default: "./src/.themes/default.theme.json",
  },
  output: {
    css: {
      transforms: ["name/cti/kebab"],
      buildPath: "./src/css/2-design-tokens/themes",
      files: [
        {
          destination: "[entry]/_color.pcss",
          format: "scss/variables",
          filter: "whitepaper/color",
          options: {
            useAliasVariables: true,
          },
        },
        {
          destination: "[entry]/color.pcss",
          format: "css/variables",
          filter: "whitepaper/color",
          options: {
            useAliasVariables: true,
          },
          actions: ["process-color"],
        },
        {
          destination: "[entry]/typo.pcss",
          format: "css/variables",
          filter: "whitepaper/typo",
          options: {
            useAliasVariables: true,
          },
        },
        {
          destination: "[entry]/root.pcss",
          format: "css/variables",
          filter: "whitepaper/root",
          options: {
            useAliasVariables: true,
          },
        },
      ],
    },
  },
};
