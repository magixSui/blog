
# 开发模式

开发模式使用了 [execa](https://www.npmjs.com/package/execa) 这个插件，他可以开启进程执行命令。 “Think of this as a mix of child_process.execFile() and child_process.spawn().” 其实他是二者的混合，但是无需考虑运行平台。
也就是说，执行 `rollup -wc`，用 execa 的写法就是：
```javascript
execa('rollup', ['-wc']);
```
:::tip
确保已经创建了 rollup.config.js
:::

## 命令行
使用过 rollup 已经知道 `-w` `-c` 分别是 `--watch` 、 `--config`。
`--environment` 是 node 对于 `process.env` 的参数配置。可以通过 `process.env` 来读取配置的环境变量。

## 插件
### minimist
```javascript
const argv = require('minimist');
argv(args, opt = {});
argv._ // 包含所有没有关联选项的 args，其他的配置会以键值对存储。例如：
node dev.js  -x 3 -y 4 -n5 -abc --beep=boop foo bar baz
argv = { _: [ 'foo', 'bar', 'baz' ],
  x: 3,
  y: 4,
  n: 5,
  a: true,
  b: true,
  c: true,
  beep: 'boop' }
// -- 的配置会存放在末尾，- 的配置会默认匹配后一项，如果连在一起会设置为 true 如 -abc。如不满足需求可以加入配置。

```

### execa

## node
### 获取目录下的文件名称
```javascript
fs.readdirSync('packages') // path, opt
// ==> [ 'aaa.txt', 'compiler-core' ] 
```

### 判断是否是文件夹
isDirectory

### 获取路径名称最后一级
path.basename