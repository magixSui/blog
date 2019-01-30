# 开始

# 创建服务器 repository
## 创建用户组和用户
```
$ groupadd git
$ useradd git -g git
```
## 创建ssh证书
```
$ cd /home/git/
$ mkdir .ssh
$ chmod 755 .ssh
$ touch .ssh/authorized_keys
$ chmod 644 .ssh/authorized_keys
```
## 初始化 git 仓库
因为要生成的是服务器仓库，所以这里使用 bare 命令创建空仓库，好处是会分离 repo 与代码，方便管理。
```
$ cd /usr/local/src/
$ mkdir gitrepo
$ chown git:git gitrepo/
$ cd gitrepo

$ git init --bare server.git
Initialized empty Git repository in /usr/local/src/gitrepo/server.git/
```
修改仓库的用户
```
$ chown -R git:git server.git
```
## 生成客户端秘钥
```
ssh-keygen -t rsa -C "email@email.com"
```
配置生成目录及密码，秘钥的默认路径是 C盘用户目录下的 .ssh 文件夹
## 服务端秘钥设置
```
cd /home/git/.ssh/
vim authorized_keys
```
然后将客户端公钥粘贴进来。