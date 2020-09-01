# 日常解决方案

## 图片宽高比设置
```css
img {
  width:50vw;
  height: 30vw;
}
img-container {
  width:100%;
  height:0;
  padding-bottom: 50%;
  overflow:hidden;
}
```
## 设置纵向文字
```css
writing-mode:horizontal-tb;//默认：水平方向，从上到下 
writing-mode:vertical-rl;  //垂直方向，从右向左
writing-mode:vertical-lr;  //垂直方向，从左向右
```

## 文字间隔
```css
letter-spacing
```