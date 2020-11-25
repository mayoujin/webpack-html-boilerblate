const paths = require("./paths");
const { merge } = require("webpack-merge");
const common = require("./config.common.js");

module.exports = merge(common, {
  mode: "production", // Set the mode to development or production
  output: {
    filename: "js/app.js",
    path: paths.build,
    publicPath: "/",
  },
});
