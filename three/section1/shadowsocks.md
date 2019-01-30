# 开始
我们需要做的就是安装ss，配置ss，然后启动，大功告成，其实就是这么简单。其他的其实只是为这三个步骤铺路，保证道路的畅通。

## 安装
为了方便，首先安装一些基础软件。
```
 yum -y install net-tools vim curl wget epel-release
```
更新
```
yum -y update
```
首先安装 ` python-setuptools `，然后我们就可以使用 ` easy_install ` 命令。
接下来安装 ` pip ` 然后我们就可以使用 ` pip ` 包管理。
最后安装正主 ` shadowsocks `。

```
# yum install python-setuptools
# easy_install pip
# pip install shadowsocks
```
## 编辑
为了方便快捷，可以采用最小化编辑。
```
vi /etc/shadowsocks.json
```
> 如果不清楚 vi 使用,按 i 可以插入；输入配置；按ESC退出insert模式；按 :wq 保存退出。
```
{
"server":"x.x.x.x",             #你的 ss 服务器 ip
"server_port":0,                #你的 ss 服务器端口
"password":"password",          #连接 ss 密码
"method":"aes-256-cfb",         #加密方式
}
```
## 启动

` ssserver -c /etc/shadowsocks.json -d start `

## 停止

` ssserver -c /etc/shadowsocks.json -d stop `

## 监测是否启动成功

```
curl --socks5 127.0.0.1:1080 http://httpbin.org/ip
```
如果返回
```
{
  "origin":"x.x.x.x"      #你的 ss 服务器 ip
}
```
则启动成功。