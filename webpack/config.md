# 配置
webpack 配置是前段工程化一个难点。随着前端项目要求的提高，单独靠个人手动处理很难面面俱到，引用工具是一个不可避免的过程。
webpack 就是其中一款项目级、出色的全面的工具。不论是项目、库、框架、插件都可以通过 webpack 工具加工，达到自己开发期和构建
期想要的结果。强大必然避免不了复杂，webpack 的配置相对于其他工具还是有一定上手难度。

:::warning
文章书写时 webpack ^4.39.2 webpack-cli ^3.3.7 , 使用 webpack 的一个禁忌可能就是避免从各种博客文档上直接复制粘贴配置，webpack
的版本变化引起的 api 、 插件 api 变化很大，如果没有梳理清楚其中的功能作用很容易就会出错，就连 webpack 官方中文文档上也存在大量
新版本失效的配置方式。遇到错误时，尽量在当前使用的插件官方 doc 查看解决办法。
:::
## 从基础搭建一个基于 vue 的单页应用
### 零配置
webpack4 支持零配置，直接执行 npx webpack 会在 dist 目录下生成 main.js 文件，默认的文件入口是 `./src/index.js`
```
|-dist
    |-main.js
    |-index.html
|-src
    |-index.js
```

### 自定义配置
项目中零配置无法满足项目需求，因此大多数情况需要自定义配置。
```javascript
// webpack.config.js
const path = require('path');

module.exports = {
    entry: {
        app: 'src/index.js'
    },
    output: {
        filename: 'bundle.js'
        path: path.resolve(__dirname, 'dist')
    }
}
```
这样在 package.json 中配置
```json
...
script: {
    build: 'webpack'
}
...
```
就可以在命令中执行 `npm build`，将文件打包到 dist 中。
:::tip
webpack 默认支持 import 使用 import 来导入模块
:::

### style
可以使用 style-loader 来支持样式的引入。样式有两种注入方式，第一种是注入 `<style>` 标签。
```javascript
rules: [
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    }
]
```
:::tip
style-loader 只具有注入 `<style>` 标签的功能，通常与 css-loader 一起使用，以保证具有 css 加载的能力。
:::
第二种是注入 `<link>` 标签。
```javascript
rules: [
    {
        test: /\.css$/,
        use: [{
            loader: 'style-loader',
            options: {injectType: 'linkTag'}
        }, {
            loader: 'file-loader'
        }]
    }
]
```

### 文件加载
可以使用 file-loader 加载图片、字体等文件。需要注意的是，css 中 background 等方式设置的路径，直接打包后并不能正确加载。这是因为
生成的文件目录和名称并不能匹配。可以通过设置 name 定位到打包的位置。
```javascript
{
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'assets/[name].[ext]?[hash]'
                    }
                }]
            }

{
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }

```
### 生成 html
到目前位置需要手动在 html 中配置一些生成信息。`html-webpack-plugin` 可以自动读取webpack中的依赖生成 index.html。
```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');

new HtmlWebpackPlugin({
            template: 'src/index.html'
          })
```
[htmlWebpackPlugin 配置](https://github.com/jantimon/html-webpack-plugin/blob/master/docs/template-option.md)
:::tip
配置 template 使模板从指定目录读取。
:::


## babel-polyfill
babel 只会转义一些 es6 语法相关的内容，对于很多特性是缺失的。因此在老旧的浏览器比如 ie11 ，babel-polyfill 就是必要的了。
首先有一种比较差的使用办法：
```
npm install babel-polyfill
// 在文件主入口
import "babel-polyfill"
```
可以保证项目内的转义，但是如果引入的包中的源码使用了 es6 语法，那么这种方式就失效了，并且这种方式完全转义，会增加包的体积。

1：安装 babel-polyfill
```
npm install babel-polyfill
```
2: 拦截入口
```javascript
// webpack.config.js
entry: ["babel-polyfill", "./src/main.js"]
```
3: 自定义范围
```javascript
{
    test: /\.js$/,
    loader: 'babel-loader',
    include: [resolve('src'), resolve('/node_modules/element-ui/src'),resolve('/node_modules/element-ui/packages'), resolve('node_modules/webpack-dev-server/client')]
},
```