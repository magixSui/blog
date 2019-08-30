# 遇到的一些 bug
## input 光标变大
这是由于在 element-ui 或者是 pc 端的 input 框很多人习惯使用 `height` 和 `line-height` 来控制。在 ios 中这可能会引起一个冲突，
导致光标和 line-height 一样高。 
解决办法: 去掉 height 和 line-height 的设置，使用 padding；或者隐藏输入边框，自定义一个外部边框。

## ios 文本省略号和文字重叠
这是由于 ios 中 `text-overflow: ellipsis` 和 `text-align:justify` 冲突导致。
解决方案，不使用 text-align 或去掉省略号。