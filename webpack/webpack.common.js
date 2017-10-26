const glob = require('glob');
const path = require('path');

module.exports = {
  entry: {
    'js/ionic': [].concat(
      './js/ionic.js',
      glob.sync('./js/utils/*.js'),
      glob.sync('./js/views/*.js'),
    ),
    'js/ionic-angular': [].concat(
      glob.sync('./js/angular/**/*.js'),
    ),
    'css/ionic': './scss/ionic.scss',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', 'dist'),
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      }, {
        loader: "sass-loader" // compiles Sass to CSS
      }]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }]
    }, {
      test: /\.(woff(2)?|eot|ttf|otf)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }]
    }]
  }
};
