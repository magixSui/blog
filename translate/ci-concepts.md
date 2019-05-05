# 持续集成和新概念入门
原文地址：https://docs.travis-ci.com/user/for-beginners
欢迎来到 Travis CI！本文提供了一些贯穿文档和平台的背景和术语，希望对出入持续集成的你有所帮助。

## 什么是持续集成？（CI）
持续集成是迅速合并少量代码更改的实践-相对于在开发循环周期并入大量的更改。目标是通过增量的部署和测试建立更健康的软件。
这就是持续集成的由来。

作为一个持续集成平台，Travis CI 支持开发流程自动化构建和测试代码改变，在成功改变后提供迅速地反馈。Travis CI 还可以
通过管理部署和通知使开发过程中其他部分自动化。

## 持续集成和自动化 building, testing, deploying
当你运行构建脚本时（run a build），Travis CI 克隆你的 github 仓库到一个标记的新的虚拟环境，执行一些列的任务构建测试你的
代码。如果一个或多个任务失败了，构建失败。如果没有任务失败，构建通过， Travis CI 可以部署你的代码到服务器或应用主机。

持续集成也可以使其他部分的交付工作流自动化。This means you can have jobs depend on each other with Build Stages, setup notifications, prepare 
deployments after builds, and many other tasks.

## Builds, Jobs, Stages 和 Phases
在  Travis CI 文档中，一些基本的词汇有特殊的含义
- phase - 一个 job 的有序步骤. 例如，安装 phase, 在脚本步骤之前执行, 在可配置的部署 phase 之前执行。
- job - 一个自动化的过程，克隆你的仓库到一个虚拟的环境，然后执行一系列的 phases 比如便以你的代码，运行测试， 一个 job 在执行 phase 如果返回码不是0会失败。
- build - 一组 jobs. 例如, 一个 build 可能拥有两个 jobs, 每个测试一个项目，使用不同版本的编程语言。一个  build 在所有 jobs 结束之后结束。
- stage - 一组 jobs 作为有序的 build 的一部分运行在相似的过程 ，由多个 stages组成。

## 破坏 build
build 会失败当一个或多个 jobs 返回的状态是没有通过：
- errored - a command in the before_install, install, or before_script phase returned a non-zero exit code. The job stops immediately.
- failed - a command in the script phase returned a non-zero exit code. The job continues to run until it completes.
- canceled - a user cancels the job before it completes.

我们的基本 build 问题库页面是一个开始处理问题的好地方，为什么你的build 失败了。

## 基础搭建和环境
Travis CI 提供了一些不同的搭建环境，所以你可以选择最适合你项目的安装：
- Ubuntu Linux - these Linux Ubuntu environments run inside full virtual machines, provide plenty of computational resources, and support the use of sudo, setuid, and setgid.
- macOS - uses one of several versions of the macOS operating system. This environment is useful for building projects that require the macOS software, such as projects written 
in Swift. It is not a requirement to use the macOS environment if you develop on a macOS machine.

更多的细节在我们的 CI 环境文档。

现在你已经阅读了基础，前往我们的教程学习细节，创建你的第一个 build 吧！

:::tip
有一些因为理解而翻译的有出入，需要逐渐优化；
部分文字没翻译--懒
:::