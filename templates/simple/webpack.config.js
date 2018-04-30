const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const modeEnum = {
  dev: 'development',
  pro: 'production'
};

const webpackConfig = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'cheap-source-map', // 此处为了得到最大的构建速度，选择了eval模式
  mode: modeEnum.dev, // 区分当前是哪一种的构建模式
  resolve: {
    extensions: [".js", ".jsx"], // 自动解析确定的扩展
    alias: {
      biz: path.resolve(__dirname, 'src/biz')
    }
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'simple webpack demo'
    }),
    // new CleanWebpackPlugin(['dist']),
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = webpackConfig;