# 基于 webpack 搭建 vue 组件

## webpack 配置

### 安装
**安装正式版**
```
npm i webpack -D
```
**如果使用 webpack 4+
```
npm i weboack-cli -D
```
**目录结构**
```
|--
    |--src
        |--component
            index.js
        index.js
    package.json
    .gitignore
    weboack.config.js
```
**写入配置**
```javascript
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'deep-tree.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```
**构建命令**
```json
// package.json
{
    "script": {
        "build": "webpack",
        "watch": "webpack --watch"
    }
}
```
## babel
**babel-loader**
```
npm install -D babel-loader @babel/core @babel/preset-env
```
增加配置
```javascript
// 也可以使用 .babelrc 配置代替 options
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
```

## eslint
```
npm install eslint-loader eslint -D
```
增加规则
```javascript
// 这里的执行顺序是由右向左，因此要先执行 eslint 以免被其余插件干扰
use: ['babel-loader',  "eslint-loader"]
```

### eslint 配置
如果想要使用 es6 ，需要配置：
```
"env": {
        "es6": true
    },
```
但是要注意的是： 官方文档提到 `enable all ECMAScript 6 features except for modules, (this automatically sets the ecmaVersion parser option to 6)`,因此需要额外配置以使 `import`, `export` 不报错。
```
"parserOptions": {
        "sourceType": "module"
    },
```
**可以使用推荐配置**
```
"extends": "eslint:recommended"
```

window is not defined

```
browser: true
```

### render 函数使用 jsx 语法
```
npm i babel-plugin-syntax-jsx babel-plugin-transform-vue-jsx babel-helper-vue-jsx-merge-props
```
配置 .babelrc
```
"plugins": ["transform-vue-jsx"]
```