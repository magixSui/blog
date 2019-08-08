# 完整的个人部署记录
以下的一些命令可能会因为商家的不同有一些区别，只要安装缺少的命令对应的工具就可以了。
## 系统选择
之前的系统一直选择的 centOS7 ，由于个人笔记本使用 ubuntu 18.04 ，因此改为 ubuntu。初次使用 ubuntu ，使用
```
 sudo passwd root 
```
创建管理员密码。然后通过
```
su
```
切换用户。 使用
```
su - user
```
切换到用户。

## 环境部署
### 安装 nvm 
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.25.2/install.sh | bash
```
文件会提示下载到 /home/ubuntu/.nvm 下 ` Downloading nvm from git to '/home/ubuntu/.nvm' ` ，重启控制台后
```
nvm --version
// 0.25.2
```

### 安装 node
```
nvm install v10.15.3
nvm use 10.15.3
```

### 安装 git
对于我当前的环境已经安装了最新版本的 git
```
sudo apt-get install git
// git version 2.17.1
```

## 部署 gitlab 代码仓库
```
sudo apt-get install -y postfix
// 清华镜像，添加 GitLab GPG 公钥信任
curl https://packages.gitlab.com/gpg.key 2> /dev/null | sudo apt-key add - &>/dev/null
deb https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/ubuntu xenial main // 写入到文件 /etc/apt/sources.list.d/gitlab-ce.list
sudo apt-get update
sudo apt-get install gitlab-ce
```
:::warning
官网提示 gitlab 的安装推荐 4g 内存以上，安装发现高性价比的服务器确实不能跑 gitlab。因此个人服务还是不安装 gitlab 了吧。另外如果确实想
搭建个人的服务，可以使用 bitbucket 。
:::