module.exports = {
  base: '/blog_new/',
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
        ['../javascript/', '序'],
          ['../javascript/preface.md', 'javascript 简述'],
          ['../javascript/understand-script.md', '搞清 <script>'],
          ['../javascript/syntax.md', 'javascript 语法'],
          ['../javascript/es6.md', 'es6 语法'],
          ['../javascript/analysis.md', '内存泄漏与性能分析'],
          ['../javascript/defineProperty.md', '快速弄懂 defineProperty'],
          ['../javascript/promise.md', '实现一个promise'],
          ['../javascript/es6-promise.md', 'es6-promise'],
          ['../javascript/forEach.md', 'forEach'],
          ['../javascript/transfer.md', '转换方法'],
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
        title: '草稿箱',
        collapsable: true,
        children: [
          ['../scratch-paper/import-vue.md', '引入 vue'],
        ]
      },
    ]
  }
}