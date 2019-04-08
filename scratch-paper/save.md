# slot
slot 必须存在才能分发，如果有控制显示隐藏需要在外层添加 v-show

## checkbox v-model

checkbox 中 v-model 双向绑定可以将值绑定到同一个数组中。
```vue
<li v-for="(item,index) in relatedAsset" :key="index">
  <input type="checkbox" :value="item.id" v-model="relatedAssetCheck">
  <span>{{ item.assetsName | assetsNameFilter}}</span>
</li>
```