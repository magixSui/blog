(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{196:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"api-进阶"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-进阶","aria-hidden":"true"}},[t._v("#")]),t._v(" api 进阶")]),t._v(" "),s("p",[t._v("在 api 的使用中，经常会忽略一些细节，此篇会记录那些我并没有以好的方式使用、没有完全理解的 api。")]),t._v(" "),s("h2",{attrs:{id:"object-create"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-create","aria-hidden":"true"}},[t._v("#")]),t._v(" Object.create")]),t._v(" "),s("p",[t._v("Object.create 创建一个新的对象，他使用一个已经存在的对象作为原型。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  isHuman"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" me "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nme"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isHuman "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("参数与")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("是否必填")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("proto")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("true")])]),t._v(" "),s("tr",[s("td",[t._v("propertiesObject")]),t._v(" "),s("td",[t._v("properties")]),t._v(" "),s("td",[t._v("false")])])])]),t._v(" "),s("p",[t._v("propertiesObject 的参数对应 Object。defineProperties 的第二个参数，代表创建对象的可枚举属性，而不是原型属性。")]),t._v(" "),s("h2",{attrs:{id:"string-prototype-replace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string-prototype-replace","aria-hidden":"true"}},[t._v("#")]),t._v(" String.prototype.replace")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("str.replace(regexp|substr, newSubStr|function)")])]),t._v(" "),s("p",[t._v("当第二个参数传入一个函数时，函数会直接执行，函数的返回值会替换匹配到的结果。当第一个参数是正则表达式时，并且是全局匹配模式，那么函数会执行多次。\n如果正则中含有括号匹配，那么相应的函数内会增加括号对应的参数，具体如下：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果匹配模式是：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\\a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\\b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replacer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("match"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("p1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("p2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ofsset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其中 match 是匹配的字符串，p1 是第一个括号内的匹配，p2 ... offset 是子字符串在原字符串中的偏移量（也就是原来的 index 值），string")]),t._v("\n是原字符串。\n")])])]),s("h2",{attrs:{id:"转换方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 转换方法")]),t._v(" "),s("h3",{attrs:{id:"tostring-tolocalstring-与-valueof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tostring-tolocalstring-与-valueof","aria-hidden":"true"}},[t._v("#")]),t._v(" toString() toLocalString() 与 valueOf()")]),t._v(" "),s("p",[t._v("每个对象都有一个 toString() 方法，当该对象被表示为一个文本值时，或者一个对象以预期的字符串方式引用时自动调用。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 也被称作隐式类型转换")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "12"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "null"')]),t._v("\n")])])]),s("h3",{attrs:{id:"不同数据类型下的表现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不同数据类型下的表现","aria-hidden":"true"}},[t._v("#")]),t._v(" 不同数据类型下的表现")]),t._v(" "),s("h3",{attrs:{id:"null-undefined"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#null-undefined","aria-hidden":"true"}},[t._v("#")]),t._v(" Null Undefined")]),t._v(" "),s("p",[t._v("因为 toString() 是 Object 对象方法，null 指向空，内存中也没有生成任何对象。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// VM29413:1 Uncaught TypeError: Cannot read property 'toString' ")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// of null at <anonymous>:1:6")]),t._v("\n\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("但是 nullable（比如 number?） 是可以使用 toString() 的，因为虽然可以是 null ，但实际上此时的 null 是有类型的，只不过值是空。\n强制类型转换 String() 兼容 Null 和 Undefined ，其余的转换结果是相同的。")])]),t._v(" "),s("p",[t._v("undefined 和 null 原理是一样的。")]),t._v(" "),s("h3",{attrs:{id:"string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string","aria-hidden":"true"}},[t._v("#")]),t._v(" String")]),t._v(" "),s("p",[t._v("字符串在使用 toString() 没有任何问题，因为返回的就是它本身的值。")]),t._v(" "),s("h3",{attrs:{id:"number"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#number","aria-hidden":"true"}},[t._v("#")]),t._v(" Number")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Uncaught SyntaxError: Invalid or unexpected token")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "1"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "1"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "1"')]),t._v("\n")])])]),s("p",[t._v("对于 1 来说，javascript 引擎无法判断这里的 "),s("code",[t._v(".")]),t._v(" 是 float 型的 "),s("code",[t._v(".")]),t._v(" 还是对象的操作符 "),s("code",[t._v(".")]),t._v(" 。1 （空格）和 "),s("code",[t._v("()")]),t._v(" 运算符效果相似，他们都会\n返回表达式的值，然后会被包装成为 Number 类，Number 类重写了 Object 的 toString 方法。对于 1.. ， javascript 的 float 类型允许存在\n"),s("code",[t._v("1.")]),t._v(" 这种写法，这样就可以判断出第二个 "),s("code",[t._v(".")]),t._v(" 一定是对象的操作符 "),s("code",[t._v(".")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"boolean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#boolean","aria-hidden":"true"}},[t._v("#")]),t._v(" Boolean")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// tue")]),t._v("\n")])])]),s("p",[t._v("javascript 引擎可以直接识别出 "),s("code",[t._v("true")]),t._v("、"),s("code",[t._v("false")]),t._v("，并转换为包装类型 "),s("code",[t._v("Boolean")]),t._v("，Boolean 类重写了 Object 的 toString 方法。")]),t._v(" "),s("h3",{attrs:{id:"object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object","aria-hidden":"true"}},[t._v("#")]),t._v(" Object")]),t._v(" "),s("p",[t._v("...")]),t._v(" "),s("h2",{attrs:{id:"foreach"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#foreach","aria-hidden":"true"}},[t._v("#")]),t._v(" forEach")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" thisArg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"callback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#callback","aria-hidden":"true"}},[t._v("#")]),t._v(" callback")]),t._v(" "),s("p",[t._v("为数组中每个元素执行的函数，该函数接收三个参数：")]),t._v(" "),s("h3",{attrs:{id:"currentvalue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#currentvalue","aria-hidden":"true"}},[t._v("#")]),t._v(" currentValue")]),t._v(" "),s("p",[t._v("数组中正在处理的当前元素。")]),t._v(" "),s("h3",{attrs:{id:"index可选"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#index可选","aria-hidden":"true"}},[t._v("#")]),t._v(" index可选")]),t._v(" "),s("p",[t._v("数组中正在处理的当前元素的索引。")]),t._v(" "),s("h3",{attrs:{id:"array可选"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#array可选","aria-hidden":"true"}},[t._v("#")]),t._v(" array可选")]),t._v(" "),s("p",[t._v("forEach() 方法正在操作的数组。")]),t._v(" "),s("h3",{attrs:{id:"thisarg可选"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thisarg可选","aria-hidden":"true"}},[t._v("#")]),t._v(" thisArg可选")]),t._v(" "),s("p",[t._v("可选参数。当执行回调函数时用作 this 的值(参考对象)。")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("callback 方法可以使用箭头函数，不改变 this 指向。后两个不常用的参数，array 就是当前遍历的数组 （===），而最后的 thisArg可以改变当前对象。\n但是一单使用箭头函数，第三个参数就会失效。")])]),t._v(" "),s("h3",{attrs:{id:"密集数组和稀疏数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#密集数组和稀疏数组","aria-hidden":"true"}},[t._v("#")]),t._v(" 密集数组和稀疏数组")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 并不会执行")]),t._v("\narr1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\narr2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("创建数组，Array() 和 new Array() 是一样的。（Ecmascript 标准）\nWhen Array is called as a function rather than as a constructor, it creates and initialises a new Array object.\nThus the function call Array(…) is equivalent to the object creation expression new Array(…) with the same arguments.")])]),t._v(" "),s("p",[t._v("forEach 会忽略稀疏数组中的空项（已删除或未初始化）。")]),t._v(" "),s("h3",{attrs:{id:"跳出循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跳出循环","aria-hidden":"true"}},[t._v("#")]),t._v(" 跳出循环")]),t._v(" "),s("p",[t._v("forEach 不能跳出循环，除非抛出一个异常。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'d'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'e'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\narr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"已访问的元素在迭代时被删除了"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#已访问的元素在迭代时被删除了","aria-hidden":"true"}},[t._v("#")]),t._v(" 已访问的元素在迭代时被删除了")]),t._v(" "),s("p",[t._v("由于执行到 name === 'b' 时，第一项被删除了，这时候每一项会向上平移，在这之后的每一项输出当前的项就提前了一位。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shift")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*0: {name: "a"}\n1: {name: "b"}\n2: {name: "d"}\n3: {name: "e"}*/')]),t._v("\n")])])]),s("h3",{attrs:{id:"一些不解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一些不解","aria-hidden":"true"}},[t._v("#")]),t._v(" 一些不解")]),t._v(" "),s("p",[t._v("forEach 遍历的范围在第一次调用 callback 前就会确定。调用 forEach 后添加到数组中的项不会被 callback 访问到。如果已经存在的值被改变，\n则传递给 callback 的值是 forEach 遍历到他们那一刻的值。已删除的项不会被遍历到。")]),t._v(" "),s("h2",{attrs:{id:"选择器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择器","aria-hidden":"true"}},[t._v("#")]),t._v(" 选择器")]),t._v(" "),s("h3",{attrs:{id:"document​-query​selectorall"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#document​-query​selectorall","aria-hidden":"true"}},[t._v("#")]),t._v(" Document​.query​SelectorAll")]),t._v(" "),s("h2",{attrs:{id:"defineproperty"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defineproperty","aria-hidden":"true"}},[t._v("#")]),t._v(" defineProperty")]),t._v(" "),s("p",[t._v("defineProperty 是 es5 加入的一个对象方法，此方法可以在一个对象上新增一个属性或者修改现有属性，并返回这个对象。")]),t._v(" "),s("h3",{attrs:{id:"属性描述符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性描述符","aria-hidden":"true"}},[t._v("#")]),t._v(" 属性描述符")]),t._v(" "),s("p",[t._v("defineProperty 接收三个参数，obj, prop, descriptor。obj 是想要修改的对象，prop 是想要增加或修改的属性，descriptor\n是"),s("strong",[t._v("属性描述符")]),t._v("。\n属性描述符有两种，数据描述符和访问器描述符。在《javascript高级程序设计第三版》中，把他叫做属性类型。")]),t._v(" "),s("h3",{attrs:{id:"数据描述符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据描述符","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据描述符")]),t._v(" "),s("p",[t._v("这些特性是为了实现 javascript 引擎用的，因此不能通过 javascript 直接访问。")]),t._v(" "),s("ul",[s("li",[t._v("[[Enumerable]] 是否可以for...in...枚举")]),t._v(" "),s("li",[t._v("[[Configurable]] 是否可删除（实际作用效果我觉得大于这个定义）")]),t._v(" "),s("li",[t._v("[[Writable]] 是否可修改 Value")]),t._v(" "),s("li",[t._v("[[Value]] 属性的值")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Richard'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认属性描述符为:Enumerable:true,Configurable:true,Writable:true,Value:'Richard'")]),t._v("\n")])])]),s("p",[t._v("如果使用 defineProperty 创建一个属性，那么所有特性默认是 false ，如果修改一个属性，没有写入的特性默认 true ,如果先设置了\nConfigurable 为 false ，那么之后所有的设置都会失效。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Richard'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fullname'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Configurable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 无效")]),t._v("\nObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fullname'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Configurable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Writable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("想修改默认属性描述符，必须通过 "),s("code",[t._v("Object.defineProperty")]),t._v("。")]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("IE8 实现了definePropery 但是只存在 DOM 中，并且只能使用访问器描述符，所以避免在 IE8 下使用。")])]),t._v(" "),s("p",[t._v("这些特性不一定是自身属性，也有可能来自继承，所以如果想设置默认值，需要冻结 Object.prototype ,或者通过 Object.create(null) 将 "),s("strong",[t._v("proto")]),t._v(" 属性指向 null 。")]),t._v(" "),s("h3",{attrs:{id:"访问器描述符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#访问器描述符","aria-hidden":"true"}},[t._v("#")]),t._v(" 访问器描述符")]),t._v(" "),s("ul",[s("li",[t._v("[[Configurable]]")]),t._v(" "),s("li",[t._v("[[Enumerable]]")]),t._v(" "),s("li",[t._v("[[Get]] 默认值 undefined")]),t._v(" "),s("li",[t._v("[[Set]] 默认值 undefined")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  _name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Richard'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_name\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("newV")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newV\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nperson"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Kame'")]),t._v("\n")])])])])}],!1,null,null,null);a.default=r.exports}}]);