# react-admin-shop
use React to finish a shop admin system
开发流程如下:
```js
1. 安装git, 配置本地 SSH,以及基础信息;
2. 安装node 和 yarn
3. 新建项目, yarn add webpack@3.10.0 (会自动安装node_models等...)
4. 新建配置文件 webpack.config.js
5. 使用 node_modules/.bin/webpack 进行打包
6. 安装 yarn add babel-core@6.26.0 babel-preset-env@1.6.1 babel-loader@7.1.2 --dev, 配置
文件增加 babel 配置(将 ES6 语法, 解析 ES5 语法)
7. 安装 yarn add babel-preset-react@6.24.1 --dev 解析React
`
{
  test: /\.js$/,
  exclude: /(node_modules)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['env', 'react']
    }
  }
}
`
8. 安装 yarn add react react-dom
9. 安装 yarn add style-loader@0.19.1 css-loader20.28.8 (处理引入css,最新的loader,配置不兼容webpack3.0)
`
{
  test: /\.css$/i,
  // use: ['style-loader', 'css-loader'],
  use: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: "css-loader",
  })
}
`
10. 安装 yarn add extract-text-webpack-plugin@3.0.2 --dev (将css打包到一个文件里)
11. 安装 yarn add sass-loader@6.0.6 node-sass@9.2.0 --dev (node-sass版本和node版本有关系)
`
{
  test: /\.s[ac]ss$/i,
  use: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: ["css-loader", "sass-loader"],
  })
}
`
12. 安装 yarn add file-loader@1.1.6 url-loader@0.6.2 --dev (图片打包)
`
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
}
`
13. 安装 yarn add font-awesome  (引入字体图标)
`
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
}
`
14. 安装 yarn add webpack-dev-server@3.1.11 --dev (本地简化启动,热更新)

15. 安装 yarn add react-router-dom@4.2.2
`版本特点: 1.动态路由, 纯react组件; 2.遵从react组件的思想`
`提供的组件:
<BrowserRouter /> (需要后端设置一些东西), <HashRouter> 路由方式
<Route exact /> 路由规则(属性: exact 完全匹配), 路径对应组件或者对应某一个渲染方式
<Switch /> 路由选项(解决路由多次匹配的问题), 被其包裹的路由只有第一个符合的被匹配
<Link /> (解析后相当于a标签), <NavLink /> 都是跳转导航
<Redirect /> 自动跳转
`
16. 安装富文本插件 yarn add simditor@2.3.22
`https://github.com/mycolorway/simditor`
```