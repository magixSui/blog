(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{216:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("使用 centos 7 搭建，搭建前先使用网站"),e("a",{attrs:{href:"https://ipcheck.need.sh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://ipcheck.need.sh/"),e("OutboundLink")],1),t._v("监测时候被禁。\n需要注意的是，国外可以 ping 通，在流量下是可以使用的，但是在 wifi 和 pc 端大概率使用不了。")]),t._v(" "),t._m(1),t._m(2),t._m(3),t._v(" "),e("p",[t._v("有些服务器速度非常慢，慢到会认为搭建失败了，毕竟 ping 通不易，开启 bbr 加速后很可能就正常使用了。")]),t._v(" "),t._m(4),t._m(5),t._v(" "),e("p",[t._v("判断是否生效")]),t._v(" "),t._m(6)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"一键安装-ss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一键安装-ss","aria-hidden":"true"}},[this._v("#")]),this._v(" 一键安装 ss")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("yum install git\ngit clone https://github.com/flyzy2005/ss-fly\nss-fly/ss-fly.sh -i password port\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("启动：/etc/init.d/ss-fly start\n停止：/etc/init.d/ss-fly stop\n重启：/etc/init.d/ss-fly restart\n状态：/etc/init.d/ss-fly status\n查看ss链接：ss-fly/ss-fly.sh -sslink\n修改配置文件：vim /etc/shadowsocks.json\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"开启-bbr-加速"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开启-bbr-加速","aria-hidden":"true"}},[this._v("#")]),this._v(" 开启 bbr 加速")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("ss-fly/ss-fly.sh -bbr\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("安装完成重启生效。"),s("code",[this._v("reboot")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("sysctl net.ipv4.tcp_available_congestion_control\n// net.ipv4.tcp_available_congestion_control = bbr cubic reno\n")])])])}],!1,null,null,null);s.default=n.exports}}]);