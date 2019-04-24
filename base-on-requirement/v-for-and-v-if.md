# 诡异的 bug
如果同时使用 v-for 和 v-if：
```javascript
// 这里的 empty 不会显示 ，有时间应该看源码并分析为什么会这样。
<div v-if="phones.length>0" v-for="(item, index) in phones" :key="index"></div>
<empty v-else></empty>
```