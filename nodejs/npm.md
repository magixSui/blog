###Welcome to use MarkDown

## 基本使用

### 切换 npm 源
```
npm config set registry https://registry.npm.taobao.org
npm config set registry http://registry.npmjs.org
```

### 查看当前源
```
npm config get registry
```

## yarn

### 查看源
yarn config get registry

### 切换源
```
yarn config set registry https://registry.npm.taobao.org
yarn config set registry https://registry.yarnpkg.com
```

## npm 安装 github 私有项目
```
npm install https://github.com/front-frame/consolidate.js.git
npm install git@github.com:front-frame/consolidate.js.git
```
package.json
```json
{
    "consolidate": "git+https://github.com/front-frame/consolidate.js.git"
}
```
