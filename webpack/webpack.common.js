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
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', 'dist'),
  },
};
