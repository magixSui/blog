# javascript 语法
任何语言都有一套自己的语法，并且一系列的语法都很类似，只是在细节上有出入，掌握语法使阅读源码及使用高阶技巧事半功倍。
## 变量
javascript 的变量是松散类型的，也就是说，定义的变量可以保存任何类型的数据。
### 定义变量

```javascript
var message; // 会保存为 undefind
```
也可以连接定义多个变量
```javascript
var a,b,c;
var d=1,e=2;
```
使用 ` var `定义的变量将成为定义该变量作用域中的局部变量。
```javascript
function testContext() {
  var message = 'hello';
}
console.log(message); // Uncaught ReferenceError: message is not defined
```
::: danger
如果没有使用 ` var `定义而直接赋值，在函数执行后，将创建一个全局变量。需要知道结果但是不建议这样做。
并且在严格模式下，也会抛出错误。
```javascript
"use strict"
function testContext() {
  message = 'hello';
}
testContext();
console.log(message); // hello
```
:::
## 数据类型
javascript 一共有六中数据类型，其中五种基本数据类型  ` Undefined ` , ` Null ` , ` Boolean ` , ` String ` , ` Number ` ,
一种复杂数据类型 ` Object `。
### typeof 
监测数据类型 ` typeof ` 监测出的结果并不是和数据类型一一对应。并且在 es6 以后，这个操作并不是完全安全的了。
- undefined
- boolean
- string
- number
- object
- function
其中需要单独记忆几个难以理解的返回
```javascript
typeof null // object
监测未定义变量也不会报错
typeof age // undefined
```
### Number
javascript 使用 IEEE754 浮点计数。
#### 整数
整数也可以用八进制、十六进制表示,但是八进制在严格模式下无效。
```javascript
070 === 56 === 0x038
```
#### 浮点数
```javascript
var floatNum3 = .1; // 有效，但不推荐
var floatNum1 = 1.; // 小数点后面没有数字——解析为 1
var floatNum2 = 10.0; // 整数——解析为 10
var floatNum = 3.125e7; // 等于 31250000
```
#### 浮点计算
不要使用浮点数进行校验
```javascript
0.1 + 0.2 === 0.3 // false
```
#### 常量
```javascript
Number.MIN_VALUE
Number.MAX_VALUE
Infinity
-Infinity
NaN
```
#### Number 转换规则
> 摘自JavaScript 高级程序设计。
- 如果是 Boolean ， 转换为 0 或 1 。
- 如果是数值，传入传出。
- null , 0 。
- undefined , NaN 。
- 如果是字符串，遵循下列规则：
   - 如果字符串中只包含数字（包括前面带正号或负号的情况），则将其转换为十进制数值，即"1"
会变成 1，"123"会变成 123，而"011"会变成 11（注意：前导的零被忽略了）；
   - 如果字符串中包含有效的浮点格式，如"1.1"，则将其转换为对应的浮点数值（同样，也会忽
略前导零）；
   - 如果字符串中包含有效的十六进制格式，例如"0xf"，则将其转换为相同大小的十进制整
数值；
   - 如果字符串是空的（不包含任何字符），则将其转换为 0；
   - 如果字符串中包含除上述格式之外的字符，则将其转换为 NaN。
- 如果是对象，则调用对象的 valueOf()方法，然后依照前面的规则转换返回的值。如果转换
的结果是 NaN，则调用对象的 toString()方法，然后再次依照前面的规则转换返回的字符
串值。
####  parseInt 转换规则
parseInt 首先忽略空格。
```javascript
parseInt(" 2"); // 2
```
然后会验证是否以数字开头,如果是数字开头，会解析遇到非数字之前的字符串。
```javascript
parseInt("a2"); // NaN
parseInt("2asdasd"); // 2
```
另外，parseInt 也可以识别八进制和十六进制。
```javascript
parseInt("070"); // 70
parseInt(070); // 56
parseInt("0xf"); // 2
```
::: danger
JavaScript 高级程序设计中
```javascript
parseInt("070"); // 56
```
在 es3 中才有效，es5 中会得到 70，尽可能不要使用八进制。
:::
所以为了避免这种困惑，可以加入第二个参数。
```javascript
parseInt("070",8); // 56 代表以八进制解析
```
####  parseFloat 转换规则
parseFloat 转换规则与 parseInt 类似。区别是：
- 忽略前导 0 。
- 第一个小数点有效，之后的就无效了。
### String 类型
ECMAScript 中的字符串是不可变的，也就是说，字符串一旦创建，它们的值就不能改变。
#### 字符字面量
> 摘自JavaScript 高级程序设计。

<img :src="$withBase('/javascript/charobj.png')" alt="charobj">

字符字面量的长度是 1 。
#### 字符串转换
字符串转换可以使用以下方式
- \+ 操作符
- String() 函数
- toString() 方法

只有 ` null ` 、 ` undefined ` 没有 ` toString() ` 方法。` String() ` 函数的规则：如果有 ` toString() ` 方法，使用；如果是 ` null `，
返回 ` null `；如果是  ` undefined ` 返回 ` undefined ` 。
### Object 对象
javascript 中的对象是一组数据和功能的集合。它是一种引用类型。
#### 实例方法
- constructor
- hasOwnProperty(propertyName)
- isPropertyOf(object)
- propertyIsEnumberable(propertyName)
- toLocalString()
- toString()
- valueOf()
### 操作符
#### 一元操作符
前置：变量的值在求值前改变
后置：变量的值在求值后改变
```javascript
var a = 0,b;
b = ++a; // b === 1
var c = 0,d;
d = c++; // d === 0
```
#### 位操作符
ECMAscript 以 IEEE-754 64位存储数值，之前已经了解了这种方式存储对浮点数造成的计算影响。javascript 并不能直接操作 64 位的值，所以
要先将 64 位转换为 32 位，在进行计算。其中 31 位表示数值，一位表示符号。

**二进制补码**
- 求数值绝对值的二进制码
- 求二进制反码
- 加 1
ECMAscript 由于操作时需要转换 64 位数，产生了一个问题，在转换 NaN 及 Infinity 时会被当做 0 处理。
#### 按位非 （~）
按位非就是执行数值二进制的反码。
::: tip
` ~num ` 的结果就是数值的负数减 1 。
:::
#### 按位与（&）
按位与就是将两数的数位对其，然后根据 & 的规则执行每一位。
#### 按位或（|）
按位与就是将两数的数位对其，然后根据 | 的规则执行每一位。
#### 按位异或（^）
按位异或就是将两数的数位对其，然后根据 ^ 的规则执行每一位。
