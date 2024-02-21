// Used to compile typescript into javascript
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/ts/index.ts",
  output: {
    publicPath: "dist", 
    filename: "scripts.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src/ts")]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    open: true, // open browser when server starts
    compress: true,
    port: 8080, // or any other port you prefer
  },
}