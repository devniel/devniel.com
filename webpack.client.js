const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  // Tell webpack the root file of our
  // server application
  entry: {
    //client: ['webpack-hot-middleware/client', './src/client/client.js'],
    client: ['./src/client/client.js'],
  },

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    publicPath: '',
    path: path.resolve(__dirname, 'public'),
    //hotUpdateChunkFilename: 'hot/client/hot-update.js',
    //hotUpdateMainFilename: 'hot/client/hot-update.json',
  },

  devServer: devMode
    ? {
        port: 3000,
        contentBase: './public',
        hot: true,
        overlay: true,
        historyApiFallback: true,
      }
    : undefined,

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
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
        ],
      },
      {
        test: /\.pcss$|\.scss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
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
        test: /\.(png|jpg|jpeg|gif|woff2|woff|pdf|webmanifest)$/,
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
    new webpack.HotModuleReplacementPlugin(),

    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'style.css',
      chunkFilename: '[id].css',
    }),

    // Generates an `index.html` file with the <script> injected.
    devMode
      ? new HtmlWebpackPlugin({
          inject: true,
          template: './public/index.html',
          environment: {
            NODE_ENV: process.env.NODE_ENV || 'development',
          },
        })
      : undefined,
  ],
};

module.exports = merge(baseConfig, config);
