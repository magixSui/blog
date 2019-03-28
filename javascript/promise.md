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
## 执行
现在可以初始化构造函数执行 then 方法了，但是还没有将 callback 传递进来。现在的思路是，通过执行 resolve 方法，
将当前对象 promise得内部属性 _result 赋值为 value,然后执行 then 中的 callback。

```javascript
// 执行传入的参数
function MyPromise(excutor) {
	this._result = void 0
  excutor((value) => {
  	resolve(this,value)
  },(reson) => {})
}

MyPromise.prototype.then = function(onfulfilled,onrejected) {
  onfulfilled(this._result)
}

function resolve(promise,value) {
	promise._result = value
}
```
现在如果传递的是同步的方法，已经得到了想要的结果。但是目的是还想在传递异步方法的时候，使用 then 方法，如果这个时候将
方法改写：将会得到` Uncaught TypeError: Cannot read property 'name' of undefined `。
因思考一下，现在 then 和 resolve 的执行顺序，怎么才能让程序得到想要的结果？
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
## 更改执行队列

```javascript
setTimeout(()=>{
	resolve(this,value)
},0)
```
但是问题又出现了，执行队列是在 then 之后了，但是 callback 却先于 resolve 执行了。所以还要再思考一下，如果 resolve 中的 value
是一篇文章，callback 是订阅文章的人，那么只需要在 then 方法中订阅，等待 resolve 执行成功之后，文章发布在通知订阅者。

重新整理下目前的结构：
```javascript
'use strict'
// 执行传入的参数
var PENDING = void 0
var FULFILLED = 1
var REJECTED = 2
// 执行传入的参数
function MyPromise(excutor) {
	// 初始化当前状态和返回值
	this._state = this._result = void 0
	this._subscribers = []
  initialize(this,excutor)
}

MyPromise.prototype.then = function(onfulfilled,onrejected) {
  if(this._state) {
  	onfulfilled(this._result)
  }else {
  	subscribe()
  }
}

// 初始化函数
function initialize(promise,excutor) {
	excutor((value) => {
			resolve(promise,value)
  },(reson) => {})
}

function resolve(promise,value) {
	promise._state = FULFILLED
	promise._result = value
}

// 尽快执行
function asap() {
	
}

// 发布者
function publish() {
	
}

// 订阅者
function subscribe() {
	
}
```
## 现在思路滤清了，需要将每个方法细节详细的填充完整。先执行构造函数，将 resolve 置入事件队列末尾，执行 then 方法后，状态是 PENDING，
订阅，然后等待 resolve ，执行成功，发布：

```javascript
'use strict'
// 执行传入的参数
var PENDING = void 0
var FULFILLED = 1
var REJECTED = 2
// 执行传入的参数
function MyPromise(excutor) {
	// 初始化当前状态和返回值
	this._state = this._result = void 0
	this._subscribers = []
  initialize(this,excutor)
}

MyPromise.prototype.then = function(onfulfilled,onrejected) {
	var parent = this
  if(this._state) {
  	onfulfilled(this._result)
  }else {
  	subscribe(parent,onfulfilled,onrejected)
  }
}

// 初始化函数
function initialize(promise,excutor) {
	excutor((value) => {
			resolve(promise,value)
  },(reson) => {})
}

function resolve(promise,value) {
	promise._state = FULFILLED
	promise._result = value
	if(promise._subscribers.length>0) {
		asap(promise)
	}
}

// 尽快执行
function asap(promise) {
	setTimeout(()=>{
		publish(promise)
	},0)
}

// 发布者
function publish(promise) {
	promise._subscribers[1](promise._result)
}

// 订阅者
function subscribe(parent,onfulfilled,onrejected) {
	parent._subscribers[0] = parent
	parent._subscribers[1] = onfulfilled
	parent._subscribers[2] = onrejected
}
```
