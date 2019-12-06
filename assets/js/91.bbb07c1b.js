(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{257:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("webpack 配置是前段工程化一个难点。随着前端项目要求的提高，单独靠个人手动处理很难面面俱到，引用工具是一个不可避免的过程。\nwebpack 就是其中一款项目级、出色的全面的工具。不论是项目、库、框架、插件都可以通过 webpack 工具加工，达到自己开发期和构建\n期想要的结果。强大必然避免不了复杂，webpack 的配置相对于其他工具还是有一定上手难度。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),a("p",[t._v("项目中零配置无法满足项目需求，因此大多数情况需要自定义配置。")]),t._v(" "),t._m(7),a("p",[t._v("这样在 package.json 中配置")]),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),a("p",[t._v("由于代码中会使用除 es5 之外的语法，想要使用新的 api 能力需要引入babel。")]),t._v(" "),t._m(18),a("p",[t._v("webpack 中的配置")]),t._v(" "),t._m(19),t._m(20),t._v(" "),a("p",[t._v("可以使用 file-loader 加载图片、字体等文件。需要注意的是，css 中 background 等方式设置的路径，直接打包后并不能正确加载。这是因为\n生成的文件目录和名称并不能匹配。可以通过设置 name 定位到打包的位置。")]),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),a("p",[a("a",{attrs:{href:"https://github.com/jantimon/html-webpack-plugin/blob/master/docs/template-option.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("htmlWebpackPlugin 配置"),a("OutboundLink")],1)]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),a("p",[t._v("由于每次生成的文件带有 hash 值，会导致文件目录越来越大，clean-webpack-plugin 可以在每次生成前删除目录。")]),t._v(" "),t._m(27),t._m(28),t._v(" "),a("p",[t._v("由于代码被处理和压缩，debug 就成了一个问题。sourceMap 可以解决 debug 的问题。对于 development 环境，可以设置：")]),t._v(" "),t._m(29),a("p",[t._v("对于生产环境可以设置")]),t._v(" "),t._m(30),t._m(31),t._v(" "),a("p",[t._v("有三种方式可以不重复 build 而实现修改后的内容实时变更。")]),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),a("p",[t._v("hrm 需要和 loader 配合使用")]),t._v(" "),t._m(34),t._m(35),t._v(" "),a("p",[t._v("package.json 下设置 sideEffects: false, 并且配置压缩插件。mode 是 production 会自动开启。\nTODO")]),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),a("p",[t._v("可以在控制台输入来开启一些配置，不过更推荐写入配置文件。")]),t._v(" "),t._m(43),t._m(44),t._v(" "),a("p",[t._v("有三种代码分割的方式")]),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),a("p",[t._v("对于前后分离的项目，调试接口时一般需要配置 proxy 代理。")]),t._v(" "),t._m(47),t._m(48),t._v(" "),a("p",[t._v("babel 只会转义一些 es6 语法相关的内容，对于很多特性是缺失的。因此在老旧的浏览器比如 ie11 ，babel-polyfill 就是必要的了。\n首先有一种比较差的使用办法：")]),t._v(" "),t._m(49),a("p",[t._v("可以保证项目内的转义，但是如果引入的包中的源码使用了 es6 语法，那么这种方式就失效了，并且这种方式完全转义，会增加包的体积。")]),t._v(" "),a("p",[t._v("1：安装 babel-polyfill")]),t._v(" "),t._m(50),a("p",[t._v("2: 拦截入口")]),t._v(" "),t._m(51),a("p",[t._v("3: 自定义范围")]),t._v(" "),t._m(52),t._m(53),t._v(" "),t._m(54),t._v(" "),t._m(55),t._v(" "),t._m(56),a("p",[t._v("安装插件")]),t._v(" "),t._m(57)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[this._v("#")]),this._v(" 配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),s("p",[this._v("文章书写时 webpack ^4.39.2 webpack-cli ^3.3.7 , 使用 webpack 的一个禁忌可能就是避免从各种博客文档上直接复制粘贴配置，webpack\n的版本变化引起的 api 、 插件 api 变化很大，如果没有梳理清楚其中的功能作用很容易就会出错，就连 webpack 官方中文文档上也存在大量\n新版本失效的配置方式。遇到错误时，尽量在当前使用的插件官方 doc 查看解决办法。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"从基础搭建一个基于-vue-的单页应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从基础搭建一个基于-vue-的单页应用"}},[this._v("#")]),this._v(" 从基础搭建一个基于 vue 的单页应用")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"零配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#零配置"}},[this._v("#")]),this._v(" 零配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("webpack4 支持零配置，直接执行 npx webpack 会在 dist 目录下生成 main.js 文件，默认的文件入口是 "),s("code",[this._v("./src/index.js")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("|-dist\n    |-main.js\n    |-index.html\n|-src\n    |-index.js\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"自定义配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义配置"}},[this._v("#")]),this._v(" 自定义配置")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webpack.config.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/index.js'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bundle.js'")]),t._v("\n        path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("...\nscript"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    build"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'webpack'\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n...\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("就可以在命令中执行 "),s("code",[this._v("npm build")]),this._v("，将文件打包到 dist 中。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("webpack 默认支持 import 使用 import 来导入模块")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"style"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#style"}},[this._v("#")]),this._v(" style")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("可以使用 style-loader 来支持样式的引入。样式有两种注入方式，第一种是注入 "),s("code",[this._v("<style>")]),this._v(" 标签。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.css$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'style-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'css-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("style-loader 只具有注入 "),s("code",[this._v("<style>")]),this._v(" 标签的功能，通常与 css-loader 一起使用，以保证具有 css 加载的能力。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("第二种是注入 "),s("code",[this._v("<link>")]),this._v(" 标签。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.css$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'style-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("injectType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'linkTag'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file-loader'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"babel-加载-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-加载-js"}},[this._v("#")]),this._v(" babel 加载 js")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("npm install -D babel-loader @babel/core @babel/preset-env\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" /\\.m?js$/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      exclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" /(node_modules|bower_components)/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      use"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'babel-loader'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          presets"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("'@babel/preset-env'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"文件加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件加载"}},[this._v("#")]),this._v(" 文件加载")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.(png|svg|jpg|gif)$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'assets/[name].[ext]?[hash]'")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.(woff|woff2|eot|ttf|otf)$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"生成-html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成-html"}},[this._v("#")]),this._v(" 生成 html")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("到目前位置需要手动在 html 中配置一些生成信息。"),s("code",[this._v("html-webpack-plugin")]),this._v(" 可以自动读取webpack中的依赖生成 index.html。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HtmlWebpackPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html-webpack-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义模板会从模板目录 src/index 读取，否则会自动生成")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HtmlWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/index.html'")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("配置 template 使模板从指定目录读取。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"清理-dist-目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清理-dist-目录"}},[this._v("#")]),this._v(" 清理 dist 目录")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("const { CleanWebpackPlugin } = require('clean-webpack-plugin');\nplugins: [\n        new CleanWebpackPlugin()\n    ]\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"开启-sourcemap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开启-sourcemap"}},[this._v("#")]),this._v(" 开启 sourceMap")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("devtool: 'inline-source-map'\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("devtool: 'source-map'\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"自动编译-热启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动编译-热启动"}},[this._v("#")]),this._v(" 自动编译 热启动")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("watch mode")]),this._v(" "),s("li",[this._v("webpack-dev-server")]),this._v(" "),s("li",[this._v("webpack-dev-middleware")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"hrm-热更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hrm-热更新"}},[this._v("#")]),this._v(" hrm 热更新")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("const webpack = require('webpack');\nplugins: [\n        new webpack.NamedModulesPlugin(),\n        new webpack.HotModuleReplacementPlugin()\n    ]\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"tree-shaking（删除未引用代码）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking（删除未引用代码）"}},[this._v("#")]),this._v(" tree-shaking（删除未引用代码）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"逻辑分离-不重复原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#逻辑分离-不重复原则"}},[this._v("#")]),this._v(" 逻辑分离 不重复原则")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("分离 webpack.config.json，根据逻辑分离原则，创建两个新的 config 文件。"),a("code",[t._v("webpack.dev.js")]),t._v(" 和 "),a("code",[t._v("webpack.prod.js")]),t._v(",根据不重复原则\n创建第三个文件 "),a("code",[t._v("webpack.common.js")]),t._v(" 利用 "),a("code",[t._v("webpack-merge")]),t._v(" 插件合并配置。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"代码压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码压缩"}},[this._v("#")]),this._v(" 代码压缩")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("mode: 'production'")]),this._v(" 默认情况会开启压缩。有三种方式压缩代码：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("UglifyJSPlugin")]),this._v(" "),s("li",[this._v("BabelMinifyWebpackPlugin")]),this._v(" "),s("li",[this._v("ClosureCompilerPlugin")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("使用需要查看是否具有 tree-shaking 的能力")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"使用-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-cli"}},[this._v("#")]),this._v(" 使用 cli")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("--optimize-minimize # 开启 UglifyJSPlugin\n--define process.env.NODE_ENV = \"'production'\" # 设置 mode production\nwebpack -p \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"code-split-代码分割"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-split-代码分割"}},[this._v("#")]),this._v(" code-split 代码分割")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("entry")]),this._v(" "),s("li",[this._v("CommonsChunckPlugin")]),this._v(" "),s("li",[this._v("动态导入\nTODO")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"配置代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置代理"}},[this._v("#")]),this._v(" 配置代理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("devServer: {\n        proxy: {\n            '/api': {\n                target: 'http://localhost:3000/community_manage/',\n                pathRewrite: {'^/api' : ''},\n                changeOrigin: true\n            }\n        },\n    }\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"babel-polyfill"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-polyfill"}},[this._v("#")]),this._v(" babel-polyfill")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('npm install babel-polyfill\n// 在文件主入口\nimport "babel-polyfill"\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("npm install babel-polyfill\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webpack.config.js")]),t._v("\nentry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-polyfill"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/main.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.js$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    include"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/node_modules/element-ui/src'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/node_modules/element-ui/packages'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node_modules/webpack-dev-server/client'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化"}},[this._v("#")]),this._v(" 优化")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"优化-webpack-在命令行中的显示日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化-webpack-在命令行中的显示日志"}},[this._v("#")]),this._v(" 优化 webpack 在命令行中的显示日志")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("webpack 内置 stat 配置")]),this._v(" "),s("li",[this._v("friendly-errors-webpack-plugin 插件")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'errors-only'")]),t._v("\n\nnone\nOnly output when errors happen\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'errors-warnings'")]),t._v("\n\nnone\nOnly output errors and warnings happen\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'minimal'")]),t._v("\n\nnone\nOnly output when errors or "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("compilation")]),t._v(" happen\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'none'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\nOutput nothing\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'normal'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nStandard output\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'verbose'")]),t._v("\n\nnone\nOutput everything\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("npm install friendly-errors-webpack-plugin -D\n")])])])}],!1,null,null,null);s.default=n.exports}}]);