const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/app.js',
  module: {
    rules: [
      {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
    ],
    
  },
  output: {
    //filename: '[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
  ]
};