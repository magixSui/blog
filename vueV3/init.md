# 得到源码后

在下载 [vue-next](https://github.com/vuejs/vue-next) 源码后，在查看源码前我的做法是熟悉整个工程。`package.json` 是前端项目的入口文件：

```javascript
"scripts": {
    "dev": "node scripts/dev.js",
    "build": "node scripts/build.js",
    "size-runtime": "node scripts/build.js runtime-dom -p -f global",
    "size-compiler": "node scripts/build.js compiler-dom -p -f global",
    "size": "yarn size-runtime && yarn size-compiler",
    "lint": "prettier --write --parser typescript \"packages/**/*.ts?(x)\"",
    "test": "jest",
    "test-dts": "node scripts/build.js reactivity runtime-core runtime-dom -t -f esm && tsd"
  }
```

所以了解整个项目需要 8 个步骤：
- 开发模式
- 打包
- 运行时大小
- 编译大小
- 大小
- lint 代码检查
- 测试
- 测试类型