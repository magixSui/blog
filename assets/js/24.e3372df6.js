(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{190:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("网页在一开始诞生的时候是纯静态的，是为了方便科学研究人员查看文档、上传论文来使用。")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/front-design/static-page.png")}}),t._v(" "),a("p",[t._v("随后 css 的发布，让网页变得多姿多彩，不再局限于浏览器本身的样子，但是随着网页从学术逐渐面向大众，纯静态的网页\n就暴露出了它的局限性。于是开始出现了动态页面。")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("相信大部分人对这种开发模式都十分熟悉，大名鼎鼎的 MVC 架构甚至沿用至今，无数优秀的框架和语言涌出。此时，开发的结构\n是这样的：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/front-design/servlet.png")}}),t._v(" "),a("p",[t._v("controller 接收 request 请求，将信息分发给 view ，并且可以通过模板引擎渲染 view 来使用 Model 中的数据，此时的开发\n模式主要是由网页开发人员根据原型做出设计图,开发出静态的 html 页面，再由后端人员修改成 jsp 页面，并集成模板。然而这种\n开发模式也存在大量的问题。")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("这样的合作方式显然是不愉快的。")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("不论是由前端编辑 jsp 还是让后端编辑 html 都是很棘手的方式，因此前后分离应运而生。此时前端的概念逐渐产生，前端工程师编写\n单页应用，通过 ajax 的方式与后端进行交互，后端人员不再考虑 view 层，直接渲染前端静态资源。")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/front-design/front-end.png")}}),t._v(" "),a("p",[t._v("现在 view 层和 controller 完全分离了，但是前后端的分工并不明确。后端接收返回的资源是多样的，但是前端人员并不清楚同样的一个\n获取用户信息的接口是以什么样的资源来返回，未知是很痛苦的，因此到目前的阶段，前后端并没有完全分离开，接口调试也引起了分歧。")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("到目前为止，后端的项目架构优化了许多，将整个 view 卸下，而诞生的前端还没有很好的认清当前的位置，除了更新资源以外，还按照着\n静态资源的模式来开发 html ，存储、项目生命周期、路由都没有处理，仍然在利用后台框架的便捷方式，处理路由跳转，存储 session 信息。。。\n随着前端的逐渐发展，大家突然意识到，前端开发人员失去了对前端界面的控制，无法保证静态资源部署以后的功能。无论何时，不可控是非常\n可怕的事。\n前端框架应运而生，框架构建了前端项目完整的生命周期，路由控制，状态管理，完全解除了后台的“控制”，对于前端开发人员，项目变得可控了。\n此外为了从开发阶段到生产阶段的过度，显然存在大量的工作，而这些工作往往是反复、繁琐的，因此工具必不可少，项目构建工具由此产生，\n同时也分离了开发、生产模式，为前端的开发、调试提供了极大的便利。")]),t._v(" "),t._m(9),t._v(" "),a("img",{attrs:{src:t.$withBase("/front-design/follow-point.png")}}),t._v(" "),a("p",[t._v("随着互联网的发展，用户也从一开始的只关注功能逐渐开始对体验更加重视。而此时项目的重心也逐渐向前端偏移，决定数据的往往不是后台架构\n本身，而是用户，或者说界面。相对于稳定的服务端数据资源，大量的需求变更是灾难性的，几乎不可能对传承几十年的架构做大的调整，对此\n的做法往往都是加接口、抽象表。。。导致的结果就是：表面上看起来风平浪静，但是却暗流涌动。可以说重用性几乎为 0 。但是出现这样的结果\n往往是：")]),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("没有设计的垒砖往往是破坏性的，之后的每一块砖都偏离了搭好的中垂线。优秀的后端开发者往往会设计好合理的表结构，不同的场景下只需要将不同的\nmodel 聚合到一起，单独为页面提供数据支持，而初始的架构和表结构，是不会因为页面的改变轻易变动的。目前最好的方式是再分理出 controller 层，\n由前端人员使用 nodejs 控制，这样就完全分离了界面对后端的影响，但是受目前大环境的因素，会使用 nodejs 、拥有前端架构设计能力的人远远不够。\n因此往往是前后端人员配合来模拟 controller 的分离。")]),t._v(" "),t._m(11),t._v(" "),a("p",[t._v('随着移动互联的普及，移动端以及 PC 端对体验越来越重视，分离出来的"前端"也越来越放大，继续使用原有的开发方式，已经有一种 hold 不住的感觉。\n而良好的架构设计，能给设计人员一种掌控全局的感觉。')]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("项目只要开始进行就不可能是一成不变的。因此前期的设计尤为重要，如果房子的地基没有打好，那上层的建筑师技艺再高超，也拯救不了整栋楼。前端架构设计\n中很重要的一环就是模块化。")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/front-design/module.png")}}),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("和面向对象的封装原则类似，模块的封装需要满足以上三点，来保证复用性。一般来说，通用模块分为两种，业务模块和组件。简单来说的化，当你需要反复复制代码，\n那么你可能需要封装一个模块；当你需要反复修改模块的内容时，那么你可能需要拆分一个模块，下面是一个组件的简单案例：")]),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),a("p",[t._v("封装组件的关键在于输入输出，不需要知道组件内部的运行方式，只关心得到的结果，上述组件可以实现两个功能：")]),t._v(" "),t._m(19),t._v(" "),a("p",[t._v("问题：")]),t._v(" "),t._m(20),t._v(" "),a("p",[t._v("作为项目的组件，已经足够了，如果想要在其他项目中继续使用，那就要继续其他的设计了。")]),t._v(" "),t._m(21),t._v(" "),a("p",[t._v("资源分类比较容易理解，就是把项目内公共资源统一管理。比如接口、域名、静态资源路径、错误码、国际化等等。良好的归纳也是架构中必不可少的一环。\n资源分类管理的关键意义在于把所有可维护的资源内容统一称为单例模式，更改后影响全局的变化，避免在更改过程中有不熟悉的地方遗漏。")]),t._v(" "),t._m(22),t._v(" "),a("p",[t._v("状态管理和资源管理有些类似。很多数据需要记录当前的状态或多个状态，如果没有统一的管理，就可能会出现 A 页面变化了，B 页面却没有变化。可以把\n状态管理理解为一个简易的数据库，我们可以从中读取、更新数据。")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),a("p",[t._v("...")]),t._v(" "),t._m(25),t._v(" "),a("p",[t._v("当项目逐渐变得复杂时，将动态页面、数据、业务、组件的拆分就显得尤为重要。如果不进行一定的规划，那么单个页面就会显得非常臃肿，并且多个页面间相互影响\n或各自为政，即使是一个小 bug 的修改也会牵一发而动全身。")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/front-design/bridge.png")}}),t._v(" "),a("p",[t._v("这样每次的修改都是修改一个粒子，并不会影响到其他的逻辑。相对的，抽象出来的公共方法一定要确保函数只做了一件事，这样当这件事的逻辑发生变化，只需要修改\n抽象出来的这个方法就可以了。")]),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),a("p",[t._v("正因为有着种种无法完美实现的方案，但是前端的发展是飞速的，在搭建好一套完整的架构后，可以继续进行多方面的优化，比如之前提到的复杂逻辑维护困难的问题，可\n以引入 typescript 来增强类型，对每一个函数进行约定，在修改的时候不是靠架构的规范程度而是工具的健壮性控制，让异常可见，然后逐渐排出异常。数据和业务逻辑\n也同样可以通过增加 node 中间件来移除页面、组件和业务的耦合。同时也已增加测试模块来保证不破坏其他人的有效代码。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"前端架构设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端架构设计","aria-hidden":"true"}},[this._v("#")]),this._v(" 前端架构设计")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"为什么前端需要架构设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么前端需要架构设计","aria-hidden":"true"}},[this._v("#")]),this._v(" 为什么前端需要架构设计")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"网页的发展史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网页的发展史","aria-hidden":"true"}},[this._v("#")]),this._v(" 网页的发展史")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"后端主导的阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后端主导的阶段","aria-hidden":"true"}},[this._v("#")]),this._v(" 后端主导的阶段")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("网页开发人员不懂业务代码，设计出的文档结构，并不能完全和业务契合。")]),this._v(" "),s("li",[this._v("后端人员不懂 html 和 css ，经常会因为套入模板导致样式错乱。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"前后分离阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前后分离阶段","aria-hidden":"true"}},[this._v("#")]),this._v(" 前后分离阶段")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"restful"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restful","aria-hidden":"true"}},[this._v("#")]),this._v(" RESTFUL")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("由于前后分离的交界处是接口，因此有必要对接口进行规范化，两端都遵循这个规范来处理，而不必和不同的人讨论出不同的解决方案。\n改良传统的返回码 200，规定了多种返回类型，让接口返回类型更准确的表达出错误信息。定位资源使用 http 动词来描述，避免 uri 中\n出现 "),s("code",[this._v("getUser")]),this._v("等方式。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"前端框架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端框架","aria-hidden":"true"}},[this._v("#")]),this._v(" 前端框架")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"关注点的改变"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关注点的改变","aria-hidden":"true"}},[this._v("#")]),this._v(" 关注点的改变")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("前端：这个数据用不了\n后端：你等等我改下 OR 这个是封装在框架内，我改不了")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"怎样设计当前的前端架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怎样设计当前的前端架构","aria-hidden":"true"}},[this._v("#")]),this._v(" 怎样设计当前的前端架构")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("相信很多人都经历过这样的场景:")]),t._v(" "),a("ul",[a("li",[t._v("页面内容复杂，有没有注释，动辄几千行代码，读起来异常费劲。")]),t._v(" "),a("li",[t._v("静态资源迁移、项目移植、接口变更，需要通过全局搜索来更改路径。")]),t._v(" "),a("li",[t._v("人员的信息，在一个页面更新，结果其他的界面没有同步。")]),t._v(" "),a("li",[t._v("修改一处代码，结果牵一发动全身。。。")]),t._v(" "),a("li",[t._v("项目开发完成，项目需求变更，整个变更的模块需要重新开发。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"模块化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块化","aria-hidden":"true"}},[this._v("#")]),this._v(" 模块化")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"模块的封装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块的封装","aria-hidden":"true"}},[this._v("#")]),this._v(" 模块的封装")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("低耦合")]),this._v(" "),s("li",[this._v("高内聚")]),this._v(" "),s("li",[this._v("健壮性")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ma-radio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ificat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(item,index) in column"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":key")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{active:index === active}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("change(item,index)"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("check"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":dataId")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item.id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ item.name }}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" check "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'assets/check.png'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'maRadio'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      column"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Number\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    watch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("active "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        check"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        active"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    methods"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("change")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("active "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'change'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("active"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("必填")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("column")]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("active")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("false")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("方法")]),t._v(" "),a("th",[t._v("参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("change")]),t._v(" "),a("td",[t._v("obj")])]),t._v(" "),a("tr",[a("td",[t._v("input")]),t._v(" "),a("td",[t._v("active")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("更美观的 radio 展现")]),this._v(" "),s("li",[this._v("无需考虑切换逻辑")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("未使用校验工具规范代码 （代码规范）")]),this._v(" "),s("li",[this._v("没有规定传输数组的格式 （健壮性）")]),this._v(" "),s("li",[this._v("没有可选或自定义的图标 （扩展性）")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"资源分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源分类","aria-hidden":"true"}},[this._v("#")]),this._v(" 资源分类")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"状态管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#状态管理","aria-hidden":"true"}},[this._v("#")]),this._v(" 状态管理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"常见的状态管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见的状态管理","aria-hidden":"true"}},[this._v("#")]),this._v(" 常见的状态管理")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("localStorage & sessionStorage")]),t._v(" "),a("li",[t._v("indexedDB & WebSQL")]),t._v(" "),a("li",[t._v("cookies")]),t._v(" "),a("li",[t._v("vuex")]),t._v(" "),a("li",[t._v("window")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"项目拆分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目拆分","aria-hidden":"true"}},[this._v("#")]),this._v(" 项目拆分")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("封装至关重要，如果一个工具或组件的封装抽象度不够，复用性低或者是 bridge 方法做了过多的事，遇到问题都会让你的代码无从下手。另外，业务逻辑的清晰也\n非常关键，如果前端处理了太多复杂的业务逻辑，即使封装的很合理也会给项目的开发带来灾难，这是因为前端需要同时处理显示逻辑组件逻辑和业务逻辑，过于复杂的\n业务逻辑会让这三方面同时变得复杂。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"架构设计的难点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#架构设计的难点","aria-hidden":"true"}},[this._v("#")]),this._v(" 架构设计的难点")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("前端的业务逻辑显示逻辑和组件逻辑息息相关，而页面展现又是需求变更中变化最为明显的一处，因此很只调整页面而不影响到组件和业务几乎不可能。")]),this._v(" "),s("li",[this._v("在 bridge 和 makeData 的封装中，也很难做到完全分离，因此找到最合理的结构需要大量的实践。")]),this._v(" "),s("li",[this._v("js 有着特殊的异步函数和交互事件， 相关的操作也需要特殊注意。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"展望"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#展望","aria-hidden":"true"}},[this._v("#")]),this._v(" 展望")])}],!1,null,null,null);s.default=e.exports}}]);