const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    OneColumn: './src/html-templates/layouts/OneColumn.tsx',
    TwoColumn: './src/html-templates/layouts/TwoColumn.tsx',
  },
  output: {
    filename: '[name].html', // Use [name] placeholder for dynamic output filenames
    path: path.resolve(__dirname, 'dist/html-templates'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html-templates/layouts/OneColumn.tsx',
      filename: 'OneColumn.html',
      chunks: ['OneColumn'],
    }),
    new HtmlWebpackPlugin({
      template: './src/html-templates/layouts/TwoColumn.tsx',
      filename: 'TwoColumn.html',
      chunks: ['TwoColumn'],
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'), // Serve files from the dist directory
    port: 8080, // Specify a port
    open: false, // Disable automatic browser opening
    hot: true, // Enable hot module replacement (HMR)
  },
};
