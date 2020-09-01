# 响应式布局
对于网站博客类相对简单又多终端兼容的项目，通常需要做响应式处理，那么如何进行响应式设计，在此我进行了重新的梳理。

## 思路
在以往的阶段，viewport 属性 （vw, vh, vmin, vmax）兼容性很低的时候，往往采取一些相对巧妙但是有瑕疵的方式。
整理如下：

- 宽度百分比
- media 媒体查询
- 栅栏系统
- rem 
- viewport vw 
- lib-flexible (淘宝方案，一种历史版本的解决方案)

响应式布局的关键在于宽度，根据设备宽度来采取不同的布局策略。

## @media
```css
 @media only screen and (max-width: 1600px) and (min-width: 1280px){
    html{
      font-size: 14px;
    }
  }
  @media only screen and (max-width: 1280px) and (min-width: 960px){
    html{
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 960px){
    html{
      font-size: 10px;
    }
  }
```

## 栅栏系统

## rem
rem 方案的思路是：动态设置 `html` 的 `font-size` ，然后通过 js 监听 `resize` 事件给 `html` 设置字体大小为屏幕宽度。然后所有尺寸根据屏幕宽度设置，思路类似于 vw 方案。字体大小使用 em 设置，避免使用 rem 导致字体放大缩小严重。
```html
<meta name="viewport" content="width=device-width,initial-scale=1.0">
```
```javascript
(function(doc, win) {
 var docEl = doc.documentElement,
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
  recalc = function() {
   var clientWidth = docEl.clientWidth;
   if (!clientWidth) return;
   docEl.style.fontSize = 50 * (clientWidth / 375) + 'px';
  };
 if (!doc.addEventListener) return;
 win.addEventListener(resizeEvt, recalc, false);
 doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window)
```

## vw
整体布局都使用 vw 设计，文字采用媒体查询根据设备宽度设置，或者通过 js 动态赋值，区别是动态赋值保证文字与设备宽度永远是按比例设计。这样就保证了布局的自适应。
