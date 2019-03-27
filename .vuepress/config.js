module.exports = {
  base: '/blog/',
  title: 'MAGIX',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: '博客', link: '/javascript/' },
      { text: 'Github', link: 'https://github.com/magicxin' }
    ],sidebar: [
//    ['/javascript/', '介绍'],
      {
        title: 'javascript',
        collapsable: true,
        children: [
          ['../javascript/', 'javascript 简述'],
          ['../javascript/understand-script.md', '搞清 <script>'],
          ['../javascript/syntax.md', 'javascript 语法'],
          ['../javascript/es6.md', 'es6 语法'],
          ['../javascript/analysis.md', '内存泄漏与性能分析'],
          ['../javascript/defineProperty.md', '快速弄懂 defineProperty'],
          ['../javascript/promise.md', '实现一个promise'],
          ['../javascript/es6-promise.md', 'es6-promise'],
        ]
      },
      {
        title: 'nodejs',
        collapsable: true,
        children: [
          ['../nodejs/', '简述'],
          ['../nodejs/schema-design.md', 'schema 设计'],
          ['../nodejs/design.md', ' 解决方案 '],
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
        ]
      },
      {
        title: 'linux',
        collapsable: true,
        children: [
          ['../linux/command.md', 'linux 操作'],
        ]
      },
      {
        title: 'vue 源码学习',
        collapsable: true,
        children: [
          ['../vue-resourse/', '介绍'],
          ['../vue-resourse/config.md', '全局配置'],
        ]
      },
      {
        title: '系统架构设计师',
        collapsable: true,
        children: [
          ['../system-architect/operating-system', '操作系统'],
          ['../system-architect/database', '数据库'],
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