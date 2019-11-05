(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{207:function(a,t,s){"use strict";s.r(t);var e=s(0),n=Object(e.a)({},(function(){var a=this.$createElement;this._self._c;return this._m(0)}),[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"vue-cli3-安装失败"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli3-安装失败"}},[a._v("#")]),a._v(" vue-cli3 安装失败")]),a._v(" "),s("p",[a._v("最近遇到了一个问题，全局安装 vuecli3 时遇到了一个 access 的问题，stackoverflow 上给出的解决方案是卸载 node 和 npm ，使用\nnvm 等 node 版本工具安装。当然也可以通过更改计算机配置，不过更推荐版本管理工具。"),s("br"),a._v("\n我安装了 n 模块，但是 n 是 npm 包，我先安装了 nodejs 之后才安装 n 。问题就出在这里。")]),a._v(" "),s("h2",{attrs:{id:"彻底卸载-nodejs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#彻底卸载-nodejs"}},[a._v("#")]),a._v(" 彻底卸载 nodejs")]),a._v(" "),s("p",[a._v("想彻底卸载 nodejs 和 npm 也要费点事\n首先通过 apt-get 卸载 nodejs npm （这可能取决你自己的安装方式）")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo apt-get --purge remove nodejs\nsudo apt-get --purge remove npm\n")])])]),s("p",[a._v("然后需要删除文件")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("rm -r /usr/local/bin/npm\nrm -r /usr/local/lib/node_modules\n// 查询\nfind / -name npm\nrm -r /tem/npm*\n")])])]),s("h2",{attrs:{id:"卸载-n-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#卸载-n-模块"}},[a._v("#")]),a._v(" 卸载 n 模块")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm uninstall -g n\n")])])]),s("h2",{attrs:{id:"安装-nvm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-nvm"}},[a._v("#")]),a._v(" 安装 nvm")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo apt-get install curl\ncurl -o- https://raw.githubusercontent.com/creationix/nvm/v0.25.2/install.sh | bash\n")])])]),s("p",[a._v("重启 terminal")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("nvm -v\nnvm install v10.15.3\nnvm use 10.15.3\n")])])]),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),s("p",[a._v("启动的过程中发现 "),s("code",[a._v("system limit for number of files watches")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo gedit /etc/sysctl.conf\n# 增加 fs.inotify.max_user_watches=524288\nsudo sysctl -p\n")])])]),s("p",[a._v("terminal 的每次启动都要执行 nvm use ，可以设置默认 node")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("nvm alias default 10.15.3\n")])])]),s("p",[a._v("apt-get 更新以得到最新的包，否则可能会导致安装的并不是自己想要的，比如 yarn")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("apt-get update\n")])])]),s("h2",{attrs:{id:"服务端-root"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务端-root"}},[a._v("#")]),a._v(" 服务端 root")]),a._v(" "),s("p",[a._v("在配置服务端时，发现安装的 nvm 只能在 user 下使用，不能使用 root 权限开启 80 端口。这是因为 root 下没有对应的 nvm 和 npm 包，root 用户无法识别这个命令。\nhttps://stackoverflow.com/questions/21215059/cant-use-nvm-from-root-or-sudo\n只需要在用户命令行执行：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("n=$(which node)\nn=${n%/bin/node}\nchmod -R 755 $n/bin/*\nsudo cp -r $n/{bin,lib,share} /usr/local\n")])])]),s("p",[a._v("就可以在 root 下拷贝一份。")])])}],!1,null,null,null);t.default=n.exports}}]);