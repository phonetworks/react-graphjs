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
    libraryTarget: 'commonjs2'
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
  },
  externals: {
    'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  }
}