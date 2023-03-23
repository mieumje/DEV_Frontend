const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    })
  ]
}