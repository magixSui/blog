# 一键搭建ssr

```
yum -y install git
git clone https://github.com/flyzy2005/ss-fly
ss-fly/ss-fly.sh -ss
```
## bbr 加速
```
ss-fly/ss-fly.sh -bbr
```
## 相关操作
```
启动：/etc/init.d/shadowsocks start
停止：/etc/init.d/shadowsocks stop
重启：/etc/init.d/shadowsocks restart
状态：/etc/init.d/shadowsocks status
配置文件路径：/etc/shadowsocks.json
日志文件路径：/var/log/shadowsocks.log
代码安装目录：/usr/local/shadowsocks
```
## 卸载

```
./shadowsocksR.sh uninstall
```
## 客户端

https://github.com/shadowsocksrr/shadowsocksr-csharp/releases

https://github.com/shadowsocksrr/shadowsocksr-android/releases