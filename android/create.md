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
