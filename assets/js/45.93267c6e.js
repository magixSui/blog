(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{211:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("参考 https://www.linuxbabe.com/desktop-linux/how-to-install-and-use-shadowsocks-command-line-client")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),e("p",[t._v("根据配置文件的位置运行")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),e("p",[t._v("想在 ubuntu google 浏览器上使用 ss 需要同时安装 "),e("a",{attrs:{href:"https://github.com/FelisCatus/SwitchyOmega/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("SwitchyOmega"),e("OutboundLink")],1),t._v(" 插件。\n下载 crx 文件后，如果无法拖拽安装，也可以更改后缀为 zip 压缩后再加载插件。")]),t._v(" "),e("p",[t._v("插件页面")]),t._v(" "),t._m(11),t._m(12),t._v(" "),e("p",[t._v("安装完成后，选择新增情景模式，选择默认项代理服务器。设置为：")]),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),e("p",[t._v("此时点击右上角圆圈，就可以选择模式使用了。")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),e("p",[t._v("增加权限")]),t._v(" "),t._m(21),e("p",[t._v("重启")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"ubuntu-系统下的-ss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-系统下的-ss","aria-hidden":"true"}},[this._v("#")]),this._v(" ubuntu 系统下的 ss")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("sudo apt-get install python-pip\nsudo pip install shadowsocks\n\nvim /usr/local/lib/pythonon2.7/dist-packages/shadowsocks/crypto/openssl.py\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),s("p",[this._v("我使用的版本是2.18.2，安装完成并不能运行，会抛出一个异常，需要"),s("br"),this._v("\n将第52行libcrypto.EVP_CIPHER_CTX_cleanup.argtypes = (c_void_p,)\n改为libcrypto.EVP_CIPHER_CTX_reset.argtypes = (c_void_p,)")]),this._v(" "),s("p",[this._v("再次搜索cleanup（全文件共2处，此处位于111行），将libcrypto.EVP_CIPHER_CTX_cleanup(self._ctx)\n改为libcrypto.EVP_CIPHER_CTX_reset(self._ctx)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"创建配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建配置文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建配置文件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('{\n"server":"11.22.33.44",\n"server_port":50003,\n"local_port":1080,\n"password":"123456",\n"timeout":600,\n"method":"aes-256-cfb"\n}\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"命令运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令运行","aria-hidden":"true"}},[this._v("#")]),this._v(" 命令运行")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("sslocal -c /home/ss.json\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"结果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结果","aria-hidden":"true"}},[this._v("#")]),this._v(" 结果")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("start 127.0.0.1:1080\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"google-switchyomega"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#google-switchyomega","aria-hidden":"true"}},[this._v("#")]),this._v(" google SwitchyOmega")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("chrome://extensions\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("sock5 127.0.0.1 1080\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("应用设置。"),s("br"),this._v("\n进入 auto switch")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("添加规则")]),t._v(" "),e("li",[t._v("按照规则列表匹配请求选择刚才配置好的情景模式")]),t._v(" "),e("li",[t._v("规则列表选择 autoProxy")]),t._v(" "),e("li",[t._v("地址栏 https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt")]),t._v(" "),e("li",[t._v("下载匹配规则")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"后台启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后台启动","aria-hidden":"true"}},[this._v("#")]),this._v(" 后台启动")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("sslocal -c /home/ss/shadowsocks.json -d start\nsslocal -c /home/ss/shadowsocks.json -d stop\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"开机启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开机启动","aria-hidden":"true"}},[this._v("#")]),this._v(" 开机启动")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("进入 "),s("code",[this._v("/etc/rc.local")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("#!/bin/sh -e\n# 这是要执行的命令\nsudo sslocal -c /home/ss/ss.json -d start\nexit 0\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("chmod 755 /etc/rc.local\n")])])])}],!1,null,null,null);s.default=r.exports}}]);