# git 命令

## 代码迁移
需要代码迁移时，需要保存历史记录。可以在原项目下执行：
```
git push --mirror + url
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