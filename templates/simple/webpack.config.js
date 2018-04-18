var path = require('path');

const webpackConfig = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development', // production
  resolve: {
    extensions: [".js", ".jsx"], // 自动解析确定的扩展
    alias: {
      biz: path.resolve(__dirname, 'src/biz')
    }
  }
}

module.exports = webpackConfig;