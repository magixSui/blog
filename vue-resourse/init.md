# 第一次提交
vue 项目有很多分支，超级多的提交，我会尽可能分析到每次提交，切换到 0.10 分支：

<img :src="$withBase('/vue-resourse/0.10branch.png')"/>

进入 commit ，commit 可以在地址栏更改当前数目定位到最后一页，不然一页一页翻太麻烦了。找到 commit 可以进入到当前 commit_id 的
分支：

<img :src="$withBase('/vue-resourse/project_structure.png')"/>

切换版本查看时只需要执行 `git reset --hard commit_id` 就可以切换到下一个 commit 。这样的结构明显不会让人望而生畏了，目录也很简单。
```
src
├── main.js        # 核心代码 
test               # 测试相关 
├── index.html
├── test.js
.gitignore         # git 忽略 
.jshintrc          # jshint 设置
component.json     # 
package.json       # 项目配置文件
Gruntfile.js       # grunt 打包配置

可以看到，最初引入 jshint 作为代码审查工具，grunt 作为打包工具，从这里也可以看出测试、校验与打包工具是一个项目必不可少的。
