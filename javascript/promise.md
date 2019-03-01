# 基于 promise A+ 实现一个 promise
在阅读规范时，可能没有办法一下弄懂所有的约定，以下是我基于实现为目的而逐步理解的过程。
## promise A+
[promise A+](https://promisesaplus.com/)
[中文](https://malcolmyu.github.io/2015/06/12/Promises-A-Plus/#note-4)
## 开始
在实现 Promise 之前，首先要熟悉 Promise Api,如果还没有使用过 Promise,那么请先尝试使用它。
考虑一个基础的场景。有一个后台请求getName，我们需要在请求之后获取名字的值，如果使用 Promise 
来实现这个功能我通常会：
```javascript
// 为了方便，我使用了 setTimeout 来代替接口请求
var getName = function() {
        return new MyPromise((resolve,reject)=>{
          setTimeout(()=>{
            resolve({
              name:'magix'
            })
          },2000)
        })
      }
      getName().then(res=>{
        console.log(res.name)
      })
```
## 创建自己的 Promise
这个时候因为不存在 MyPromise，需要创建它：
```javascript
// 因为这里将 MyPromise 作为构造函数而不是一个普通函数，所以建议采用大写开头
function MyPromise() {

}
```
当然，现在会得到一个错误： `Uncaught TypeError: getName(...).then is not a function`，因为到目前
还没有创建 then 函数，让我来创建它。
```javascript
MyPromise.prototype = {
  then() {
    
  }
}
```
现在不会报错了，但是并不会得到我想要的输出，因为实例化的Promise传入了一个参数。
```javascript
// 执行传入的参数
function MyPromise(excutor) {
  excutor()
}
```
因为 excutor 函数作为参数传递时，含有两个参数，分别是 resolve 和 reject，这两个参数分别又是两个函数，
因此需要继续定义它们。
## state
现在已经可以实例化 Promise 执行 then 等方法了，但是存在一个严重的问题，then 函数会在 resolve 之前执行。

**一个 Promise 的当前状态必须为以下三种状态中的一种：等待态（Pending）、执行态（Fulfilled）和拒绝态（Rejected）。**

依据状态信息，可以在 then 方法中根据当前状态值，判断是否执行回调。
```javascript
var PENDGIN = '0'
var FULFILLED = '1'
var REJECTED = '2'
function MyPromise(excutor) {
  this.state = PENDGIN
}
  then() {
    if(this.state === PENDGIN) {
      
    }if(this.state === FULFILLED) {
      
    }if(this.state === REJECTED) {
      
    }
  }
```

**一个 promise 必须提供一个 then 方法以访问其当前值、终值和据因。**
```javascript
  then(onFulfilled,onRejected) {
    
  }
function onFulfilled(value) {}
function onRejected(value) {}
```
为了让 onFulfilled onRejected 延迟执行，增加一个队列。