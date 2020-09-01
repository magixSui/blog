# css 冲突

## fixed 与 transform
如果父级元素存在 transform ，子元素 fixed 会自动降级成为 absolute。

## div 内 img 有 2px 间隙

```css
.div{
  line-height: 0; // 行高为0
  // font-size: 0; // 字号为0
}
img {
  vertical-align: middle; //中线对齐
}
```
## 空格问题
编辑器 p 标签折行，火狐会有一个空格

## edge 显示一堆中括号 [][][]
不是代码问题，在设置里关掉翻译选项就可以了