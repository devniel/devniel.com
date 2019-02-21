const path = require('path');

global.rootDirectory = path.resolve(__dirname);

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            [
              '@babel/preset-env',
              { targets: { node: 'current' } },
            ],
            '@babel/preset-react',
          ],
        },
      },
    ],
  },
  
  resolve: {
    alias: {
      Client: path.resolve(__dirname, 'src/client/'),
      Server: path.resolve(__dirname, 'src/server/'),
    },
  },
};
