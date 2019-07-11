# javascript 简述
javacscript 诞生于 1995 年，由 Brendan Eich 开发。虽然平时二者代表的都是 js，但实际上并不相同。` javascript = ECMAscript + DOM + BOM `。可以这么说，javascript 是 web 平台下ECMAscript 的扩展。当然还有 Node、Adobe Flash 等等其他平台，而 ECMAscript 正是跨平台的标准。

## 搞清 \<script\>
`<script>` 是 HTML 规范中的一个标准元素。
### script 属性
- async
- defer
- src
- type

charset language 不予讨论。
::: warning
- 不要在带有 src 属性的脚本内加入代码，中间的代码会被忽略。
- 外链脚本也可以不以 .js 后缀结尾，但是要确保返回正确的 mime 类型。
- markdown、字符串 <\/script> 要增加 ` \ `转义。
:::

### \<script\> 加载
脚本执行有三种方式：
1. 异步脚本 async
2. 延迟脚本 defer
3. 同步脚本 

::: tip
HTML 使用脚本的方式：
- 内嵌
- 外链
- DOM 事件
- URL 链接
```html
<script type="text/javascript">
</script>
<script type="text/javascript" src="/lib/a.js"></script>
<div data-id onclick="this.dataset.id=1"></div>
<a href="javascript:new Date()"></a>
```
:::

## 浏览器支持
完全支持 es5 语法的浏览器：
- IE9+
- Firefox 4.0+
- Safari 5+ 
