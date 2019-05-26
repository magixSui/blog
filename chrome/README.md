# v8 引擎
如何打开 v8 神秘的大门？到目前为止，我对 v8 的内部一无所知，仅仅知道他是计算机与 javascript 语言的桥梁，现在
我的好奇心趋势我去探索， v8 的内部到底是如何实现的，我能用开源的 v8 代码做些什么？

## 准备
首先我搜集了 google 的几个网址：
- [v8 github 地址](https://github.com/v8/v8)
- [文档](https://v8.dev/docs)
- [镜像地址](https://chromium.googlesource.com/v8/v8.git)
- [wiki](https://github.com/v8/v8/wiki)
- [博客](https://blog.chromium.org/)

## 检出代码
:::tip
os: linux
:::
- git
- depot tools
```
sudo apt-get install git
# 这里从谷歌下载会被墙 需要配置 git 代理
git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git
```

## 配置环境变量
```
vim ~/ .bashrc
# 添加到最后，$PATH 代表添加到已有环境变量后，而非替换，这里要非常注意
export PATH=$PATH:/path/to/depot_tools
source .bashrc
```
## git 配置
```
$ git config --global user.name "John Doe"
$ git config --global user.email "jdoe@email.com"
$ git config --global core.autocrlf false
$ git config --global core.filemode false
$ # and for fun!
$ git config --global color.ui true
```
## command proxy
由于需要在命令行下访问外网，需要代理才可以访问，我这里使用 polipo，基于 ss 二次代理。
```
sudo apt-get install polipo
vim /etc/polipo/config

#
logSyslog = true
logFile = /var/log/polipo/polipo.log

proxyAddress = "127.0.0.1"
proxyPort = 8123

socksParentProxy = "127.0.0.1:1080"
socksProxyType = "socks5"

chunkHighMark = 50331648
objectHighMark = 16384

serverMaxSlots = 64
serverSlots = 16
serverSlots1 = 32
```
### 启动
```
/etc/init.d/polipo restart
# 配置代理
export http_proxy="http://127.0.0.1:8123/"
export https_proxy="http://127.0.0.1:8123/"
```
:::warning
目前的 git 代理应该是写入配置 ，command 代理应该都是基于窗口的，需要以后验证。
:::

## 源码下载
```
# 开启漫长的下载
fetch v8
```