# webpack 配置多页应用
本文将描述 webpack 配置多页应用的思路。

## 入口
首先修改 entry，将入口设置为多个
```json
 entry: {
  filter:  path.resolve(__dirname, '../src/pages/filter/filter.js'),
  test: path.resolve(__dirname, '../src/pages/test/test.js')
}
```

## html-webpack-plugin
需要指定 html 模板的位置，配置如下：
```js
new HtmlWebpackPlugin({
  // 模板来源
  template: `src/pages/${fileName}/${fileName}.html`,
  // 在 dist/index.html 的输出
  filename: process.env.NODE_ENV === 'development' ? `${fileName}.html` : `${fileName}/${fileName}.html`,
  favicon: `src/pages/${fileName}/favicon.png`
})
```

## 动态
为了创建好目录自动生成配置，可以新增一个 js 文件，遍历目录，生成配置。此处仅提供思路，不再赘述，具体实现可以查看源码。

## 多页输出目录
根据不同目的，可以配置不同的输出结构。
- 多页应用
- 多应用单项目，打包多个应用
- 多应用但项目，打包单个应用
多页应用，可以分离页面入口，分子目录输出；
打包多个应用可以在多页应用打包基础上，将共有静态资源分贝拷贝到子目录中；
单独打包可以考虑增加命令行监听，获取输入的信息，根据输入打包单个应用。

:::tip
有时候我们开发多个小应用时，并不是多人协作，那么重复的拷贝项目，安装依赖，配置基础框架等等工作是多余的。那么就可以按照这个思路进行开发。
:::

