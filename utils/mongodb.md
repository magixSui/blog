# 安装
mongodb 的官网文档确实很不错，清晰便捷。[mongodb](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)
根据文档的步骤已经完成安装了。启动之后是不能互联网访问的，调试的话可以修改 `/etc/mongod.conf` 中的 `bind_ip =  0.0.0.0 / #默认127.0.0.1 ，无法远程访问`。

## 安全
无密码的默认库 admin 之前是可以直接通过互联网访问的，不过在 18 年大批的利用漏洞攻击 mongodb 的情况后，robo 取消了默认连接，调试的时候需要
创建一个账户，然后需要更新到 robo 1.3.1 ，1.2.1 版本是无法访问的。

### 创建用户
```
// admin 库，创建管理员
use admin
db.createUser(
  {
    user: "userName",
    pwd: "password",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)
// 使用库，创建普通用户
use test
db.createUser(
  {
    user: "userName",
    pwd: "password",
    roles: [ { role: "readWrite", db: "test" } ]
  }
)
```
然后就可以使用创建的账号密码登录了。

## 安全问题
以上是开发时方便调试的方式，后面会继续深入 auth 方面的安全。