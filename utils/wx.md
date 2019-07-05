# 小程序入门
由于工作中需要使用工作流引擎，需要开发一套小程序版本的前端插件。

## 如何创建自定义组件
首先创建目录结构：
```
|--components
|--workflow
    |--workflow.wxml
    |--workflow.json
    |--workflow.wxss
    |--workflow.js
|--pages

```
编辑器会自动生成组件配置：
```json
//.json
{
  "component": true,
  "usingComponents": {}
}
```
然后在父页面中引入组件
```json
//xxx.json
{
  "usingComponents": {
    "v-workflow": "/components/workflow/workflow"
  }
}
```
这样，就可以使用自定义标签来使用组件了。
```html
<v-workflow></v-workflow>
```