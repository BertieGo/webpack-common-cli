const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const AutoPrefixer = require('autoprefixer');
const PostcssPxtorem = require('postcss-pxtorem');
const PostcssNext = require('postcss-cssnext');

const modeEnum = {
  dev: 'development',
  pro: 'production'
};


const styleLoader = (options = {}, useable) => {
  const defaultOptions = {
    singleton: true
  };
  return {
    loader: `style-loader${useable ? '/useable' : ''}`, 
    options: Object.assign(defaultOptions, options)
  }
}

const cssLoader = (options = {}) => {
  const defaultOptions = {
    minimize: true, // 启用压缩
    sourceMap: true, // 已分离 css，总是生成 sourceMap。若使用 js 加载，则不应开启
    modules: true, // 是否启用css-modules
    localIdentName: '[path][name]_[local]_[hash:base64:5]' // 定义混淆命名规则
  };
  return {
    loader: 'css-loader', 
    options: Object.assign(defaultOptions, options)
  }
}

const postcssLoader = (options = {}) => {
  const defaultOptions = {
    ident: 'postcss', // 定义在哪里使用postcss的插件
    plugins: loader => [
      PostcssPxtorem({
        rootValue: 100,
        propWhiteList: ['*']
      }),
      // 使用未来的css语法，定义变量等，因为内置了autoprefixer所以不再引入autoprefixer
      PostcssNext({
        browsers: ['last 2 versions', '> 1%', 'ie >= 8']
      })
    ]
  };
  return {
    loader: 'postcss-loader', 
    options: Object.assign(defaultOptions, options)
  }
}



const webpackConfig = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[name]chunk.js', // 指定动态加载的文件的名字
    publicPath: './' // 声明文件的引用路径
  },
  devtool: 'eval', // 此处为了得到最大的构建速度，选择了eval模式
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
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        /**
         * {style-loader}
         * 可加/useable配置是否使用某个css样式表，主要用来根据页面需要来动态增删css文件
         * 但是与css-modules冲突，有解决冲突的方案可以在issue里面告诉我谢谢~
         */
        use: [
          styleLoader({
            singleton: false
          }),
          cssLoader()
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: styleLoader(),
          use: [
            cssLoader(),
            postcssLoader(),
            {
              loader: 'less-loader'
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        // 提取公共的css代码
        use: ExtractTextWebpackPlugin.extract({
          fallback: styleLoader(),
          use: [
            cssLoader(),
            postcssLoader(),
            {
              loader: 'sass-loader'
            }
          ]
        })
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf)(\?.*$|$)/,
        use: ['url-loader']
      },
      // TODO 增加svg文件存放路径
      // {
      //   test: /\.(svg)$/i,
      //   use: ['svg-sprite-loader'],
      //   include: svgDirs // 把该路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
      // },
      {
        test: /\.(png|jp[e]?g|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2 * 1024,
              name: 'images/[name].[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'simple webpack demo',
      publicPath: './dist/'
    }),
    new ExtractTextWebpackPlugin({
      filename: '[name].min.css', // HtmlWebpackPlugin插件会自动去匹配ExtractTextWebpackPlugin所生成的css文件
      allChunks: false // 定义提取css的范围，假如用的true，那么将会在第一次提取所有的css，false将会提取初始的代码，即实现了css代码的动态加载
    })
    // new CleanWebpackPlugin(['dist']),
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = webpackConfig;