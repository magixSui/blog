# grunt 入门

## 需要做的
确保当前 node 环境及 npm 版本， 安装 grunt-cli。
```
npm i -g grunt-cli
```
- 创建 package.json ,根据需要安装插件
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
```javascript
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
```javascript
grunt.registerTask('default', 'Log some stuff.', function() {
      grunt.log.write('Logging some stuff...').ok();
    }, ['uglify']);
```
:::tip
由于 vue 源码最初使用了 grunt ，大概了解了 grunt 的基础使用， 并没有仔细看文档，所以对于一些 `targets` 比较疑惑。
需要注意的是，在任务中经常会看见一些 `targets` ，这些 target 既不是 grunt 定义的也不是插件定义的，而是自定义任务，当执行的时候会像
这样： `browserify:vender` 。每个 target 会拥有 files 的配置，比如 src 和 dest ，以及插件的配置。这个问题的答案是我无意中在
stakoverflow 中查到的。 https://stackoverflow.com/questions/27712941/using-grunt-browserify-in-gruntfile-js。
:::
## 原理
grunt-cli 是一个脚手架，他可以将 grunt 配置到全局环境变量中，然后依赖于 nodejs 的 require 方式找到不同目录下的 grunt 执行，
达到可以在同一台机器上运行不同版本 grunt 的目的。

Gruntfile.js 应该在根目录并且和 package.json 同一层级，package.json 的项目元数据 （metadata） 会导入到 grunt 配置中。
通过 `grunt.loadNpmTasks` 加载插件，很多常用任务封装成为插件，通过配置 `grunt.initConfig` 使用，通过 `grunt.registerTask`
执行。

## 压缩代码
安装插件 `npm install grunt-contrib-uglify -D`。
加入代码：
```javascript
// 配置插件
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
// 加载插件
grunt.loadNpmTasks('grunt-contrib-uglify');
// 执行任务
grunt.registerTask('default', ['uglify']);
```

## jshint 检查
创建 .jshintrc 配置文件， 安装插件 `npm install grunt-contrib-jshint -D`
```javascript
module.exports = function(grunt) {
    grunt.initConfig({
      jshint: {
        src: ['src/**/*.js'],
        options: {
          jshintrc: "./.jshintrc"
        }
      }
    });
    
    grunt.loadNpmTasks( 'grunt-contrib-jshint' );
    // 默认被执行的任务列表。
    grunt.registerTask('default', ['jshint']);
  
  };
```

## 文件热更新
安装插件 `npm install grunt-contrib-watch -D`，`grunt-contrib-watch` 插件可以监听文件的变更，从而触发执行其他任务。
```javascript
// 监听文件变更，触发 jshint 任务：
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
      jshint: {
        src: ['src/**/*.js'],
        options: {
          jshintrc: "./.jshintrc"
        }
      },
      watch: {
        files: ['src/**/*.js',],
        tasks: ['jshint']
      }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks( 'grunt-contrib-jshint' );
    // 默认被执行的任务列表。
    grunt.registerTask('default',['jshint']);
  
  };
```
## 测试
可以通过两种方式执行测试脚本  `grunt test`
```javascript
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
      mocha: {
        test: {
          src: ['tests/**/*.html'],
          options: {
            run: true,
          },
        },
      },
    });
    grunt.loadNpmTasks( 'grunt-mocha' );
    // 默认被执行的任务列表。
    grunt.registerTask('test',['mocha']);
  };
```
也可以在页面直接运行：
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Getting Started with Component</title>
    <link rel="stylesheet" type="text/css" href="../node_modules/grunt-mocha/node_modules/mocha/mocha.css">
  </head>
  <body>
    <div id="mocha"></div>
    <script src="../node_modules/grunt-mocha/node_modules/mocha/mocha.js"></script>
    <script type="text/javascript" charset="utf-8">
    // Only tests run in real browser, injected script run if options.run == true
    if (navigator.userAgent.indexOf('PhantomJS') < 0) {
      mocha.run();
    }
  </script> 
  </body>
</html>
```
:::warning
grunt-mocha 使用 PhantomJS 运行 html ，而今天 PhantomJS 已经不再适用了。
:::

## 模块打包器 grunt-browserify
```javascript
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
      browserify: {
        build: {
          src: ['src/main.js'],
          dest: 'build/bundle.js',
          options: {
            browserifyOptions: {
              standalone: 'Seed' // name for use module on browser
            }
          }
        }
      }
  });
    grunt.loadNpmTasks('grunt-browserify');
    // 默认被执行的任务列表。
    grunt.registerTask('default',['browserify']);
  };
```
## 补充
grunt 可以创建自定义任务来执行。
```javascript
grunt.registerTask('all',['jshint']);
```
对于多文件任务，可以采取：
```javascript
build: {
  files:[{
    src:[],
    dest:''
  }]
}
```
