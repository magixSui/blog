# 名词

## 计算机

### 谓词函数
谓词函数是一个判断式，一个返回bool值的函数或者仿函数。
```javascript
// @flow
export function isUndef (v: any): boolean %checks {
  return v === undefined || v === null
}
```

## 基础
### isFinite()
是否有限

### Math.floor()
返回整数值

### [object xxx]
Object.prototype.toString.call()

### JSON.stringify()
JSON 接收三个参数，第一个是必要参数，也是我日常使用最频繁的。第二个参数接收一个函数或数组，函数有两个参数，分别是 key 和 value ，可以通过函数改变每一个属性的值；数组内指定的属性值会被修改。第三个参数接收一个数字，代表缩进，美化输出。
```javascript
JSON.stringify({a:1,b:{c:1,d:1}},function(key,value) {
    console.log(key)
    console.log(value)
    return value
})

a
1
b
1
c
1
d
1
```
:::tip
如果想修改某个属性值，必须为函数返回value，因为会递归调用对象的 replacer 函数。
:::
[参考1](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
[参考2])(https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON)
