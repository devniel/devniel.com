const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  // Inform webpack that we're building a bundle
  // for nodeJS, rather than for the browser
  target: 'node',

  // Tell webpack the root file of our
  // server application
  entry: './src/index.js',

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  node: {
    __dirname: false,
    __filename: false,
  },

  externals: [webpackNodeExternals()],

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
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
        ],
      },

      {
        test: /\.pcss$|\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              url: true,
            },
          },
          'sass-loader',
        ],
      },

      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: {
                  removeViewBox: false,
                },
              },
            },
          },
        ],
      },

      {
        test: /\.(png|jpg|gif|woff2|woff|pdf|webmanifest)$/,
        //exclude: [/\.js$/, /\.html$/, /\.json$/],
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:8].[ext]',
        },
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};

module.exports = merge(baseConfig, config);
