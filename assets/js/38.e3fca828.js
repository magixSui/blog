(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{204:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("任何语言都有一套自己的语法，并且一系列的语法都很类似，只是在细节上有出入，掌握语法使阅读源码及使用高阶技巧事半功倍。")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("javascript 的变量是松散类型的，也就是说，定义的变量可以保存任何类型的数据。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),a("p",[t._v("也可以连接定义多个变量")]),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),a("p",[t._v("javascript 使用 IEEE754 浮点计数。")]),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("整数也可以用八进制、十六进制表示,但是八进制在严格模式下无效。")]),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),a("p",[t._v("不要使用浮点数进行校验")]),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),a("p",[t._v("parseInt 首先忽略空格。")]),t._v(" "),t._m(27),a("p",[t._v("然后会验证是否以数字开头,如果是数字开头，会解析遇到非数字之前的字符串。")]),t._v(" "),t._m(28),a("p",[t._v("另外，parseInt 也可以识别八进制和十六进制。")]),t._v(" "),t._m(29),t._m(30),t._v(" "),a("p",[t._v("所以为了避免这种困惑，可以加入第二个参数。")]),t._v(" "),t._m(31),t._m(32),t._v(" "),a("p",[t._v("parseFloat 转换规则与 parseInt 类似。区别是：")]),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),a("p",[t._v("ECMAScript 中的字符串是不可变的，也就是说，字符串一旦创建，它们的值就不能改变。")]),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),a("img",{attrs:{src:t.$withBase("/javascript/charobj.png"),alt:"charobj"}}),t._v(" "),a("p",[t._v("字符字面量的长度是 1 。")]),t._v(" "),t._m(37),t._v(" "),a("p",[t._v("字符串转换可以使用以下方式")]),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),a("p",[t._v("javascript 中的对象是一组数据和功能的集合。它是一种引用类型。")]),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),a("p",[t._v("前置：变量的值在求值前改变\n后置：变量的值在求值后改变")]),t._v(" "),t._m(45),t._m(46),t._v(" "),a("p",[t._v("ECMAscript 以 IEEE-754 64位存储数值，之前已经了解了这种方式存储对浮点数造成的计算影响。javascript 并不能直接操作 64 位的值，所以\n要先将 64 位转换为 32 位，在进行计算。其中 31 位表示数值，一位表示符号。")]),t._v(" "),t._m(47),t._v(" "),t._m(48),t._v(" "),t._m(49),t._v(" "),a("p",[t._v("按位非就是执行数值二进制的反码。")]),t._v(" "),t._m(50),t._v(" "),t._m(51),t._v(" "),a("p",[t._v("按位与就是将两数的数位对其，然后根据 & 的规则执行每一位。")]),t._v(" "),t._m(52),t._v(" "),a("p",[t._v("按位与就是将两数的数位对其，然后根据 | 的规则执行每一位。")]),t._v(" "),t._m(53),t._v(" "),a("p",[t._v("按位异或就是将两数的数位对其，然后根据 ^ 的规则执行每一位。")]),t._v(" "),t._m(54),t._v(" "),a("p",[t._v("为了避免异常而采取判断")]),t._v(" "),t._m(55)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"javascript-语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-语法"}},[this._v("#")]),this._v(" javascript 语法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[this._v("#")]),this._v(" 变量")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"定义变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义变量"}},[this._v("#")]),this._v(" 定义变量")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("var")]),this._v(" message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("// 会保存为 undefind")]),this._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用 "),s("code",[this._v("var")]),this._v("定义的变量将成为定义该变量作用域中的局部变量。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("testContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Uncaught ReferenceError: message is not defined")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("如果没有使用 "),a("code",[t._v("var")]),t._v("定义而直接赋值，在函数执行后，将创建一个全局变量。需要知道结果但是不建议这样做。\n并且在严格模式下，也会抛出错误。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"use strict"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("testContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("testContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// hello")]),t._v("\n")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[this._v("#")]),this._v(" 数据类型")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("javascript 一共有六中数据类型，其中五种基本数据类型  "),a("code",[t._v("Undefined")]),t._v(" , "),a("code",[t._v("Null")]),t._v(" , "),a("code",[t._v("Boolean")]),t._v(" , "),a("code",[t._v("String")]),t._v(" , "),a("code",[t._v("Number")]),t._v(" ,\n一种复杂数据类型 "),a("code",[t._v("Object")]),t._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"typeof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typeof"}},[this._v("#")]),this._v(" typeof")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("监测数据类型 "),s("code",[this._v("typeof")]),this._v(" 监测出的结果并不是和数据类型一一对应。并且在 es6 以后，这个操作并不是完全安全的了。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("undefined")]),t._v(" "),a("li",[t._v("boolean")]),t._v(" "),a("li",[t._v("string")]),t._v(" "),a("li",[t._v("number")]),t._v(" "),a("li",[t._v("object")]),t._v(" "),a("li",[t._v("function\n其中需要单独记忆几个难以理解的返回")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// object")]),t._v("\n监测未定义变量也不会报错\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" age "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"number"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#number"}},[this._v("#")]),this._v(" Number")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"整数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#整数"}},[this._v("#")]),this._v(" 整数")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("070")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x038")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"浮点数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浮点数"}},[this._v("#")]),this._v(" 浮点数")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" floatNum3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 有效，但不推荐")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" floatNum1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 小数点后面没有数字——解析为 1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" floatNum2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 整数——解析为 10")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" floatNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.125e7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等于 31250000")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"浮点计算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浮点计算"}},[this._v("#")]),this._v(" 浮点计算")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"常量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常量"}},[this._v("#")]),this._v(" 常量")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("Number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MIN_VALUE")]),t._v("\nNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAX_VALUE")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("Infinity")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("Infinity")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"number-转换规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#number-转换规则"}},[this._v("#")]),this._v(" Number 转换规则")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("摘自JavaScript 高级程序设计。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("如果是 Boolean ， 转换为 0 或 1 。")]),t._v(" "),a("li",[t._v("如果是数值，传入传出。")]),t._v(" "),a("li",[t._v("null , 0 。")]),t._v(" "),a("li",[t._v("undefined , NaN 。")]),t._v(" "),a("li",[t._v("如果是字符串，遵循下列规则：\n"),a("ul",[a("li",[t._v('如果字符串中只包含数字（包括前面带正号或负号的情况），则将其转换为十进制数值，即"1"\n会变成 1，"123"会变成 123，而"011"会变成 11（注意：前导的零被忽略了）；')]),t._v(" "),a("li",[t._v('如果字符串中包含有效的浮点格式，如"1.1"，则将其转换为对应的浮点数值（同样，也会忽\n略前导零）；')]),t._v(" "),a("li",[t._v('如果字符串中包含有效的十六进制格式，例如"0xf"，则将其转换为相同大小的十进制整\n数值；')]),t._v(" "),a("li",[t._v("如果字符串是空的（不包含任何字符），则将其转换为 0；")]),t._v(" "),a("li",[t._v("如果字符串中包含除上述格式之外的字符，则将其转换为 NaN。")])])]),t._v(" "),a("li",[t._v("如果是对象，则调用对象的 valueOf()方法，然后依照前面的规则转换返回的值。如果转换\n的结果是 NaN，则调用对象的 toString()方法，然后再次依照前面的规则转换返回的字符\n串值。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"parseint-转换规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parseint-转换规则"}},[this._v("#")]),this._v(" parseInt 转换规则")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" 2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2asdasd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"070"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 70")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("070")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 56")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0xf"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("JavaScript 高级程序设计中")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"070"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 56")]),t._v("\n")])])]),a("p",[t._v("在 es3 中才有效，es5 中会得到 70，尽可能不要使用八进制。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"070"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 56 代表以八进制解析")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"parsefloat-转换规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parsefloat-转换规则"}},[this._v("#")]),this._v(" parseFloat 转换规则")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("忽略前导 0 。")]),this._v(" "),s("li",[this._v("第一个小数点有效，之后的就无效了。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"string-类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string-类型"}},[this._v("#")]),this._v(" String 类型")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"字符字面量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符字面量"}},[this._v("#")]),this._v(" 字符字面量")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("摘自JavaScript 高级程序设计。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"字符串转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符串转换"}},[this._v("#")]),this._v(" 字符串转换")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("+ 操作符")]),this._v(" "),s("li",[this._v("String() 函数")]),this._v(" "),s("li",[this._v("toString() 方法")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("只有 "),a("code",[t._v("null")]),t._v(" 、 "),a("code",[t._v("undefined")]),t._v(" 没有 "),a("code",[t._v("toString()")]),t._v(" 方法。"),a("code",[t._v("String()")]),t._v(" 函数的规则：如果有 "),a("code",[t._v("toString()")]),t._v(" 方法，使用；如果是 "),a("code",[t._v("null")]),t._v("，\n返回 "),a("code",[t._v("null")]),t._v("；如果是  "),a("code",[t._v("undefined")]),t._v(" 返回 "),a("code",[t._v("undefined")]),t._v(" 。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"object-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-对象"}},[this._v("#")]),this._v(" Object 对象")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"实例方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例方法"}},[this._v("#")]),this._v(" 实例方法")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("constructor")]),t._v(" "),a("li",[t._v("hasOwnProperty(propertyName)")]),t._v(" "),a("li",[t._v("isPropertyOf(object)")]),t._v(" "),a("li",[t._v("propertyIsEnumberable(propertyName)")]),t._v(" "),a("li",[t._v("toLocalString()")]),t._v(" "),a("li",[t._v("toString()")]),t._v(" "),a("li",[t._v("valueOf()")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作符"}},[this._v("#")]),this._v(" 操作符")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"一元操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一元操作符"}},[this._v("#")]),this._v(" 一元操作符")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// b === 1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// d === 0")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"位操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#位操作符"}},[this._v("#")]),this._v(" 位操作符")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("二进制补码")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("求数值绝对值的二进制码")]),this._v(" "),s("li",[this._v("求二进制反码")]),this._v(" "),s("li",[this._v("加 1\nECMAscript 由于操作时需要转换 64 位数，产生了一个问题，在转换 NaN 及 Infinity 时会被当做 0 处理。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"按位非-（-）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按位非-（-）"}},[this._v("#")]),this._v(" 按位非 （~）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[s("code",[this._v("~num")]),this._v(" 的结果就是数值的负数减 1 。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"按位与（-）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按位与（-）"}},[this._v("#")]),this._v(" 按位与（&）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"按位或（-）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按位或（-）"}},[this._v("#")]),this._v(" 按位或（|）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"按位异或（-）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按位异或（-）"}},[this._v("#")]),this._v(" 按位异或（^）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"防卫代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防卫代码"}},[this._v("#")]),this._v(" 防卫代码")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("function f (a, b, c, d, e) { return a ? b * c : d * e; }\n")])])])}],!1,null,null,null);s.default=n.exports}}]);