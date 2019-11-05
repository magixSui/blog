(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{194:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},(function(){var a=this.$createElement;this._self._c;return this._m(0)}),[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"git-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-命令"}},[a._v("#")]),a._v(" git 命令")]),a._v(" "),s("h2",{attrs:{id:"代码迁移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码迁移"}},[a._v("#")]),a._v(" 代码迁移")]),a._v(" "),s("p",[a._v("需要代码迁移时，需要保存历史记录。可以在原项目下执行：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git push --mirror + url\n")])])]),s("h2",{attrs:{id:"创建远端分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建远端分支"}},[a._v("#")]),a._v(" 创建远端分支")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git push origin release/3.0\n")])])]),s("h2",{attrs:{id:"创建分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建分支"}},[a._v("#")]),a._v(" 创建分支")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git branch dev\n")])])]),s("h2",{attrs:{id:"查看分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看分支"}},[a._v("#")]),a._v(" 查看分支")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 本地\ngit branch\n// 远程\ngit branch -r\n")])])]),s("h2",{attrs:{id:"切换分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换分支"}},[a._v("#")]),a._v(" 切换分支")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 本地\ngit checkout dev\n// 远程 实际上是新建一个本地分支，然后拉取远程分支到新建分支上\ngit checkout -b namelocal origin/release\n")])])]),s("p",[a._v("推荐")]),a._v(" "),s("h2",{attrs:{id:"定位到某个节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定位到某个节点"}},[a._v("#")]),a._v(" 定位到某个节点")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git revert commit_id\n")])])]),s("p",[a._v("注意")]),a._v(" "),s("h2",{attrs:{id:"回滚"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回滚"}},[a._v("#")]),a._v(" 回滚")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git reset --hard commit_id\n// 回滚后删除已提交 commit\ngit push origin HEAD --force\n")])])]),s("p",[a._v("不推荐，会删除 commit 历史记录。--hard 定位到 HEAD。")]),a._v(" "),s("h2",{attrs:{id:"全局代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局代理"}},[a._v("#")]),a._v(" 全局代理")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# HTTP 代理以 http:// 开头 ss 代理 socks5://127.0.0.1:1080\ngit config --global http.proxy PROXY_URL\ngit config --global http.proxy PROXY_URL\n")])])]),s("p",[a._v("关闭代理")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git config --global --unset http.proxy\ngit config --global --unset https.proxy\n")])])]),s("h2",{attrs:{id:"合并到主干"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合并到主干"}},[a._v("#")]),a._v(" 合并到主干")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git checkout master \ngit merge --squash  branch\ngit commit \ngit push\n")])])]),s("h2",{attrs:{id:"查看配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看配置"}},[a._v("#")]),a._v(" 查看配置")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git config --list\n")])])]),s("h2",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git config --global credential.helper wincred\ngit credential-manager uninstall\n")])])]),s("h2",{attrs:{id:"上传已存在项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上传已存在项目"}},[a._v("#")]),a._v(" 上传已存在项目")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('git init\ngit add .\ngit commit -m "first commit"\ngit remote add origin https://github.com/xx/xx.git（项目地址）\ngit push -u origin master\n')])])])])}],!1,null,null,null);t.default=r.exports}}]);