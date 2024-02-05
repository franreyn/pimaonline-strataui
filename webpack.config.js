const path = require("path");

module.exports = {
  mode: "production",
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
  entry: "./src/ts/index.ts",
  output: {
    publicPath: "dist", 
    filename: "scripts.js",
    path: path.resolve(__dirname, "dist")
  }
}