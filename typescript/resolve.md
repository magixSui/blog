# 开始 Typescript
## 初始化项目
当前按照 ` vue-cli3 ` 的方式初始化 Ts 项目，并引入了一些插件。
## Could not find a declaration file for module 'module-name'
TsLint 报错，因为 TsLint 要求三方库中必须含有 ` index.d.ts ` 文件。
解决方案：
### 三方支持
```
npm install -D @types/module-name
```
### 切换引入方式
```
const yourModuleName = require('module-name');
```
### 自己动手，改变包类型
```
// 新建 module.d.ts
declare module 'vue-awesome-swiper';
// 之后再引入包就不报错了
```
:::tip
https://stackoverflow.com/questions/41292559/could-not-find-a-declaration-file-for-module-module-name-path-to-module-nam?r=SearchResults
:::

### Promise 类型
```javascript
return new Promise<any[]>
```
### vue 引入图片
```javascript
// 在 js 中引入图片，在 promise 中返回
Expected property shorthand in object literal
resolve([{
      author: '李利民',
      datetime: '2018 01-01',
      avatar, // 注意这里的写法
      where: '吉林省泗水村',
    }]);
  });
```
### 类型
```javascript
// 可选参数
interface Config {
  color?: string;
  width?: number;
}
// 确保有值
@Prop() private avatar!: string;
```