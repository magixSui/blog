# 安卓 APP
之前的项目一直是使用 hbuilder 基于 HTML5 来开发 android 和 ios 应用。但是在考虑做一款个人 app 的时候，三方打包的扩展性很低
，原生程序基本属于暗箱操作。kotlin 又是 google 官方开发语言，所以打算使用 kotlin 开发 app 的壳子，同时也方便今后的封装。
## 编辑器
可以使用两种比较流行的编辑器编辑安卓项目。
- [idea](https://hadihariri.com/2014/01/06/intellij-idea-minimal-survival-guide/)
- [android-studio](https://developer.android.google.cn/studio/)

## sdk
sdk 是 android 开发工具包，同时包含了虚拟机方便开发调试。sdk 通常是可以通过编辑器自动下载，如果下载失败，需要手动配置。我通过 android-studio
下载了 sdk ，查看 sdk 配置信息：

:::tip
android sdk location should not contain whitespace,sdk 的安装目录不能包含空格。
:::

[谷歌开发者](https://developer.android.com/training/basics/firstapp/creating-project)推荐使用 android studio。
## start a project

<img :src="$withBase('/android/start-android-studio.png')"/>

打开 ide 后会下载  gradle（一个打包工具） ，若下载失败，可以在 `C:\Users\Administrator\.gradle\wrapper\dists` 中手动放置。

## 如何运行
首先需要安装 android sdk，我通过在线完成安装。点击图标<img :src="$withBase('/android/sdk-btn.png')"/>，查看 sdk 。

<img :src="$withBase('/android/sdk-configure.png')"/>

查看安装的 api 版本，然后运行。

<img :src="$withBase('/android/virtual.png')"/>

- 1: 使用 usb 调试，这是最方便最直接的方式。
- 2： 使用已有的虚拟机调试，这种方式需要搭建环境。
- 3：创建新的虚拟机。

如果是为了快速创建项目，虚拟机会耽误很多时间，并且可能会该下载的都下载完成了，还需要更改 BIOS 虚拟机控制，比较坑。

## 查看页面
手机 usb 调试，需要开启开发者模式，允许 usb 调试，本文对此就不再赘述了。

<img :src="$withBase('/android/hello.jpg')"/>

## 创建一个 webview
接下来就是需要做的核心内容了，现在的思路是，在 activity 中创建 webview，通过 webview 加载服务器端（为了提速也可以放在项目中）的代码，
显示在页面上，我整理了一下加载 webview 的步骤：
### 在 activity 中创建 webview
```
// 目前先不考虑属性设置，只考虑目标
<WebView
        android:id="@+id/webView1"
        android:layout_below="@+id/text_endLoading"
        android:layout_width="fill_parent"
        android:layout_height="fill_parent"
        android:layout_marginTop="10dp" />
```
### 将网页插入 webview
```
// 引入 webview 对象，实例化并赋值为 activity 中的 webview，前端同学可以理解为 `findByID` 。
import android.webkit.WebView
class MainActivity : AppCompatActivity() {
  // 定义 webview
    private var webView: WebView? = null
    // 默认生成，把 activity 展示出来
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        // 执行新增的初始化方法
        init()
    }
    // 我新增的初始化方法
    private fun init() {
    // 将 webview 和 页面中的 webview 组件绑定
        webView = findViewById(R.id.webView1)
        // 加载链接
        webView!!.loadUrl("http://www.baidu.com/")
    }
}
```
:::tip
这里的 kotlin 语法相信熟悉 typescript 的同学都能发现，语法太相近了。相信之后上手也会提高很多效率。从而也可以看出，如今的“端”实在太多，
android,ios,webapp,微信小程序，pc，桌面端，快应用... 我想会有一门语言或者一个规范来限制约定 api，让多端统一更容易。
:::
### 允许网络访问
此时运行项目，会发现 `net：：ERR_CLEARTEXT_NOT_PERMITTED`。从Android 9.0（API级别28）开始，默认情况下禁用明文支持。因此http的url均无法在webview中加载。
因此需要配置访问权限。
```
// 在mainfest 中加入
<uses-permission android:name="android.permission.INTERNET"/>
// application 中加入属性
android:usesCleartextTraffic="true"
```
现在可以正常访问页面了，但是页面是弹出到系统自带浏览器，想要的效果是在 webview 中直接显示。
### 使用 app 内浏览器访问
```
// 在 init 中执行
// This inspection reports calls to Java get and set methods that can be replaced with the use of Kotlin synthetic properties.
webView!!.setWebViewClient(webClient)
private val webClient = object : WebViewClient() {
  // 此处 shouldOverrideUrlLoading 被删除线， 不推荐重写，是否还有其他方案？
        override fun shouldOverrideUrlLoading(view: WebView?, url: String?): Boolean {
            return false
        }
    }
```
:::tip
android-studio 中 java 代码可以自动转换为 kotlin 。此处有些类似 ts 和 js 的关系，语法检查会抛出警告或异常，但是不会阻止运行，因为最终
仍然是 java 代码运行在 java 虚拟机上。
:::

<img :src="$withBase('/android/local-browser.jpg')"/>

优化代码警告

```
// 改为 kotlin 推荐的方式调用 webViewClient 的 get set 方法
webView!!.webViewClient = webClient
```
