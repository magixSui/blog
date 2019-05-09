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
配置了三个命令：
- grunt
- grunt test
- grunt watch
执行 `grunt watch` 时，监听了 src 目录下 js 文件和 component.json 的变化，如果发生变化，就执行 component build 任务。
执行 `grunt test` 时，执行 mocha 测试任务。
执行 `grunt` 时，分别执行 ['jshint', 'component_build', 'mocha'] ，构建生成目录。
构建工具的使用不在这里分析，如想了解，移步[工具入门](https://magicxin.github.io/blog_new/utils/grunt.html#需要做的)
实际上，这里部署了项目的开发环境，测试环境，生产环境，建立了一套基础的前端工程结构。
:::tip
可以看到这些工具很多已经过时、停止更新，所以再继续使用这些工具并不合适，所以我会简单了解用到的工具，然后选择更适合的工具来做这些事。
:::

## 代码分析
目标是通过配置文件，实现以下功能：
- 模板渲染
- 视图与模板绑定
- 数据拦截
- 事件绑定

实现思路：<br>
通过配置文件，创建一系列的过程节点标记，通过识别这些标记来重组 dom ，完成后消除过程节点，输出到界面。
