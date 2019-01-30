# 项目安装

## 基于 magix-cli 开发
开发demo基于magix-cli模板创建,首先需要安装  ` magix-cli `。

```
# npm i magix-cli -g
# magix init simple projectname
```
然后安装依赖，并下载three.js。

```
# npm i
# npm i three -S
```
至此可以进行 Vue 下的常规开发了。

## 引入 three.js

```
import * as THREE from 'three'
```
然后就可以愉快的使用 THREE api 了。
