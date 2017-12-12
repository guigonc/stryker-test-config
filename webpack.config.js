const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, 'src', 'main.js')],
  devtool: 'cheap-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'test'),
      'node_modules'
    ]
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  externals: ['window'],
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`
    })
  ]
}
