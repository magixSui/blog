# css3 动画
一直都对动画不是很熟悉，在此记录一下过程中的心得。

## ease
目标是实现渐入渐出，其实这里可以使用 vue 封装的组件，不过为了熟悉 transition ，我并没有采用。首先设置渐入元素。
```css
.navbar {
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 90px;
  transition: all 0.3s ease-in;
  background-color: #4e7fff;
  color: #fff;
}
```
第一个问题来了，虽然设置了渐变，但是渐变的**关键是起始和终止**，通过渐变来执行一种或多种属性的线性变化。对于 css 事件，可以使用 hover 等来设置终止样式。但是如果是 js 事件怎么做呢？首先应该设置一个动态的 class 或者是 style ， 这样可以通过 js 来操作样式。

```html
 <div :class="[show, collapsing]"></div>
```
然后通过点击事件等，增加或改变样式。
```javascript
change() {
  this.collapsing = 'collapsing';
}
```
然后设置 `collapsing` 的样式。
```css
.navbar-collapse.collapsing {
  height: 100vh;
  transition: all .2 ease;
  left: 100%;
}
```
需要注意的是，这里渐入和渐出，生效的动画分别是 `navbar` 和 `collapsing`。
第二个问题是，渐变执行完成需要隐藏元素，因为这里的面板是需要收起的，需要注意的是，因为 `display: none` 从文档中删除元素，会中断动画的执行，所以需要使用延时生效 display ，或者使用 `visibility` 代替 display。