const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src",
  output: {
    publicPath: "/",
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
    }),
  ],
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
};
