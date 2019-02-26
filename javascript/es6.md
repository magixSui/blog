# es6 
没有去系统的整理 es6 的语法，在日常使用中遇到之后，就记录到这里。
## Map
Map 是一组键值对的结构。
```javascript
var m = new Map([['li', 16], ['liu', 18], ['zhang', 14]]);
m.get('li'); // 16

// 多次对一个key操作，会覆盖前面的值
m.set('li',18) // 18
```
## Set
Set 是一组 key 的集合，不储存 value 。Set 存储的值不会重复。
## WeakMap
:::tip
Array Map Set 是 iterable 对象。iterable 对象可使用 for of 循环。
```javascript
// for in 循环的问题
var a = ['A', 'B', 'C'];
a.name = 'Hello';
for (var x in a) {
    console.log(x); // '0', '1', '2', 'name'
}
```
:::
## Map 与 Object
- 一个Object的键只能是字符串或者 Symbols，但一个 Map 的键可以是任意值，包括函数、对象、基本类型。
- Map 中的键值是有序的，而添加到对象中的键则不是。因此，当对它进行遍历时，Map 对象是按插入的顺序返回键值。
- 你可以通过 size 属性直接获取一个 Map 的键值对个数，而 Object 的键值对个数只能手动计算。
- Map 可直接进行迭代，而 Object 的迭代需要先获取它的键数组，然后再进行迭代。
- Object 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。虽然 ES5 开始可以用 map = Object.create(null) 来创建一个没有原型的对象，但是这种用法不太常见。
- Map 在涉及频繁增删键值对的场景下会有些性能优势。
