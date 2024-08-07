// webpack.config.js

const path = require('path');

module.exports = {
  context: path.resolve(__dirname, "frontend"),
  entry: "./index.jsx",
  output: {
    path: path.resolve(__dirname, "app/assets/javascripts"),
    filename: "./bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/env",
              "@babel/react",
            ],
          },
        },
      },
    ],
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "..."],
  },
};
