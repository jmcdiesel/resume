const path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  // Entry accepts a path or an object of entries.
  // The build chapter contains an example of the latter.
  entry: {
    main: PATHS.app + "/main.jsx",
    head: PATHS.app + "/head.jsx"
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new webpack.ProvidePlugin({
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'app/markup/index.html',
      inject: false
    }),
    new CopyWebpackPlugin([{
      from: "app/static",
      to: "static"
    }])
  ],
  resolve: {
    root: [PATHS.app, path.join(__dirname, "node_modules")],
    extensions: ['', '.js', '.jsx', '.scss']
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    outputPath: path.join(__dirname, './build')
  },
  module: {
    loaders: [
      { test: /\.json/, loader: "json" },
      { test: /\.css$/, loader: "css" },
      { test: /\.(svg|ttf|woff|woff2|otf|eot)$/, loader: "file" },
      { test: /\.(png|jpg|jpeg)$/, loader: "url" },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader?presets[]=react,presets[]=es2015'
      },
      {
        test: /\.scss$/,
        loaders: [
            "style",
            "css?sourceMap",
            "sass?sourceMap&includePaths[]=./node_modules/"
        ]
      }
    ]
  }
};
