#配置
webpack 中会有一些常用的配置以及使用其他工具的接入配置，在此记录。

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