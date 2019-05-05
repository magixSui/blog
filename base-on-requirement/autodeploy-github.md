# github 自动部署
相对于个人开发者而言，虽然拥有自己的服务器，但是从各个方面衡量，github 仍然是首选。服务器仓库需要部署，维护，并且还存在丢失、被攻击的风险。

## Travis ci
在百度了一下之后，决定使用 Travis ci 作为第一个自动化构建工具。接下来是注册，当然使用 github 账号，然后登陆后会看到项目列表。激活之后，
工具会监听仓库的所有变化。

## 步骤
首先选中想要持续集成的项目，打开开关。

<img :src="$withBase('/base-on-requirement/activate-btn.png')" >

在仓库下新建 yml 文件，travis-ci 默认使用 yaml 格式作为配置文件，下面是一个 官方提供的基础最小化配置。
```
deploy:
  provider: pages
  skip_cleanup: true
  github_token: xxx  # Set in the settings page of your repository, as a secure variable
  keep_history: true
  on:
    branch: master
```
不过这并不能直接部署成功，现在的问题主要是四个：
- 通过解析
- 指定语言
- 默认配置是否符合当前的项目结构
- 权限 token

首先第一个问题很容易解决：
仔细排查脚本代码，发现 deploy 缺少了 `:`，添加后可以进入到构建阶段。

第二个问题也比较简单，添加语言选择：
```
language: node_js
node_js:
  - node # 代表最新稳定版
```
接下来需要解决的是第三个问题，这个问题困扰了我近两个个小时，但是解决方案却是容易的。首先我在 github 上创建了个人的 access_token，
这个 token 创建完需要保存，否则就会消失。然后在 yml 中配置 github_token,这里我的做法是将 token 粘贴进来，然后在 travis 配置
了一个变量 GITHUB_TOKEN 。

<img :src="$withBase('/base-on-requirement/setting.png')" >

这样的方式导致我一直在报错：
```
invalid github_token xxx 401
```
这让我很疑惑，是不是 token 需要在仓库内生成或者是只需要在配置文件或是网站上配置？我进行了几次测试，不过一直是这个错误。最后，发现原因
是 github_token 只能作为变量使用（在 github developer 文档中找到的），而需要把他存储到环境变量中，才能通过命令行访问。我又仔细看了网站，
之前添加的就是环境变量。那么此时应该需要将 token 的值 xxx 改为环境变量 `$GITHUB_TOKEN` 。

这样成功之后，仍然会抛出异常：
```
invalid github_token xxx 401
```
这也是我不确信 token 配置的根本原因，因为 travis 不配置用户的话会设置默认用户，这个用户对于我的项目当然是没有权限的了。在 yml 下增加配置：
```
after_script:
  - git config user.name "${GIT_NAME}"
  - git config user.email "${GIT_EMAIL}"
// 或者
deploy
  name: $GIT_NAME
  email: $GIT_EMAIL
```

根据文档，更好的方式应该是后面的配置。

接下来是最后的问题，项目的结构。我想要部署的是一个 vuepress 博客，他拥有自己的安装依赖，静态文件目录，并且是一个有目录层级的静态项目。travis 
默认的是 master 下就是一个静态资源项目，直接部署到 github page 上。所以部署仍会失败。travis 帮我们想到了这样的情况，他有直接的配置项来处理
目录的问题：
```
local-dir: ./.vuepress/dist/
```
travis 会自动将目录下的静态资源推送到默认的 gh-pages 分支上。
