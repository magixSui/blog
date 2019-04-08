# XMLHttpRequest 
XMLHttpRequest 可以从 url 获取数据，只更新页面局部而不影响用户操作，在 Ajax 技术中大量应用。继承了
XMLHttpRequestEventTarget 和 EventTarget 的属性。

## 属性
- onreadystatechange 当readyState属性发生变化时调用的EventHandler。
- readyState readonly 返回 一个unsigned short 即无符号短整型，请求的状态码。
- response readonly 返回ArrayBuffer、Blob、Document、DOMString，具体是哪种类型取决于XMLHttpRequest.responseType的值。其中包含响应体body。
- responseText readonly 返回一个DOMString，该DOMString包含对请求的响应，如果请求未成功或尚未发送，则返回null。
- responseType 定义响应类型的枚举值。
- responseURL readonly 返回响应的序列化URL，如果URL为空，则返回空字符串。
- responseXML readonly 返回一个Document，其中包含该请求的响应，如果请求未成功、尚未发送或不能解析为XML或HTML，则返回null。
- status readonly 返回  unsigned short 即无符号短整型请求响应状态。
- statusText  readonly 返回一个DOMString，其中包含HTTP服务器返回的响应状态。与 XMLHTTPRequest.status不同的是，它包括响应状态的整个文本(例如，“200 OK”)。
- timeout unsigned long 即无符号长整型，表示该请求的最大请求时间（毫秒），超过该时间请求会自动结束。
- ontimeout 当请求超时调用的EventHandler。{ { gecko_minversion_inline(" 12.0 ")} }
- upload  readonly XMLHttpRequestUpload，表示上传过程。
- withCredentials Boolean，用来指定跨域的请求是否应该使用证书（如cookie或授权header头）。
- channel  readonly nsIChannel，对象在执行请求时使用的通道。
- mozAnon  readonly 一个布尔值，如果为真，请求将在没有cookie和身份验证header头的情况下发送
- mozSystem  readonly 一个布尔值，如果为真，则在请求时不会强制执行同源策略。
- mozBackgroundRequest 一个布尔值，它指示对象是否是后台服务器端的请求。

## 方法
XMLHttpRequest.abort()

如果请求已经被发送,则立刻中止请求.

XMLHttpRequest.getAllResponseHeaders()

以字符串的形式返回所有用CRLF分隔的响应头，如果没有收到响应，则返回null。

XMLHttpRequest.getResponseHeader()

返回包含指定响应头的字符串，如果响应尚未收到或响应中不存在该报头，则返回null。

XMLHttpRequest.open()

初始化一个请求。该方法只能JavaScript代码中使用，若要在native code中初始化请求，请使用openRequest()。

XMLHttpRequest.overrideMimeType()

重写由服务器返回的MIME type。

XMLHttpRequest.send()

发送请求。如果请求是异步的（默认），那么该方法将在请求发送后立即返回。

XMLHttpRequest.setRequestHeader()

设置HTTP请求头的值。您必须在open()之后、send()之前调用setRequestHeader()这个方法。

## Ajax
Ajax 是 Jesse James Garrett 在 2005 年提出的新术语。它基于现有技术的集合，更快速的获取网页的资源，而不需要重载网页。
简单来说，Ajax 就是利用 XMLHttpRequest 与服务器通讯。

### 发送 http 请求
```javascript
var httpRequest = null
if(window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
  httpRequest = new XMLHttpRequest()
}else if(window.ActiveObject) { // IE 6 and older
  httpRequest = new ActiveObject("Microsoft.XMLHTTP")
}
```
发送请求后会收到响应，需要告诉服务器由哪个方法来处理响应 -- handler。
```javascript
httpRequest.onreadystatechange = function(){
    // Process the server response here.
};
```
发送实际的请求
```javascript
httpRequest.open('GET', 'http://www.example.org/some.file', true);
httpRequest.send();
```