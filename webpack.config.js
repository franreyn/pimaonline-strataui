const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "js/scripts.js",
    path: path.resolve(__dirname, "dist/"),
    publicPath: "dist/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extracts CSS into separate files
          "css-loader",                 // Translates CSS into CommonJS
          "sass-loader"                 // Compiles Sass to CSS
        ], 
        include: [path.resolve(__dirname, "src/scss")]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html-templates/layouts/OneColumn.tsx",
      filename: "html-templates/OneColumn.html",
      chunks: ["OneColumn"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/html-templates/layouts/TwoColumn.tsx",
      filename: "html-templates/TwoColumn.html",
      chunks: ["TwoColumn"],
    }),
    new MiniCssExtractPlugin({
      filename: "css/index.css",
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"), // Serve files from the dist directory
    port: 8080, // Specify a port
    open: false, // Disable automatic browser opening
    hot: true, // Enable hot module replacement (HMR)
  },
};
