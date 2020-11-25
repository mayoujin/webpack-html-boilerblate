const path = require("path");

module.exports = {
  // Source files
  src: path.resolve(__dirname, "../src"),

  // Production build files
  build: path.resolve(__dirname, "../build"),

  // dev-server
  dev: path.resolve(__dirname, "../dev"),

  // Static files that get copied to build folder
  views: path.resolve(__dirname, "../src/views"),
};
