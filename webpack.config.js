/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const nodeExternals = require('webpack-node-externals')
const path = require('path')

const config = {
  target: 'node',
  mode: 'production',
  externals: [nodeExternals()],
  entry: {
    'index': './dist/index.js',
    'routes/app': './dist/routes/app.js',
    'routes/app/landing': './dist/routes/app/landing.js',
  },
  output: {
    path: path.join(__dirname, 'dist.webpack'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', {
              'targets': {
                'node': 'current'
              }
            }]
          ]
        }
      }
    }]
  }
}

module.exports = config