<!--
 * @Author: your name
 * @Date: 2021-07-28 10:43:40
 * @LastEditTime: 2021-09-16 09:14:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qz-admind:\projects\blog\git\command.md
-->
# git 命令

## 代码迁移
需要代码迁移时，需要保存历史记录。可以在原项目下执行：
```
git push --mirror + url
```

## 创建远端分支
```
git push --set-upstream origin dev
```

## 创建分支

```
git branch dev
```

## 查看分支

```
// 本地
git branch
// 远程
git branch -r
```

## 切换分支

```
// 本地
git checkout dev
// 远程 实际上是新建一个本地分支，然后拉取远程分支到新建分支上
git checkout -b namelocal origin/release
```
推荐

## 定位到某个节点
```
git revert commit_id
```
注意

## 回滚
```
git reset --hard commit_id
// 回滚后删除已提交 commit
git push origin HEAD --force
```
不推荐，会删除 commit 历史记录。--hard 定位到 HEAD。
## 全局代理
```
# HTTP 代理以 http:// 开头 ss 代理 socks5://127.0.0.1:1080
git config --global http.proxy PROXY_URL
git config --global http.proxy PROXY_URL
```
关闭代理
```
git config --global --unset http.proxy
git config --global --unset https.proxy
```

## 合并到主干
```
git checkout master 
git merge --squash  branch
git commit 
git push
```

## 取消合并
当我们 merge 后发现冲突可以取消合并
```
git merge --abort
```

## 查看配置
```
git config --list
```

## 
```
git config --global credential.helper wincred
git credential-manager uninstall
```

## 上传已存在项目
```
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/xx/xx.git（项目地址）
git push -u origin master
```
## 打 tag
```
git tag -a v1.1.1 -m "tag"
git push origin v1.1.1
```

## 删除 tag
```
git tag -d v1.3.1
git push origin :refs/tags/v1.3.1
```