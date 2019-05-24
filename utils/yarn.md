# yarn
ubuntu 使用 yarn 和其他平台相比稍显复杂。
首先确保你的 apt-get 是最新的`apt-get update` ,然后添加 yarn 仓库。
```
 curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
 echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

```
ubuntu 17.04 之后默认安装 cmdtest 需要删除：
```
sudo apt-get --purse remove cmdtest
```
接下来可以正式安装了，如果安装了 nvm ，可以忽略 nodejs 的安装：
```
sudo apt-get update && sudo apt-get install --no-install-recommends yarn
```
