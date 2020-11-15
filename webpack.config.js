/*
 * @Author: Jelly
 * @Date: 2020-11-15 21:09:44
 * @LastEditors: Jelly
 * @LastEditTime: 2020-11-16 00:13:59
 * @Github: https://github.com/szjSmiling/react-admin-shop
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'js/app.js'
  },
  devServer: {
    // output中配置了publicPath: '/dist',就不需要这个配置了
    // contentBase: './dist',
    host: 'localhost',
    port: 8086,
  },
  module: {
    rules: [
      // react 文件处理
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      // css 文件处理
      {
        test: /\.css$/i,
        // use: ['style-loader', 'css-loader'],
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
        })
      },
      // sass 文件处理
      {
        test: /\.s[ac]ss$/i,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"],
        })
      },
      // 图片的配置
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'resource/[name].[ext]'
            },
          },
        ],
      },
      // 字体图标的配置
      {
        test: /\.(woff|woff2|svg|eot|ttf|otf)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'resource/[name].[ext]'
            },
          },
        ],
      },
    ]
  },
  plugins: [
    // 处理html文件
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    // 独立css文件
    new ExtractTextPlugin('css/[name].css'),
    // 提出公共模块(webpack 自带的)
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'js/base.js'
    })
  ]
};