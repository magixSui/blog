# 引入 vue
` import Vue from 'vue' ` ， 这是项目引入 vue 的方式。但是我打开  ` node_modules/vue/package.json ` 后，发现：
```javascript
"main": "dist/vue.runtime.common.js"
```
这说明我引入的是 ` dist/vue.runtime.common.js `这个文件而非 ` dist/vue.js `,后续需要查看具体的原因。