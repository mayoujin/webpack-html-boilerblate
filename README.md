# 📦 Webpack HTML Boilerplate

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Webpack-based boilerplate primarialy for HTML and css styles coding oriented.

## Installation

Clone this repo and npm install.

```bash
npm i
```

## Usage

### Development server

```bash
npm start
```

You can view the development server at `localhost:8080`.

### Production build

```bash
npm run build
```

## Core Features

- 📦 Bundler: [Webpack 5](https://webpack.js.org/)
- :page_facing_up: HTML: [PostHTML](https://github.com/posthtml)
- :bar_chart: CSS: [PostCSS](https://postcss.org/)
- :triangular_ruler: CSS Framework: [Tailwindcss](https://tailwindcss.com/)
- 🎨 Design-Tokens: [ThemeKit](https://github.com/bem/themekit)

## Dependencies

### webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration
- [`cross-env`](https://github.com/kentcdodds/cross-env) - Cross platform configuration

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and webpack
- [`html-loader`](https://webpack.js.org/loaders/html-loader/) - Exports HTML as string. HTML is minimized when the compiler demands
- [`posthtml-loader`](https://github.com/posthtml/posthtml-loader) - Process HTML with PostHTML
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM
- [`file-loader`](https://webpack.js.org/loaders/file-loader/) - Resolves import/require() on a file into a url and emits the file into the output directory.

### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`css-minimizer-webpack-plugin`](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/) - Optimize and minimize CSS assets

### PostCSS Plugins

- [`postcss-bem-fix`](https://github.com/supermonkeyz/postcss-bem-fix) - implementing BEM as at-rules in css for clean code
- [`postcss-advanced-variables`](https://github.com/jonathantneal/postcss-advanced-variables) - Lets you use Sass-like variables, conditionals, and iterators in CSS.
- [`postcss-color-function`](https://github.com/postcss/postcss-color-function) - Transform CSS color function from editor draft of 'Color Module Level 4' specification to more compatible CSS
- [`postcss-nested`](https://github.com/postcss/postcss-nested) - Unwrap nested rules like how Sass does it
- [`postcss-nesting`](https://github.com/jonathantneal/postcss-nesting) - Lets you nest style rules inside each other, following the CSS Nesting specification
- [`autoprefixer`](https://github.com/postcss/autoprefixer) - add vendor prefixes to CSS rules using values from Can I Use.

## Author

- [Sergei Frolov](https://github.com/mayoujin)

## License

This project is open source and available under the [MIT License](LICENSE).
