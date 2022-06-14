const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    })
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      },
    ],
  },
  devServer: {
    hot: true
  },
};