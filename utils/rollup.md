# rollup
rollup 是新一代的打包工具。相对于 webpack rollup 具有更好的可读性，首个应用 tree-shaking 的打包器。并且 rollup 使用
全新的 es module 标准编译代码模块，而不是使用 commonjs 等规范。

## 项目创建
rollup 配置和使用更为简单，生成代码更易读，因此更适合库和插件的开发。
首先创建配置文件：
```
npm init
```
然后增加一个入口文件 `index.js`。
安装 rollup
```
yarn add rollup -D
```
### 项目结构
```
|--index
|--rollup.config.js
|--package.json
```

## 基本配置
rollup 可以使用命令行参数，但更通常的做法是通过配置文件执行。
```javascript
module.exports = {
    input: 'index.js',
    external: '',
    plugins: [],
    output: {
        file: 'dist/test.js',
        format: 'umd',
        name: 'Seed'
    }
}
```

### global
globals 的值是一个对象，key表示使用的模块名称（npm 模块名），value 表示在打包文件中引用的全局变量名。
```javascript
globals: {
  vue: 'Vue'
}
```
### 命令行
```
//package.json
"script": {
    "build": "rollup -c"
}
```

## 插件
rollup 插件使用非常简单，只需要引入执行就可以了,根据不同插件的文档，传入不同的配置对象。
```javascript

```
### rollup-plugin-node-resolve
使 rollup 可以解析 mode_modules 的文件。

### rollup-plugin-commonjs
使 rollup 可以解析 commonjs 规范的文件。

### rollup-plugin-json
plugins: [
  plugin()
],
```
yarn add rollup-plugin-json -D
# rollup.config.js
import json from 'rollup-plugin-json';
plugins: [json()],
```
在文件中引入 json 就可以读取 json 数据了。
```javasript
import { version } from './package.json';

console.log(version)
```
### rollup-plugin-serve
启动一个 server 服务

### rollup-plugin-generate-html-template
拷贝 html 并自动写入 js。

### rollup-plugin-generate-html-template
拷贝 html 并注入 js 脚本

### rollup-plugin-vue
使 rollup 可以解析 .vue文件。

### rollup-plugin-postcss
使 rollup 可以编译 css 并将内容写入到 style 标签。 

### rollup-plugin-jsx
使 rollup 可以解析 .jsx 文件。
```javascript
jsx({ factory: 'h' })
```

### rollup-plugin-buble
类似于 babel ，可以提前使用一些 es6 + 的js。

## 问题处理

### unresolved dependencies
通常是没有找到 mode_modules 下的外部依赖。解决方案：使用 'rollup-plugin-node-resolve'。
但是我遇到的并不是常规的问题，原因是 `rollup-plugin-vue` 的某些版本会报错，使用 `rollup-plugin-vue@5.1.1` 后解决。
https://github.com/vuejs/rollup-plugin-vue/issues/303

- rollup-plugin-buble 将 es6 语法转化为 es5
- rollup-plugin-flow-no-whitespace 去除flow静态类型检查代码
- rollup-plugin-alias 为模块提供别名，比如 `·`const He from 'he'` ，这里的 he 会替换为 alias 的实际名称。
