const path = require('path');
var webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {

  // Tell webpack the root file of our
  // server application
  entry: {
    'client' : [
      'webpack-hot-middleware/client',
      './src/client/client.js',
    ]
  },

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    publicPath: "",
    path: path.resolve(__dirname, 'public'),
  },

  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              cacheDirectory: true,
              plugins: [
                '@babel/plugin-transform-runtime',
                'react-hot-loader/babel',
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.pcss$|\.scss$/,
        loader: 'style-loader!css-loader!postcss-loader',
      },

      {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        loader: 'file-loader',
      },
    ],
  },

  plugins: [

    new webpack.HotModuleReplacementPlugin(),

  ]
};

module.exports = merge(baseConfig, config);
