const paths = require("./paths");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./config.common.js");

module.exports = merge(common, {
  // Set the mode to development or production
  mode: "development",
  output: {
    path: paths.dev,
    publicPath: "/",
  },
  // Control how source maps are generated
  devtool: "inline-source-map",

  // Spin up a server for quick development
  devServer: {
    historyApiFallback: true,
    contentBase: paths.dev,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  plugins: [
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],
});