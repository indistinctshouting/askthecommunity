// const path = require('path');
// const Webpack = require('webpack');

// var HTMLWebpackPlugin = require('html-webpack-plugin');
// var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
//   template: __dirname + '/app/index.html',
//   filename: 'index.html',
//   inject: 'body'
// });

// module.exports = {
//   entry: __dirname + '/app/index.jsx',
//   module: {
//     rules: [
//       {
//         test: /\.js$/, //represents all strings that end with .js
//         exclude: /node_modules/,
//         use: 'babel-loader'
//       }
//     ]
//   },
//   output: {
//     filename: 'transformed.js',
//     path: __dirname + '/build' //This will save your transformed JavaScript into a new file named build/transformed.js.
//   },
//   plugins: [HTMLWebpackPluginConfig]
// };

var path = require('path');
var SRC_DIR = path.join(__dirname, '/app');
var DIST_DIR = path.join(__dirname, '/build');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'transformed.js',
    path: DIST_DIR
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',      
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};

