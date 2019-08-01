module.exports = {
  base: '/blog/',
  title: 'MAGIX',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: '博客', link: '/javascript/' },
      { text: 'Github', link: 'https://github.com/magicxin' }
    ],
    sidebar: [
      {
        title: 'javascript',
        collapsable: true,
        children: [
          ['../javascript/', '序'],
          // ['../javascript/preface.md', 'javascript 简述'],
          // ['../javascript/syntax.md', 'javascript 语法'],
          // ['../javascript/es6.md', 'es6 语法'],
          // ['../javascript/analysis.md', '内存泄漏与性能分析'],
          // ['../javascript/promise.md', '实现一个promise'],
          // ['../javascript/es6-promise.md', 'es6-promise'],
          ['../javascript/api.md', 'api 进阶'],
          // ['../javascript/imp.md', 'js 通用方法'],
        ]
      },{
        title: 'vue 源码学习',
        collapsable: true,
        children: [
          ['../vue-source/', '介绍'],
      //        ['../vue-source/config.md', '全局配置'],
          ['../vue-source/init.md', '模板动态绑定'],
          ['../vue-source/appendix.md', '附录'],
          ['../vue-source/init0001.md', '事件拦截器绑定'],
        ]
      },
      {
        title: 'vue',
        collapsable: true,
        children: [
          ['../vue/base.md', '基础'],
        ]
      },
      {
        title: 'nodejs',
        collapsable: true,
        children: [
          ['../nodejs/', '简述'],
          ['../nodejs/schema-design.md', 'schema 设计'],
          ['../nodejs/design.md', ' 解决方案 '],
          ['../nodejs/npm.md', '包管理工具'],
          ['../nodejs/command.md', '命令行脚本'],
        ]
      },
      {
        title: 'v8',
        collapsable: true,
        children: [
          ['../chrome/', 'v8 引擎'],
        ]
      },
      {
        title: 'typescript',
        collapsable: true,
        children: [
          ['../typescript/resolve.md', '解决方案'],
        ]
      },
      {
        title: '网络协议',
        collapsable: true,
        children: [
          ['../browser/', '简述'],
          ['../browser/application', '应用层协议'],
          ['../browser/xhr', 'XMLHttpRequest '],
        ]
      },{
        title: 'git',
        collapsable: true,
        children: [
          ['../git/create-git-repo.md', '创建 git 仓库'],
          ['../git/command.md', 'git 操作 '],
        ]
      },
      {
        title: 'three.js',
        collapsable: true,
        children: [
//        ['../three/', '介绍'],
          ['../three/create.md', '安装'],
          ['../three/section1/create-scene.md', '创建场景'],
//        ['../three/section1/shadowsocks.md', 'ss科学'],
//        ['../three/section1/shadowsocksr.md', '一键ssr'],
        ]
      },
      {
        title: '解决方案',
        collapsable: true,
        children: [
//        ['../base-on-requirement/', '介绍'],
          ['../base-on-requirement/autodeploy.md', '基于git自动部署'],
          ['../base-on-requirement/transfer.md', '进制转换'],
          ['../base-on-requirement/SEO.md', '百度搜索优化'],
          ['../base-on-requirement/speech.md', '语音输入'],
          ['../base-on-requirement/ngrok.md', '内网穿透'],
          ['../base-on-requirement/https.md', 'https 腾讯云'],
          ['../base-on-requirement/autodeploy-github.md', 'github自动部署'],
          ['../base-on-requirement/pm2.md', 'pm2 管理 node 项目'],
        ]
      },
      {
        title: 'linux',
        collapsable: true,
        children: [
          ['../linux/command.md', 'linux 操作'],
          ['../linux/setup.md', 'linux 系统'],
          ['../linux/shadowsocks.md', 'linux ss'],
          ['../linux/n-module.md', 'n 版本管理'],
          ['../linux/nvm.md', 'nvm 版本管理'],
        ]
      },
//    {
//      title: 'element 源码学习',
//      collapsable: true,
//      children: [
//        ['../element/start.md', '开始'],
//      ]
//    },
      {
        title: '系统架构设计师',
        collapsable: true,
        children: [
          ['../system-architect/operating-system', '操作系统'],
          ['../system-architect/database', '数据库'],
        ]
      },
      {
        title: '前端架构',
        collapsable: true,
        children: [
          ['../front-design/front-design', '前端架构设计'],
        ]
      },
      {
        title: 'android',
        collapsable: true,
        children: [
          ['../android/create', '入门'],
          ['../android/mainfest', 'mainfest'],
        ]
      },
      {
        title: 'science',
        collapsable: true,
        children: [
          ['../science/bezier', '贝塞尔曲线'],
        ]
      },
      {
        title: '翻译',
        collapsable: true,
        children: [
          ['../translate/ci-concepts.md', '持续集成核心概念'],
          ['../translate/ci-tutorial.md', 'Travis-cli 教程'],
          ['../translate/ci-github-page.md', 'github page 部署'],
          ['../translate/ci-node-project.md', 'node 项目部署'],
        ]
      },
      {
        title: '技术入门',
        collapsable: true,
        children: [
          ['../utils/grunt.md', 'grunt 入门'],
          ['../utils/component.md', 'component 入门'],
          ['../utils/stencil.md', 'stencil 入门'],
          ['../utils/yarn.md', 'yarn 入门'],
          ['../utils/vue-plugin.md', 'webpack vue 插件入门'],
          ['../utils/rollup.md', 'rollup 入门'],
          ['../utils/framemarker.md', 'framemarker 入门'],
          ['../utils/nrm.md', 'nrm 入门'],
          ['../utils/axios.md', 'axios 入门'],
          ['../utils/wx.md', '小程序入门'],
        ]
      },
      {
        title: '草稿箱',
        collapsable: true,
        children: [
          ['../scratch-paper/import-vue.md', '引入 vue'],
        ]
      },
    ]
  }
}