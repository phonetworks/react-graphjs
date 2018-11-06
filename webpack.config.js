const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './lib/index.js',
    app: './lib/app.js'
  },
  output: {
    path: __dirname + "/",
    filename: (option) => {
      return option.chunk.name === 'app' ? 'test/app.js' : 'dist/[name].js';
    },
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
}