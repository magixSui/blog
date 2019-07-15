# api 进阶
在 api 的使用中，经常会忽略一些细节，此篇会记录那些我并没有以好的方式使用、没有完全理解的 api。

## Object.create
Object.create 创建一个新的对象，他使用一个已经存在的对象作为原型。
```javascript
var person = {
  isHuman: true
}

var me = Object.create(person)
me.isHuman // true
```
参数与 | 类型 |  是否必填  
-|-|-
proto | Object | true |
propertiesObject | properties | false |

propertiesObject 的参数对应 Object。defineProperties 的第二个参数，代表创建对象的可枚举属性，而不是原型属性。

## String.prototype.replace
:::tip
str.replace(regexp|substr, newSubStr|function)
:::
当第二个参数传入一个函数时，函数会直接执行，函数的返回值会替换匹配到的结果。当第一个参数是正则表达式时，并且是全局匹配模式，那么函数会执行多次。
如果正则中含有括号匹配，那么相应的函数内会增加括号对应的参数，具体如下：
```javascript
// 如果匹配模式是：
/(\a+)(\b+)/
replacer(match,p1,p2,ofsset,string)
// 其中 match 是匹配的字符串，p1 是第一个括号内的匹配，p2 ... offset 是子字符串在原字符串中的偏移量（也就是原来的 index 值），string
是原字符串。
```

## void
### 代替 undefined
undefined 并不是保留字。在某些老旧的浏览器中，undefined 可以被改写，另外在局部作用域下也可以被改写，另外可以节省几个字节。
```javascript
!function() {
  var undefined = 8
  var a = undefined
  console.log(a) // 8
}()
```

### iife （Immediately Invoked Function Expressions）
void 是实现 iife 的方式之一
```javascript
(function(p){
    // 函数体内容
})(p);

(function(p){
    // 函数体内容
}( p));

!function(p){
    // 函数体内容
}(p)

+function( p){
    // 函数体内容
}(p)

-function(p){
    // 函数体内容
}(p)

~function(p){
    // 函数体内容
}(p)

void function(p){
    // 函数体内容
}(p)
```

### 消除副作用
当使用箭头函数时，可以返回 void 表达式，确保表达式 api 变更时不会影响到使用。
```javascript
// doSomething 更改为返回 true 时不会影响到 button.onclick
button.onclick = () => void doSomething();
```

## 转换方法

### toString() toLocalString() 与 valueOf()
每个对象都有一个 toString() 方法，当该对象被表示为一个文本值时，或者一个对象以预期的字符串方式引用时自动调用。
```javascript
// 也被称作隐式类型转换
var a = 1 + '2' // "12"
null + '' // "null"
```

### 不同数据类型下的表现

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
...

## forEach
```javascript
arr.forEach(callback[, thisArg]);
```
### callback
为数组中每个元素执行的函数，该函数接收三个参数：
### currentValue
数组中正在处理的当前元素。
### index可选
数组中正在处理的当前元素的索引。
### array可选
forEach() 方法正在操作的数组。
### thisArg可选
可选参数。当执行回调函数时用作 this 的值(参考对象)。

:::tip
callback 方法可以使用箭头函数，不改变 this 指向。后两个不常用的参数，array 就是当前遍历的数组 （===），而最后的 thisArg可以改变当前对象。
但是一单使用箭头函数，第三个参数就会失效。 
:::
### 密集数组和稀疏数组
```javascript
let arr1 = new Array(10)
// 并不会执行
arr1.forEach(item=>{
  console.log(item)
})

let arr2 = Array.apply(null, Array(10))
arr2.forEach(item=>{
  console.log(item)
})
```
:::tip 
创建数组，Array() 和 new Array() 是一样的。（Ecmascript 标准）
When Array is called as a function rather than as a constructor, it creates and initialises a new Array object. 
Thus the function call Array(…) is equivalent to the object creation expression new Array(…) with the same arguments.
:::
forEach 会忽略稀疏数组中的空项（已删除或未初始化）。
### 跳出循环
forEach 不能跳出循环，除非抛出一个异常。
```javascript
let arr = [{name:'a'},{name:'b'},{name:'c'},{name:'d'},{name:'e'}]
arr.forEach((item,index,a) => {
        if(item.name === 'a') return
        console.log(item)
      },new Object())
```
### 已访问的元素在迭代时被删除了
由于执行到 name === 'b' 时，第一项被删除了，这时候每一项会向上平移，在这之后的每一项输出当前的项就提前了一位。
```javascript
arr.forEach((item,index,a) => {
        if(item.name === 'b') arr.shift()
        console.log(item);
      },new Object())
/*0: {name: "a"}
1: {name: "b"}
2: {name: "d"}
3: {name: "e"}*/
```
### 一些不解
forEach 遍历的范围在第一次调用 callback 前就会确定。调用 forEach 后添加到数组中的项不会被 callback 访问到。如果已经存在的值被改变，
则传递给 callback 的值是 forEach 遍历到他们那一刻的值。已删除的项不会被遍历到。

## 选择器

### Document​.query​SelectorAll

## defineProperty
defineProperty 是 es5 加入的一个对象方法，此方法可以在一个对象上新增一个属性或者修改现有属性，并返回这个对象。
### 属性描述符
defineProperty 接收三个参数，obj, prop, descriptor。obj 是想要修改的对象，prop 是想要增加或修改的属性，descriptor
是**属性描述符**。
属性描述符有两种，数据描述符和访问器描述符。在《javascript高级程序设计第三版》中，把他叫做属性类型。
### 数据描述符
这些特性是为了实现 javascript 引擎用的，因此不能通过 javascript 直接访问。
- [[Enumerable]] 是否可以for...in...枚举
- [[Configurable]] 是否可删除（实际作用效果我觉得大于这个定义）
- [[Writable]] 是否可修改 Value
- [[Value]] 属性的值
```javascript
var person = {
  name:'Richard'
}
// 默认属性描述符为:Enumerable:true,Configurable:true,Writable:true,Value:'Richard'
```
如果使用 defineProperty 创建一个属性，那么所有特性默认是 false ，如果修改一个属性，没有写入的特性默认 true ,如果先设置了
Configurable 为 false ，那么之后所有的设置都会失效。
```javascript
var person = {
  name:'Richard'
}
Object.defineProperty(person,'fullname',{
  Configurable:false
})
// 无效
Object.defineProperty(person,'fullname',{
  Configurable:true,
  Writable:false
})
```
想修改默认属性描述符，必须通过 ` Object.defineProperty `。
:::warning
IE8 实现了definePropery 但是只存在 DOM 中，并且只能使用访问器描述符，所以避免在 IE8 下使用。 
:::
这些特性不一定是自身属性，也有可能来自继承，所以如果想设置默认值，需要冻结 Object.prototype ,或者通过 Object.create(null) 将 __proto__ 属性指向 null 。
### 访问器描述符
- [[Configurable]]
- [[Enumerable]]
- [[Get]] 默认值 undefined
- [[Set]] 默认值 undefined

```javascript
var person = {
  _name: 'Richard'
}
Object.defineProperty(person,'name',{
  get: function() {
    return this._name
  },
  set: function(newV) {
    this._name = newV
  }
})
person.name = 'Kame'
```

