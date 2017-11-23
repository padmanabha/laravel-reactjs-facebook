var path = require('path');
var webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: '../resources/views/index.blade.php',
  filename: '../index.html',
  inject: false
});


const jQueryPlugin = new webpack.ProvidePlugin({
  $: "jquery",
  jQuery: "jquery"
})


var config = {
  entry: SRC_DIR + '/app/index.js',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  devtool: 'source-map',
  module: {
    strictExportPresence: true,
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        include: SRC_DIR,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2'],
          plugins: ['transform-decorators-legacy']
        }
      },
    

      { test: /\.(css|less)$/, 
        use: ExtractTextPlugin.extract("css-loader","less-loader" ),
        
      },
      {test: /\.scss$/, loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]}
     
      , {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=public/fonts/[name].[ext]'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, ""),
    compress: true,
    port: 3000,
    historyApiFallback: {
      disableDotRule: true,
    },
  },
  plugins: [new ExtractTextPlugin('[name].css'),HtmlWebpackPluginConfig, jQueryPlugin]

};
module.exports = config;