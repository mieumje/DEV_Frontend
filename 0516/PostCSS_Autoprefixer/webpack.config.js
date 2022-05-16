const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    publicPath: '/',
    clean: true
  },
  module: {
    rulse: [

    ]
  },
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    })
  ]
}