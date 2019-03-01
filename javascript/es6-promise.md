# ES6Promise

```javascript
var Promise$1 = function () {
function Promise(resolver) {
// 为每个实例创建了一个 id
  this[PROMISE_ID] = nextId();
  // 初始化 promise 的返回值和状态
  this._result = this._state = undefined;
  // 订阅者
  this._subscribers = [];

// 定义了一个空函数 function noop(){}
  if (noop !== resolver) {
  // 健壮性 抛出异常
    typeof resolver !== 'function' && needsResolver();
    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
  }
}
return Promise;
}();
```
实例化/初始化promise
```javascript
function initializePromise(promise, resolver) {
// 传入了当前对象 预处理的函数
  try {
  // 只是传入函数作为参数，还没有执行
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}
```
执行 then
```javascript
function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}
```