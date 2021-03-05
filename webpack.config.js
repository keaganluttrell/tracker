const path = require('path');
const webpack = require('webpack');

const ENTRY = path.resolve(__dirname, 'client', 'index.js');
const OUT_DIR = path.resolve(__dirname, 'public');

module.exports = {
  mode: 'development',
  entry: ENTRY,

  output: {
    path: OUT_DIR,
    filename: 'app.js',
  },

  plugins: [new webpack.ProgressPlugin()],
  devtool: "inline-source-map",
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: [path.resolve(__dirname, 'client')],
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /.css$/,

      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader",
        options: {
          sourceMap: true
        }
      }]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  }
}