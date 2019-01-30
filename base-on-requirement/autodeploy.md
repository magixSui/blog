# 目的
在编写本博客部署到服务器时，需要反复的 push 然后在服务器 pull ，不胜其烦。所以考虑自动部署，将重复的事交给脚本去做。
由于是个人博客，所以是以学习的目的为出发点，如果是公司项目的部署，请使用 jenkin Netlify 等自动部署的工具。了解以上，继续我们的话题。
## githooks 原理
git 为我们提供了 hook 机制，在执行 ` git push `等命令后，根据不同的钩子函数，触发不同的脚本。脚本文件存放在` .git/hooks/ `文件夹中。
如果克隆一个项目，打开此文件夹可以看到一些主要的脚本例子。在这里我们只需要了解 post-receive 这个钩子，它将在 `git push`完成后触发。
::: warning
需要注意的是：整个流程涉及 ssh登录， linux 权限最后才是githooks。一定要确认问题发生在哪一环节。
:::
## ssh 登录
在我们部署之前，首先要了解 ssh 的登录机制，因为这对免密登录至关重要。在初用 git 进行版本控制时，我们都是使用 https 进行登录。但是这样做的弊端是
即使是项目的拥有者，也要每次输入账号密码。所以这里我们使用另一种登录的方式 ssh 登录。

### ssh 创建秘钥
```
ssh-keygen -t rsa -C "email@email.com"
```
一般情况，我们不设置密码，使用默认路径存储秘钥，所以这里要连续敲三个回车。秘钥保存在：
- window ` C:\Users\Administrator\.ssh `
- linux ` /root/.ssh `
- mac 这里不做探讨。

这里的秘钥 Client 和 Server 可以使用相同的公钥进行登录。
#### ssh 公钥登录
生成客户端秘钥后，我们需要在仓库中能识别这个公钥，并且需要有一个类似于数据库的东西存储账号密码（公钥）。
```
$ cd /home/git/
$ mkdir .ssh
$ touch .ssh/authorized_keys
```
` authorized_keys `就相当于数据库，我们需要将生成的公钥（id_isa.pub）内容添加到此文件中。
### 添加登录信任
如果是首次登录，会出现 yes/no 的一个提示，但是我们通过客户端命令使用脚本执行，无法弹出这个提示，所以需要在 ` /etc/ssh/ssh_config `文件设置
```
Host *
StrictHostKeyChecking yes
```
默认选择 yes 。这个操作完成后，会自动在 ` /home/git/.ssh ` 下生成 ` known_hosts `信任列表。
## git 部署
我们所需要的环境有三个：
- Client 
- Repository
- Server

部署前要确定已经安装了 git ，并且创建了 git 群组以及 git 用户。
Client 是我们的客户端开发环境，Repository 是远程仓库，Server 是真正运行项目的地方。我的 Client 是 windows 系统。Repository 和 Server 位于同一 ip 下。
我们将分别讲述这三个环境需要做哪些事。

### git Repository 部署
初始化 git 仓库。这里要注意区分 ` git init --bare `与` git init `,` git init --bare `相当于将仓库与代码分离，适合作为远程仓库。
```
git init --bare magix.git
```
### git Client clone
```
git clone git@ip:/usr/local/src/server/magix.git
```
### git Server clone
```
git clone /usr/local/src/server/magix.git
```
Server 如果不小心也使用了 ip clone项目，会导致一直提示` Permission denied, please try again. `。如果是因为这个路径导致，可以修改
` /当前项目/.git/config `
修改前：
```
url = git@server:/usr/local/src/xxx.git
```
修改后：
```
url = /usr/local/src/xxx.git
```
## post-receive
这里不进行赘述，只是使用了基本命令。
```
#！ /bin/sh
DeployPath="/usr.local/xxx"
cd $DeployPath
echo "POST-RECEIVE"
unset GIT_DIR # 去掉默认 git 环境变量
git pull
```
## linux 权限管理
完成以上，只是流程上看似畅通，但是一定会有各种各样的坑。这就是为什么我没有一步一步写出命令代码，而是分模块的讲述整个过程。完全照搬
代码很难跑通，我们需要理解 linux 系统的一些基本使用，git 的基本使用，shell的运用。否则即使是特别简单的自动部署，也让人望而生畏。之前
我们创建了git 群组与用户，这里我们需要将 ssh 、Repository 、Server 相应的文件夹及项目，所有者都改为 git 。
```
# 如果是单个文件 去掉 -R
chown -R git:git foldername
```
并且 ` post-receive ` , ` /home/git/.ssh ` , ` /home/git/.ssh/authorized_keys ` 需要分别赋予权限。
```
# 赋予可执行权限 755
chmod +x ./post-receive
chmod 755 .ssh
chmod 644 .ssh/authorized_keys
```
参考
```
-rw------- (600) -- 只有属主有读写权限。

-rw-r--r-- (644) -- 只有属主有读写权限；而属组用户和其他用户只有读权限。

-rwx------ (700) -- 只有属主有读、写、执行权限。

-rwxr-xr-x (755) -- 属主有读、写、执行权限；而属组用户和其他用户只有读、执行权限。

-rwx--x--x (711) -- 属主有读、写、执行权限；而属组用户和其他用户只有执行权限。

-rw-rw-rw- (666) -- 所有用户都有文件读、写权限。这种做法不可取。

-rwxrwxrwx (777) -- 所有用户都有读、写、执行权限。更不可取的做法。
```