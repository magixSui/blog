# api 进阶
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

## replace 的函数使用
String.prototype.replace
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

## 选择器

### Document​.query​SelectorAll
