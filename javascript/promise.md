# 基于 promise A+ 实现一个 promise
[promise A+](https://promisesaplus.com/)
[中文](https://malcolmyu.github.io/2015/06/12/Promises-A-Plus/#note-4)
## 开始之前
在实现 Promise 之前，首先要熟悉 Promise Api,如果还没有使用过 Promise,那么请先尝试使用它。
Promise 是 ES2015 一个标准的 javascript 内置对象。主要为了解决丑陋的回调地狱：
```javascript
// 传统回调地狱
  axios.get(path,function(res1) {
  //...
    axios.get(path,function(res2) {
    //...
      axios.get(path,function(res3) {
      //...
      })
    })
  })

// 链式调用
  axios.get(path).then(res1=>{
    //...
  }).then(res2=>{
    //...
  }).then(res3=>{
    //...
  })
```
### properties
- prototype

### Methods
- Promise.all()
- Promise.race()
- Promise.reject()
- Promise.resolve()
- Promise.prototype.catch()
- Promise.prototype.finally()
- Promise.prototype.then()
- Promise.prototype.constructor()

### Syntex
初始化一个 Promise 对象
```javascript
new Promise(executor)
// 将一个异步函数延迟执行
var promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({name:magix});
  }, 300);
});
```
顺序执行
```javascript
  let promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
              name:'magix'
            })
          },1000)
      })
      let promise2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
              name:'ella'
            })
          },1000)
      })
      let promise3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
              name:'matin'
            })
          },1000)
      })
      promise1.then(res=>{
        console.log(res)
        return promise2
      }).then(res=>{
        console.log(res)
        return promise3
      }).then(res=>{
        console.log(res)
      })
```
同步执行
```javascript
Promise.all([promise1,promise2,promise3]).then(res=>{})
.catch(err=>{})
```
## 正式开始
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
还没有创建 then 函数，创建它。
```javascript
MyPromise.prototype.then = function() {
  
}
```
现在不会报错了，但是并不会得到想要的输出，因为实例化的Promise传入了一个参数。
```javascript
// 执行传入的参数
function MyPromise(excutor) {
  excutor()
}
```
excutor 函数作为参数传递时，含有两个参数，分别是 resolve 和 reject，这两个参数分别又是两个函数。
```javascript
// 传入两个匿名函数作为 handle 
excutor(function(value) {},function(reson) {})
```

## 状态和返回值
根据 Promise 规范，开发的 Promise 需要包括三个状态：
- PENDING
- FULFILLED
- REJECTED
其中 FULFILLED 拥有一个不可变的终值，REJECTED 拥有一个不可变的拒因。
```javascript
// 执行传入的参数
var PENDING = void 0
var FULFILLED = 1
var REJECTED = 2

function MyPromise(excutor) {
  this._state = this._result = void 0
  excutor(function(value) {},function(reson) {})
}
```
## 如何执行
现在已经可以实例化  Promise 执行 then 方法了,但是有一个问题，也是 Promise 中最关键的点之一。因为 Promise 包括三个状态
，传进来的异步函数可能处在每一个状态。这个异步函数应该在结束后立即执行，但是在 Promise 内并不知道他何时结束。
```javascript
// 使用 同步方法模拟 PENDING 状态
// 调整 this 指向
excutor((value) => {
    resolve(this,value)
  },(reson) => {})

// 直接执行
MyPromise.prototype.then = function(onfulfilled,onrejected) {
  onfulfilled(this._result)
}  
```

## 问题
但是如果状态是 PENDING ，then 方法执行的时候，onfulfilled 并没有参数，因为 resolve 还没有开始执行。这里涉及到 javascript
线程的问题。

:::tip
在单线程中，事件是以队列的方式执行的。如果两个事件同时发生，那么总会有事件没有按照预想执行。在 javascript 事件中，存在三种执行
方式，顺序执行，微任务，宏任务。

```javascript
// 思考一下执行顺序
setTimeout(()=>{
  console.log(1)
},0)
fun()
console.log(2)
var promise1 = Promise.resolve('resolve')
console.log(3)
function fun() {
  console.log(4)
}
```
:::

继续回到 Promise ，**一个 Promise 的当前状态必须为以下三种状态中的一种：等待态（Pending）、执行态（Fulfilled）和拒绝态（Rejected）。**
根据不同的状态可以设置 resolve 的执行方式。
```javascript
  MyPromise.prototype.then = function(onfulfilled,onrejected) {
  var _state = this._state
    if(_state) {
      onfulfilled(this._result)
    }else {
      subscribe()
    }
  }
  
  function subscribe() {
    
  }
```
:::tip
这里是另一个关键点，在状态为 PENDING 的时候， 建立一个队列，将想要执行的 onfulfilled 加入到队列中，然后当 resolve 方法执行后，通知队列中的
方法。
:::
```javascript
'use strict'

var PENDING = void 0
var FULFILLED = 1
var REJECTED = 2
// 构造函数
function MyPromise(excutor) {
  // 初始化状态和返回值
  this._state = this.result = void 0
  // 初始化订阅者
  this.subscribers = []
}

MyPromise.prototype.then = function(onFulfilled,onRejected) {
  var _state = this._state
  var child = new this.constructor()
  // 如果状态是 fulfilled 或 rejected
  if(_state) {
    asap()
  }else {// 如果状态是 pending
    subscribe()
  }
  // 返回一个promise 保证链式调用
  return child
}

// 订阅
function subscribe() {
  
}

// 发布
function publish() {
  
}

// 尽快执行
function asap() {
  
}

```