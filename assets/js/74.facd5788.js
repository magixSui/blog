(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{240:function(t,e,n){"use strict";n.r(e);var s=n(0),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("mongodb 的官网文档确实很不错，清晰便捷。"),n("a",{attrs:{href:"https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mongodb"),n("OutboundLink")],1),t._v("\n根据文档的步骤已经完成安装了。启动之后是不能互联网访问的，调试的话可以修改 "),n("code",[t._v("/etc/mongod.conf")]),t._v(" 中的 "),n("code",[t._v("bind_ip = 0.0.0.0 / #默认127.0.0.1 ，无法远程访问")]),t._v("。")]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("无密码的默认库 admin 之前是可以直接通过互联网访问的，不过在 18 年大批的利用漏洞攻击 mongodb 的情况后，robo 取消了默认连接，调试的时候需要\n创建一个账户，然后需要更新到 robo 1.3.1 ，1.2.1 版本是无法访问的。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),n("p",[t._v("然后就可以使用创建的账号密码登录了。")]),t._v(" "),t._m(4),t._v(" "),n("p",[t._v("以上是开发时方便调试的方式，后面会继续深入 auth 方面的安全。")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[this._v("#")]),this._v(" 安装")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"安全"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安全"}},[this._v("#")]),this._v(" 安全")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"创建用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建用户"}},[this._v("#")]),this._v(" 创建用户")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('// admin 库，创建管理员\nuse admin\ndb.createUser(\n  {\n    user: "userName",\n    pwd: "password",\n    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]\n  }\n)\n// 使用库，创建普通用户\nuse test\ndb.createUser(\n  {\n    user: "userName",\n    pwd: "password",\n    roles: [ { role: "readWrite", db: "test" } ]\n  }\n)\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"安全问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安全问题"}},[this._v("#")]),this._v(" 安全问题")])}],!1,null,null,null);e.default=r.exports}}]);