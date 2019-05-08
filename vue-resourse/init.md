# 第一次提交
首次提交的结构如下，这样的结构明显不会让人望而生畏了，目录也很简单。
```
src
├── main.js        # 核心代码 
test               # 测试相关 
├── index.html
├── test.js
.gitignore         # git 忽略 
.jshintrc          # jshint 设置
component.json     # 
package.json       # 项目配置文件
Gruntfile.js       # grunt 打包配置
```
可以看到，最初引入 jshint 作为代码审查工具，grunt 作为打包工具，从这里也可以看出测试、校验与打包工具是一个项目必不可少的。

## 打包工具分析
当前配置了两个打包工具，一个是 grunt ，一个是component。grunt 用做项目打包工具，component 作为模块打包工具处理静态资源。
配置了两个命令：
- grunt
- grunt test
一个 watch 监听：
- grunt watch
执行 `grunt watch` 时，监听了 src 目录下 js 文件和 component.json 的变化，如果发生变化，就执行 component build 任务。
执行 `grunt test` 时，执行 mocha 测试任务。
执行 `grunt` 时，分别执行 ['jshint', 'component_build', 'mocha'] ，构建生成目录。
构建工具的使用不在这里分析，如想了解，移步[工具入门](https://magicxin.github.io/blog_new/utils/grunt.html#需要做的)

:::tip
可以看到这些工具很多已经过时、停止更新，所以再继续使用这些工具并不合适，所以我会简单了解用到的工具，然后选择更适合的工具来做这些事。
:::

## 代码出生
在 `a5e27b1174e9196dcc9dbb0becc487275ea2e84c` 上，有一个 `explorations` 文件夹，这里是作者对最初模板的探索，实现上
参考了[Rivets.js](https://github.com/mikeric/rivets)，getset.html 主要实现的是 get 和 set 方法。

代码比较易读，唯一的重点在于,当初始化数据后，创建了额外的 data ，data 每个属性的增加会触发 Object.defineProperty 中的 set 方法，
从而触发视图绑定的更改。
```javascript
if (initData) {
  for (var variable in initData) {
    data[variable] = initData[variable];
  }
}
Object.defineProperty(data, variable, {
  set: function (newVal) {
    [].forEach.call(bindings[variable].els, function (e) {
      bindings[variable].value = e.textContent = newVal;
    })
  },
  get: function () {
    return bindings[variable].value;
  }
});
```
