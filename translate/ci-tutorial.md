# Travis CI 教程
原文地址：https://docs.travis-ci.com/user/tutorial/
这是一个非常短的指南来使用 Travis CI 部署你的代码仓库。如果你是持续集成新手或者想了解 Travis CI 做了什么，请
查看 [Core Concepts for Beginners](https://docs.travis-ci.com/user/for-beginners)。

## 必要条件
想要开始 Travis CI 确保你已经有以下条件：
- 一个 github 账户
- 一个 github 项目所有权

## 开始  Travis CI
- 使用 github 账户登录 Travis-ci.com
- 接受  Travis CI 权限。然后会重定向到 github。
- 点击绿色的启动按钮，选择你想使用 Travis CI 的仓库。
- 添加一个 `.travis.yml` 文件到仓库，让  Travis CI 知道做什么。下面的例子规定了一个 Ruby 项目应该使用 Ruby 2.2 
版本，最新的 JRuby 版本。
```
language: ruby
rvm:
 - 2.2
 - jruby
```
Ruby 项目默认使用 `bundle install` 安装依赖， `rake` 构建项目。
- 添加 `.travis.yml` 到 git ，commit 然后 push ，触发 Travis CI 构建：
:::tip
Travis 只会在你添加了 `.travis.yml` 之后发送提交才会进行构建。
:::
- 访问 Travis CI 选择仓库，根据构建命令的返回状态检查构建状态页面查看构建是否通过或出错。

## 选择一个不同的编程语言
```
language: node_js
```

## 除了运行测试
- 部署[GitHub pages](https://docs.travis-ci.com/user/deployment/pages/)
- 在[Heroku](https://docs.travis-ci.com/user/deployment/heroku/) 运行 app
- 上传[RubyGems](https://docs.travis-ci.com/user/deployment/rubygems/)
- 发送[notifications](https://docs.travis-ci.com/user/notifications/)

## 进一步阅读
阅读更多：
- [定制化构建](https://docs.travis-ci.com/user/customizing-the-build)
- [最佳安全实践](https://docs.travis-ci.com/user/best-practices-security/)
- [阶段性构建](https://docs.travis-ci.com/user/build-stages/)
- [构建基站](https://docs.travis-ci.com/user/customizing-the-build/#build-matrix)
- [安装依赖](https://docs.travis-ci.com/user/installing-dependencies)
- [数据库部署](https://docs.travis-ci.com/user/database-setup/)
