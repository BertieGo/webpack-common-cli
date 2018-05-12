const path = require('path');
const webpack = require('webpack'); // eslint-disable-line
const CleanWebpackPlugin = require('clean-webpack-plugin'); // eslint-disable-line
const WebpackVersionPlugin = require('webpack-version-plugin'); // eslint-disable-line

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'lodash'] // 将模块打包到一个动态连接库
  },
  output: {
    path: path.resolve(__dirname, 'dist/dll/'), // 存放的位置
    filename: '[name].dll.js', // 输出动态连接库的文件名称
    library: '_dll[name]' // 全局变量名称
  },
  devtool: '#source-map',
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      name: '_dll[name]', // 和output.library中一致，也就是输出的manifest.json中的 name值
      path: path.join(__dirname, 'dist/dll/', '[name].manifest.json')
    })
  ]
};