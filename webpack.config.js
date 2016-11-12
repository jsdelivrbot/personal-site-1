var webpack = require('webpack');

var config  = {
  entry: {
    path: './src/main.js'
  },
  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './build',
    inline: true,
    hot: true
  }
}

if (process.env.NODE_ENV === 'production') {
  delete config.devtool;
  var webpack = require('webpack');
  config.plugins = [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' })
  ];
}

module.exports = config;
