(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{195:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[t._v("#")]),t._v(" 开始")]),t._v(" "),a("h1",{attrs:{id:"创建服务器-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建服务器-repository"}},[t._v("#")]),t._v(" 创建服务器 repository")]),t._v(" "),a("h2",{attrs:{id:"创建用户组和用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建用户组和用户"}},[t._v("#")]),t._v(" 创建用户组和用户")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ groupadd git\n$ useradd git -g git\n")])])]),a("h2",{attrs:{id:"创建ssh证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建ssh证书"}},[t._v("#")]),t._v(" 创建ssh证书")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cd /home/git/\n$ mkdir .ssh\n$ chmod 755 .ssh\n$ touch .ssh/authorized_keys\n$ chmod 644 .ssh/authorized_keys\n")])])]),a("h2",{attrs:{id:"初始化-git-仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化-git-仓库"}},[t._v("#")]),t._v(" 初始化 git 仓库")]),t._v(" "),a("p",[t._v("因为要生成的是服务器仓库，所以这里使用 bare 命令创建空仓库，好处是会分离 repo 与代码，方便管理。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cd /usr/local/src/\n$ mkdir gitrepo\n$ chown git:git gitrepo/\n$ cd gitrepo\n\n$ git init --bare server.git\nInitialized empty Git repository in /usr/local/src/gitrepo/server.git/\n")])])]),a("p",[t._v("修改仓库的用户")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ chown -R git:git server.git\n")])])]),a("h2",{attrs:{id:"生成客户端秘钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成客户端秘钥"}},[t._v("#")]),t._v(" 生成客户端秘钥")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('ssh-keygen -t rsa -C "email@email.com"\n')])])]),a("p",[t._v("配置生成目录及密码，秘钥的默认路径是 C盘用户目录下的 .ssh 文件夹")]),t._v(" "),a("h2",{attrs:{id:"服务端秘钥设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务端秘钥设置"}},[t._v("#")]),t._v(" 服务端秘钥设置")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd /home/git/.ssh/\nvim authorized_keys\n")])])]),a("p",[t._v("然后将客户端公钥粘贴进来。")])])}],!1,null,null,null);s.default=r.exports}}]);