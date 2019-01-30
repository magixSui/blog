# defineProperty
defineProperty 是 es5 加入的一个对象方法，此方法可以在一个对象上新增一个属性或者修改现有属性，并返回这个对象。
## 属性描述符
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
