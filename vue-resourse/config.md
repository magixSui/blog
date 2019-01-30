# 全局配置
vue 提供了一系列的全局配置，而这些配置包含在  ` Vue.config ` 下。所以我们先屡一下思路：我们通过 ` Vue.config.silent = false `
可以设置 ` Vue.config ` 下的一个属性，**可以在启动应用之前修改下列属性**,说明在某个只执行一次的函数中，接受了这个参数，并进行设置。
## vue 的入口
尽管我的原则是从每一个 api 入手，还是有必要先了解一下项目的入口。首先 download [vue-dev](https://github.com/vuejs/vue),打开根目录下的
package.json
```json
{
  "scripts": {
    "dev": "rollup -w -c scripts/config.js --environment TARGET:web-full-dev"
  }
}
```
进入 ` scripts/config.js `
```javascript
const builds = {
//...
'web-full-dev': {
    entry: resolve('web/entry-runtime-with-compiler.js'),
    dest: resolve('dist/vue.js'),
    format: 'umd',
    env: 'development',
    alias: { he: './entity-decoder' },
    banner
  }
//...
}

```
同目录下找到 ` resolve `
```javascript
const aliases = require('./alias')
const resolve = p => {
  const base = p.split('/')[0]
  if (aliases[base]) {
    return path.resolve(aliases[base], p.slice(base.length + 1))
  } else {
    return path.resolve(__dirname, '../', p)
  }
}
```
这里的设计是，工厂函数接收一个字符串，通过 ` / ` 分割字符串取到一级目录（相当于一个别名），完整的目录保存在同级 ` alias.js `中。
如果 ` alias.js ` 下包含以一级目录命名的属性，返回真正的路径，否则返回 ` 上一级目录 ，现版本而言就是 'src/platforms/web/entry-runtime-with-compiler' `,
我觉得这里的目录设置应该有优化空间，比如 rollup 是否支持 alias 设置？更好的匹配规则？这里不做讨论。
打开 ` src/platforms/web/entry-runtime-with-compiler.js `
```javascript
import Vue from './runtime/index'
//...
export default Vue
```
打开 ` ./runtime/index `
```javascript
import Vue from 'core/index'
//...
export default Vue
```
打开 ` core/index `
```javascript
import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'
import { isServerRendering } from 'core/util/env'
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'

initGlobalAPI(Vue)
//...
export default Vue
```
至此我找到了真正的入口文件，可以开始分析我真正想要知道的内容了。
## Vue.config 是如何生效的
在 ` core/global-api/index.js ` 中,导出了 ` initGlobalAPI ` 函数，而在函数中执行了这样一句：
```javascript
Object.defineProperty(Vue, 'config', configDef)
```
这样就把 config 属性添加到了 Vue 对象上，并且不可更改：
```javascript
if (process.env.NODE_ENV !== 'production') {
    configDef.set = () => {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      )
    }
  }
```
## Vue.config.silent
> 了解 silent 及以下属性请先确保已了解 Vue.config 的实现方式。
silent 采用了 console api 来实现警告及贴士。
```javascript
warn = (msg, vm) => {
    const trace = vm ? generateComponentTrace(vm) : ''

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace)
    } else if (hasConsole && (!config.silent)) {
      console.error(`[Vue warn]: ${msg}${trace}`)
    }
  }

  tip = (msg, vm) => {
    if (hasConsole && (!config.silent)) {
      console.warn(`[Vue tip]: ${msg}` + (
        vm ? generateComponentTrace(vm) : ''
      ))
    }
  }
```
## Vue.config.optionMergeStrategies
## Vue.config.devtools
这里了解了一件事：谷歌插件可以通过 js 代码来控制插件是否可用。 api 中所说的在启动应用之前修改下列属性，实际测试中，
在代码任意位置都可生效。但是根据习惯，以及部分配置需要在对应条件发生之前设置，所以最好还是在实例化 Vue 之前就设置。
` devtools ` 验证是否设置好要关闭调试模式再打开。
## Vue.config.errorHandler
## Vue.config.warnHandler
## Vue.config.ignoredElements
## Vue.config.keyCodes
## Vue.config.performance
## Vue.config.productionTip