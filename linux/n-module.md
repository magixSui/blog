# linux 下 node 版本管理
由于之前在 windows 下不支持 n 进行版本管理，一直使用的是 nvm-windows，现在安装了 ubuntu 系统，尝试下 n 的管理。

## 安装
首先需要安装 nodejs
```
sudo apt-get install nodejs
```
安装 npm
```
sudo apt install npm 
```
安装 n
```
sudo npm i n -g
```

## 安装
长期支持
```
n lts 
```
稳定版
```
n stable 
```
最新版
```
n latest 
```
指定
```
n version 
```

## 使用
```
n version 
```

## 查看
```
n
```

## 删除
```
n rm version
```