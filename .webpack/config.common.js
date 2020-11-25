const paths = require("./paths");
const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const BASE_SRC_DIR = "src";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const _MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: "css/app.css",
  chunkFilename: "[id].css",
});

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(templateDir);

  return templateFiles.map((item) => {
    const parts = item.split(".");
    const name = parts[0];
    const extension = parts[1];

    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: `${templateDir}/${name}.${extension}`,
      inject: "head",
    });
  });
}

const htmlPlugins = generateHtmlPlugins(paths.views);
module.exports = {
  entry: [`${paths.src}/js/webpack.js`, `${paths.src}/css/index.pcss`],
  // entry: [paths.src.concat("/js/webpack.js")],
  output: {
    filename: "js/app.js",
  },
  resolve: {
    alias: {
      "@": paths.src,
      src: paths.src,
    },
    extensions: ["*.html", ".js", ".css", ".pcss"],
  },

  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          //   "file-loader?name=[name].[ext]",
          //   "extract-loader",
          {
            loader: "html-loader",
            options: {
              // attributes: {
              //   urlFilter: (attribute, value, resourcePath) => {
              //     console.log({ attribute });
              //   },
              //   list: [
              //     {
              //       tag: "img",
              //       attribute: "src",
              //       type: "src",
              //       filter: (tag, attribute, attributes, resourcePath) => {
              //         if (tag.toLowerCase() !== "img") {
              //           return false;
              //         }
              //         console.log({ attribute, resourcePath });
              //         return true;
              //       },
              //     },
              //     {
              //       // Tag name
              //       tag: "link",
              //       // Attribute name
              //       attribute: "href",
              //       // Type of processing, can be `src` or `scrset`
              //       type: "src",
              //       filter: (tag, attribute, attributes, resourcePath) => {
              //         if (tag.toLowerCase() !== "link") {
              //           return false;
              //         }
              //         console.log({ attribute });
              //         return true;
              //       },
              //     },
              //   ],
              // },
              minimize: false,
            },
          },
          {
            loader: "posthtml-loader",
          },
        ],
      },
      {
        test: /\.p?css$/i,
        use: [
          {
            loader: _MiniCssExtractPlugin.loader,
          },
          "css-loader",
          {
            loader: "postcss-loader",
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
              publicPath: "fonts/",
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|webp|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "img/",
              publicPath: "img/",
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${paths.src}/static`,
          to: "assets",
          globOptions: {
            ignore: ["*.DS_Store"],
          },
        },
      ],
    }),
    ...htmlPlugins,
    MiniCssExtractPlugin,
  ],
};
