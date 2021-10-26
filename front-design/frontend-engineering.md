<!--
 * @Author: magix
 * @Date: 2021-08-11 07:53:47
 * @LastEditTime: 2021-08-13 14:00:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qz-admind:\projects\blog\front-design\frontend-engining.md
-->
# 手把手教你上线个人项目

一直以来都觉得前端不应该局限在一个狭小的圈子里，诸如后端、数据库、linux操作系统、devOps 等等方面都需要有所涉猎。
多年来，各个方向或多或少都去了解了一点，但是从未系统的把他们完整的串起来并逐步迭代优化。本文将要阐述一套以 js 为主开发的完整流程。

当前的情况是：已经有一套前端代码、后端代码等待部署，已经购买服务器和域名。

## 需要等待的一些事

在正式开始部署前，还有一些杂事需要处理。首先在购买的域名下要进行几项操作：
- 实名认证
- 域名解析到服务器
- 申请 ssl 证书
关于域名的这几项，需要等待实名认证三天后才能进行，需要耐心等待。

## 安装 nginx

使用 root 账户
```
su root
apt-get install nginx
```
安装成功后即可访问到欢迎页。但是如果服务器中 80 端口已经使用，就会报错，需要检查端口占用：

```
lsof -i:80
kill -9 xxxx // 杀死端口占用程序 谨慎操作
service nginx start // 启动 nginx

/usr/sbin/nginx：主程序所在的文件夹
/etc/nginx：存放配置文件
/usr/share/nginx：存放静态文件
/var/log/nginx：存放日志

// 另外由于每台机器安装位置不同，可以用命令行查找具体位置，例如：
ps -ef | grep nginx // 查找 nginx 程序位置
nginx -t // cd 程序位置查看配置文件位置 

// 配置文件中可能引入其他文件，导致当前页的 server 不生效，使用时要注意。第一次使用可以注释 conf 相关的引入。
# include /etc/nginx/conf.d/*.conf;
# include /etc/nginx/sites-enabled/*;

```
## 配置路径
```
localtion / {
  root /opt/www/default/dist;
  index index.html 
}

// 但是使用 例如 localhost/blog/ 带有层级的 url 时，就失效了，此时应该江路径设置改为：
localtion / {
  alias /opt/www/default/dist;
  index index.html 
}
```
访问 80 端口

## 小程序端

### 云函数
云函数如何使用？首先创建项目时勾选云函数，创建好的项目中就会出现 `functions`,下面以taro3.0 版本创建的结构描述。


#### 小程序端
小程序端很好理解，就是和往常一样，发起一个请求，等待回应：
```
Taro.cloud.callFunction({
  name: 'login',
  data: user
})
```
为了不创建多个云函数，我们也可以像官方示例那样，增加类别来区分
```
  Taro.cloud.callFunction({
  name: 'quickstartFunctions',
  config: {
    env: this.data.selectedEnv.envId
  },
  data: {
    type: 'createCollection'
  }
})
```

#### 云函数端
<img :src="$withBase('/front-design/cloud-func.png')" />
此处的 login 文件夹就是一个 ‘云函数’，对于首次使用的人来说，可能有一些疑惑，其实这里的文件夹名称对应的就是你在小
程序端请求中的 `name`。
```
// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})

/**
 * 这个示例将经自动鉴权过的小程序用户 openid 返回给小程序端
 * 
 * event 参数包含小程序端调用传入的 data
 * 
 */
exports.main = async (event, context) => {
  console.log(event)
  console.log(context)

  // 可执行其他自定义逻辑
  // console.log 的内容可以在云开发云函数调用日志查看

  // 获取 WX Context (微信调用上下文)，包括 OPENID、APPID、及 UNIONID（需满足 UNIONID 获取条件）等信息
  const wxContext = cloud.getWXContext()

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    env: wxContext.ENV,
  }
}


```
我们要返回的内容，在 main 函数中编写就可以了。


