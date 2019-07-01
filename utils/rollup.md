# rollup
rollup 是新一代的打包工具，通常与 webpack 对标。

## 项目创建
rollup 配置和使用更为简单，生成代码更易读，因此更适合库和插件的开发。
首先创建配置文件：
```
npm i
```
然后增加一个入口文件 `index.js`。
安装 rollup
```
npm i rollup -D
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
        format: 'umd'
    }
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
- rollup-plugin-buble 将 es6 语法转化为 es5
- rollup-plugin-flow-no-whitespace 去除flow静态类型检查代码
- rollup-plugin-alias 为模块提供别名，比如 `·`const He from 'he'` ，这里的 he 会替换为 alias 的实际名称。
