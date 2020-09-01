# HTML
## title
title 作为网站的标题，同时也是书签的推荐名称。

## meta
meta 页面元信息。
```html
<!-- 支持任何语言 -->
<meta charset="utf-8”/>
```
一般默认书写，但是即使不加上这一行，大部分浏览器也会正常显示，因为浏览器会自动修正编码。
### metadata protocol
可以添加相应的元信息，使自己的网站在特定网站（主要是社交网站）显示为图片链接。如：Open Graph Data。

## favicon
使用在浏览器 tab 栏，书签，添加喜爱中。
添加方式：
- 将 16px 方形 ico 格式图片保存到 index.html 同级目录。（也可以是 png gif, ico 兼容性更好）
- <link rel="icon" href="favicon.ico" type="image/x-icon">

## hyperlinks
定位到页面位置
```html
<h2 id="Mailing_address">Mailing address</h2>
<p>Want to write us a letter? Use our <a href="contacts.html#Mailing_address">mailing address</a>.</p>
```
下载 重命名
```html
<a href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
   download="firefox-latest-64bit-installer.exe">
  Download Latest Firefox for Windows (64-bit) (English, US)
</a>
```

### 绝对链接
首先查找服务地址 Domain Name System （dns）, 然后到服务器下找到请求完成的文件；

### 相对链接
直接寻找请求完成的文件
