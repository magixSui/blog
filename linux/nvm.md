# vue-cli3 安装失败
最近遇到了一个问题，全局安装 vuecli3 时遇到了一个 access 的问题，stackoverflow 上给出的解决方案是卸载 node 和 npm ，使用
nvm 等 node 版本工具安装。当然也可以通过更改计算机配置，不过更推荐版本管理工具。<br> 
我安装了 n 模块，但是 n 是 npm 包，我先安装了 nodejs 之后才安装 n 。问题就出在这里。

## 彻底卸载 nodejs
想彻底卸载 nodejs 和 npm 也要费点事
首先通过 apt-get 卸载 nodejs npm （这可能取决你自己的安装方式）
```
sudo apt-get --purge remove nodejs
sudo apt-get --purge remove npm
```

然后需要删除文件
```
rm -r /usr/local/bin/npm
rm -r /usr/local/lib/node_modules
// 查询
find / -name npm
rm -r /tem/npm*
```

## 卸载 n 模块
```
npm uninstall -g n
```

## 安装 nvm
```
sudo apt-get install curl
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.25.2/install.sh | bash
```
重启 terminal 
```
nvm -v
nvm install v10.15.3
nvm use 10.15.3
```

## 参考
启动的过程中发现 `system limit for number of files watches`
```
sudo gedit /etc/sysctl.conf
# 增加 fs.inotify.max_user_watches=524288
sudo sysctl -p
```
terminal 的每次启动都要执行 nvm use ，可以设置默认 node
```
nvm alias default 10.15.3
```
apt-get 更新以得到最新的包，否则可能会导致安装的并不是自己想要的，比如 yarn
```
apt-get update
```