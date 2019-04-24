# 安卓 APP
之前的项目一直是使用 hbuilder 基于 HTML5 来开发 android 和 ios 应用。但是在考虑做一款个人 app 的时候，三方打包的扩展性很低
，原生程序基本属于暗箱操作。kotlin 又是 google 官方开发语言，所以打算使用 kotlin 开发 app 的壳子，同时也方便今后的封装。
## 编辑器
首先[下载](http://www.jetbrains.com/idea/download/#section=windows) [IntelliJ IDEA 编辑器](https://hadihariri.com/2014/01/06/intellij-idea-minimal-survival-guide/)，这个编辑器有不少配置，简单选择了一下，
然后创建项目。因为创建的是安卓项目，需要下载 [android sdk](http://tools.android-studio.org/index.php/sdk/)（根据我现在的理解，sdk 就是开发工具包 + 模拟器）。
下载往往都是被墙，毕竟 google 开发的产品，我把下载好的 sdk r24.4.1windows 放在了百度云。
sdk 的安装目录不能包含空格。
```
android sdk location should not contain whitespace
```
## start a project
- 创建新项目
- 选择 activity，这里我选择了空 activity
- 填写项目名称等信息
- 生成项目
### 运行项目
项目生成后会下载 gradle ，~~现在暂时不知道有什么用~~ gradle 是一个构建工具，这个过程仍然需要翻墙。http://services.gradle.org/distributions/
