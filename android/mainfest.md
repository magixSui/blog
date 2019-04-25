# AndroidMainfest.xml
AndroidMainfest.xml 有点像前端中的 package.json，他们都是全局唯一的配置文件。

## <uses-permission android:name="android.permission.INTERNET"/>
webapp 的前提，从Android 9.0（API级别28）开始，默认情况下禁用明文支持。因此http的url均无法在webview中加载。
为 webview 添加网络访问权限,同时需要在 `application` 中添加
```
android:usesCleartextTraffic="true"
```
这样，webview 就有网络访问权限了。