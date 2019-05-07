# grunt 入门

## 需要做的
确保当前 node 环境及 npm 版本， 安装 grunt-cli。
```
npm i -g grunt-cli
```
- 创建 package.json 
```javascript
// 已安装 grunt-init
grunt-init
// 未安装
npm init
npm install grunt --save-dev
npm install grunt-contrib-jshint --save-dev
npm install grunt-contrib-nodeunit --save-dev
npm install grunt-contrib-uglify --save-dev
```
- 创建 Gruntfile.js / Gruntfile.coffee
```
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify']);

};

```
自定义任务
```
grunt.registerTask('default', 'Log some stuff.', function() {
      grunt.log.write('Logging some stuff...').ok();
    }, ['uglify']);
```

## 原理
grunt-cli 是一个脚手架，他可以将 grunt 配置到全局环境变量中，然后依赖于 nodejs 的 require 方式找到不同目录下的 grunt 执行，
达到可以在同一台机器上运行不同版本 grunt 的目的。

Gruntfile.js 应该在根目录并且和 package.json 同一层级，package.json 的项目元数据 （metadata） 会导入到 grunt 配置中。
通过 `grunt.loadNpmTasks` 加载插件，很多常用任务封装成为插件，通过配置 `grunt.initConfig` 使用，通过 `grunt.registerTask`
执行。