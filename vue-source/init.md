# 模板动态绑定
首次提交的结构如下，这样的结构明显不会让人望而生畏了，目录也很简单。
```
src
├── main.js        # 核心代码 
test               # 测试相关 
├── index.html
├── test.js
.gitignore         # git 忽略 
.jshintrc          # jshint 设置
component.json     # component 配置
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
可以看到这些工具很多已经过时、停止更新，我会在尽可能还原开发场景的同时，选择更适合的工具来做这些事。比如在这几个工具中我舍弃了
component 打包器，替换为 browserify。
:::

## 代码分析
首先通过页面结构，简单了解作者想要实现什么：
```html
<!DOCTYPE html>
<html>
	<head>
		<title>title</title>
		<meta charset="utf-8">
		<script src="dist/seed.js"></script>
	</head>
	<body>
		<div id="test" sd-on-click="changeMessage | .button">
            <p sd-text="msg | capitalize"></p>
            <p sd-show="something">YOYOYO</p>
            <p class="button" sd-text="msg"></p>
            <p sd-class-red="error" sd-text="hello"></p>
        </div>
		<script>
			var Seed = require('seed')
			var app = Seed.create({
			    id: 'test',
			    // template
			    scope: {
			        msg: 'hello',
			        hello: 'WHWHWHW',
			        changeMessage: function () {
			            app.scope.msg = 'hola'
			        }
			    }
			})
		</script>
	</body>
</html>
```
这里我们要关注的核心分两部分，一部分在视图层（html 标签），一部分在数据层（script）。视图层目前大致分为五个功能：
- 模板渲染
- 拦截器
- 响应事件
- 是否展示
- 动态 class

```javascript
sd-on-click="changeMessage | .button"
sd-text="msg | capitalize"
sd-show="something"
sd-class-red="error"
sd-text="hello"
sd-text="msg"
```
数据层与视图层中的变量一一对应，Seed 类内部要做的就是将视图层的数据和方法，绑定到视图层，同时这个绑定是响应式的，数据如果中途发生
改变，同时会触发视图的改变。那么 Seed 具体是怎样做的呢？我根据自己的理解缕出了宏观的工作流程：

- 获取自定义指令
- 获取指令对应的节点
- 执行指令

就是这么简单。至于稍微复杂的代码，都是在为了实现以上目标而写的细节代码。我打算以伪代码的形式来帮助理解，这样实现的逻辑就清晰了：
```javascript
// 获取自定义指令
var Directives = getDirectives();
// 获取拦截器
var Filters = getFilters();
function Seed(opts) {
    // 获取包含自定义指令的节点
    var els = getElsByDirectives();
    // 定义外部数据
    this.scope = {};
    // 构建内部对象，用以绑定视图
    var bindings = {};
    /* 通过各种解析方法，将指令、拦截器、形参都绑定到节点上，根据指令 key 挂载到 binding 上
        {
        el: el,
        attr: attr,
        key: key,
        filters: filters,
        definition: def,
        argument: arg,
        }
     * 
     *
    */

    bindings = parse();
    // 通过 definedPropery 实现 set 的同时更改 binding
    for(var key in bindings) {
        this.scope[key] = opts.scope[key];
    }
    // 触发 set 方法
    Object.defineProperty(this.scope, key, {
        get: function() {
            // 返回视图 value
            return binding.value;
        },
        // 改变视图 value， 执行指令事件
        set: function(v) {
            binding.value = v;
            binding.definition(args);
        }
    }); 
}

module.exports = {
    create: function(opts) {
        return new Seed(opts);
    }
};
```

## 辅助理解
对于掌握不扎实的 api 要深入学习，这样才能构造更上层的建筑；
- defineProperty
- forEach
- bind、call、apply
- textContent querySelectorAll

:::tip
比如 forEach, 代码中有一个 cloneAttributes 的方法，这个方法如果不使用会使同节点中的 attribute 丢失。这是因为 forEach
在遍历过程中已访问的元素在迭代时被删除了，后面每一项的位置会向上平移，在这之后的每一项输出当前的项就提前了一位。所以拷贝
一份 attribute 数组，保证遍历的数组不变。
:::
