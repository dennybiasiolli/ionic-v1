const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  output: {
    filename: '[name].js',
  },
  devtool: 'source-map',
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
  ]
})
