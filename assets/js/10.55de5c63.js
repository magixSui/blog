(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{176:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("在前面我已经简单体验过利用 git-hooks 自己写脚本去实现基本的自动部署以及持续集成，但在一个完整的项目这些基础脚本是远远不够的。\n作为前端开发者 ，那么可能就需要利用工具来代替一些脚本工作了。对个人项目而言， travis-ci 是一个很好的\n持续集成工具，尤其是 github 维护的项目。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("完成这个流程有两个难点， 其一是如何实现 ssh 的免登录； 其二是如何实现虚拟机生成文件后的远程拷贝。")]),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("创建秘钥")]),t._v(" "),t._m(5),e("p",[t._v("添加信任关系")]),t._v(" "),t._m(6),t._m(7),t._v(" "),e("p",[t._v("安装 gem")]),t._v(" "),t._m(8),e("p",[t._v("安装 travis 客户端")]),t._v(" "),t._m(9),e("p",[t._v("登录 travis")]),t._v(" "),t._m(10),e("img",{attrs:{src:t.$withBase("/base-on-requirement/login.png"),alt:"travis-login"}}),t._v(" "),t._m(11),t._v(" "),e("p",[t._v("在项目目录下，执行加密，生成 .enc 文件并写入解密到 .yml 中")]),t._v(" "),t._m(12),t._m(13),t._v(" "),e("p",[t._v("完成以上已经实现了 ssh 的免密登录。接下来需要实现远程拷贝。在 google 了之后我发现远程拷贝其实很简单，有两种常用的方式：")]),t._v(" "),t._m(14),t._v(" "),t._m(15),e("p",[t._v("一份完整的文件命令")]),t._v(" "),t._m(16)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"travis-ci-自动部署进阶"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#travis-ci-自动部署进阶","aria-hidden":"true"}},[this._v("#")]),this._v(" travis-ci 自动部署进阶")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"目的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目的","aria-hidden":"true"}},[this._v("#")]),this._v(" 目的")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("github 项目 manage_system")]),this._v(" "),s("li",[this._v("服务端 server manage_server\n本地 manage_system 项目在 push 之后，可以由 travis-ci 执行测试脚本，然后打包，将打包文件拷贝到服务端项目 manage_server 中，不需要重启。同时如果\n本地 manage_server 项目 push 后，可以由 travis-ci 更新代码并重启。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路","aria-hidden":"true"}},[this._v("#")]),this._v(" 思路")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"ssh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh","aria-hidden":"true"}},[this._v("#")]),this._v(" ssh")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("// -t 秘钥类型  RSA 和 DSA 。-b 秘钥长度，默认 2048 。 -c 备注 -f 指定文件名\n# ssh-keygen -t rsa -b 4096 -C 'build@travis-ci.org' -f ./deploy_rsa\nssh-keygen -t rsa -C \"deploy\" # 会在 ~/.ssh/ 目录下生成 id_rsa 和 -d_rsa.pub\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("// 通过 ssh-copy-id 将公钥写入服务器 ~/.ssh/authorized_keys 中\nssh-copy-id -i deploy_rsa.pub ubuntu@118.24.15.288\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"travis-加密"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#travis-加密","aria-hidden":"true"}},[this._v("#")]),this._v(" travis 加密")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("sudo apt-get install rubygems ruby-dev\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("// 非必须 更换安装源 gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/\nsudo gem install travis\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("travis login --auto // org pro # 需要输入 github 邮箱和密码\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"加密"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加密","aria-hidden":"true"}},[this._v("#")]),this._v(" 加密")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("// --add 自动添加解密方式到 .travis.yml 中。 -r 指定 github 用户及项目\n travis encrypt-file ~/.ssh/id_rsa --add\n# travis encrypt-file deploy_rsa --add -r gituser/project\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),s("p",[this._v("保证目录下存在 .travis.yml 文件，如果是在 git 仓库下使用，不需要指定用户和项目。如果在非仓库下执行，需要指定项目及用户。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("scp")]),this._v(" "),s("li",[this._v("rsync\nscp 是 secure copy的简写，使用他可以方便的进行从本地拷贝到服务器。rsync 是一个工具包，同样也具有远程拷贝的功能。暂时我只\n使用他进行拷贝，不做深入探究。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("scp  -rp -P 22 ./dist/. ubuntu@118.24.15.288:~/magix/\nrsync -az --delete ./dist/* ubuntu@118.24.15.288:~/magix/\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("language: node_js\nnode_js:\n- '10'\nbranches:\n  only:\n  - master\naddons:\n  ssh_known_hosts:\n  - 118.24.15.288\nscript:\n- npm run build\nafter_success:\n- rsync -az --delete ./dist/* ubuntu@118.24.15.288:~/magix/\nbefore_install:\n- openssl aes-256-cbc -K $encrypted_3e18e6b84910_key -iv $encrypted_3e18e6b84910_iv\n  -in id_rsa.enc -out ~/.ssh/id_rsa -d\n- chmod 600 ~/.ssh/id_rsa\n")])])])}],!1,null,null,null);s.default=r.exports}}]);