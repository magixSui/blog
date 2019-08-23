# travis-ci 自动部署进阶
在前面我已经简单体验过利用 git-hooks 自己写脚本去实现基本的自动部署以及持续集成，但在一个完整的项目这些基础脚本是远远不够的。
作为前端开发者 ，那么可能就需要利用工具来代替一些脚本工作了。对个人项目而言， travis-ci 是一个很好的
持续集成工具，尤其是 github 维护的项目。

## 目的
- github 项目 manage_system
- 服务端 server manage_server
本地 manage_system 项目在 push 之后，可以由 travis-ci 执行测试脚本，然后打包，将打包文件拷贝到服务端项目 manage_server 中，不需要重启。同时如果
本地 manage_server 项目 push 后，可以由 travis-ci 更新代码并重启。

## 思路
完成这个流程有两个难点， 其一是如何实现 ssh 的免登录； 其二是如何实现虚拟机生成文件后的远程拷贝。

## ssh 
创建秘钥
```
// -t 秘钥类型  RSA 和 DSA 。-b 秘钥长度，默认 2048 。 -c 备注 -f 指定文件名
# ssh-keygen -t rsa -b 4096 -C 'build@travis-ci.org' -f ./deploy_rsa
ssh-keygen -t rsa -C "deploy" # 会在 ~/.ssh/ 目录下生成 id_rsa 和 -d_rsa.pub
```
添加信任关系
```
// 通过 ssh-copy-id 将公钥写入服务器 ~/.ssh/authorized_keys 中
ssh-copy-id -i deploy_rsa.pub ubuntu@118.24.15.288
```

## travis 加密
安装 gem 
```
sudo apt-get install rubygems ruby-dev
```
安装 travis 客户端
```
// 非必须 更换安装源 gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/
sudo gem install travis
```
登录 travis
```
travis login --auto // org pro # 需要输入 github 邮箱和密码
```
<img :src="$withBase('/base-on-requirement/login.png')" alt="travis-login">

## 加密
在项目目录下，执行加密，生成 .enc 文件并写入解密到 .yml 中
```
// --add 自动添加解密方式到 .travis.yml 中。 -r 指定 github 用户及项目
 travis encrypt-file ~/.ssh/id_rsa --add
# travis encrypt-file deploy_rsa --add -r gituser/project
```
:::warning
保证目录下存在 .travis.yml 文件，如果是在 git 仓库下使用，不需要指定用户和项目。如果在非仓库下执行，需要指定项目及用户。
:::

完成以上已经实现了 ssh 的免密登录。接下来需要实现远程拷贝。在 google 了之后我发现远程拷贝其实很简单，有两种常用的方式：
- scp 
- rsync
scp 是 secure copy的简写，使用他可以方便的进行从本地拷贝到服务器。rsync 是一个工具包，同样也具有远程拷贝的功能。暂时我只
使用他进行拷贝，不做深入探究。
```
scp  -rp -P 22 ./dist/. ubuntu@118.24.15.288:~/magix/
rsync -az --delete ./dist/* ubuntu@118.24.15.288:~/magix/
```
一份完整的文件命令
```yml
language: node_js
node_js:
- '10'
branches:
  only:
  - master
addons:
  ssh_known_hosts:
  - 118.24.15.288
script:
- npm run build
after_success:
- rsync -az --delete ./dist/* ubuntu@118.24.15.288:~/magix/
before_install:
- openssl aes-256-cbc -K $encrypted_3e18e6b84910_key -iv $encrypted_3e18e6b84910_iv
  -in id_rsa.enc -out ~/.ssh/id_rsa -d
- chmod 600 ~/.ssh/id_rsa
```






