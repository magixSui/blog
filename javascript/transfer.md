# 转换放法

## toString() toLocalString() 与 valueOf()
每个对象都有一个 toString() 方法，当该对象被表示为一个文本值时，或者一个对象以预期的字符串方式引用时自动调用。
```javascript
// 也被称作隐式类型转换
var a = 1 + '2' // "12"
null + '' // "null"
```

## 不同数据类型下的表现

### Null Undefined
因为 toString() 是 Object 对象方法，null 指向空，内存中也没有生成任何对象。
```javascript
null.toString() // VM29413:1 Uncaught TypeError: Cannot read property 'toString' 
                // of null at <anonymous>:1:6

```
:::tip
但是 nullable（比如 number?） 是可以使用 toString() 的，因为虽然可以是 null ，但实际上此时的 null 是有类型的，只不过值是空。
强制类型转换 String() 兼容 Null 和 Undefined ，其余的转换结果是相同的。
:::
undefined 和 null 原理是一样的。

### String
字符串在使用 toString() 没有任何问题，因为返回的就是它本身的值。

### Number
```javascript
1.toString() // Uncaught SyntaxError: Invalid or unexpected token
1 .toString() // "1"
1..toString() // "1"
(1).toString() // "1"
```
对于 1 来说，javascript 引擎无法判断这里的 `.` 是 float 型的 `.` 还是对象的操作符 `.` 。1 （空格）和 `()` 运算符效果相似，他们都会
返回表达式的值，然后会被包装成为 Number 类，Number 类重写了 Object 的 toString 方法。对于 1.. ， javascript 的 float 类型允许存在
 `1.` 这种写法，这样就可以判断出第二个 `.` 一定是对象的操作符 `.`。
 
### Boolean
```javascript
true.toString() // tue
```
javascript 引擎可以直接识别出 `true`、`false`，并转换为包装类型 `Boolean`，Boolean 类重写了 Object 的 toString 方法。
### Object

