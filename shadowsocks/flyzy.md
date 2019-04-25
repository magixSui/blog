# 一键安装 ss
使用 centos 7 搭建，搭建前先使用网站[https://ipcheck.need.sh/](https://ipcheck.need.sh/)监测时候被禁。
需要注意的是，国外可以 ping 通，在流量下是可以使用的，但是在 wifi 和 pc 端大概率使用不了。
```
yum install git
git clone https://github.com/flyzy2005/ss-fly
ss-fly/ss-fly.sh -i password port
```

```
启动：/etc/init.d/ss-fly start
停止：/etc/init.d/ss-fly stop
重启：/etc/init.d/ss-fly restart
状态：/etc/init.d/ss-fly status
查看ss链接：ss-fly/ss-fly.sh -sslink
修改配置文件：vim /etc/shadowsocks.json
```
## 开启 bbr 加速
有些服务器速度非常慢，慢到会认为搭建失败了，毕竟 ping 通不易，开启 bbr 加速后很可能就正常使用了。
```
ss-fly/ss-fly.sh -bbr
```
安装完成重启生效。`reboot`

判断是否生效

```
sysctl net.ipv4.tcp_available_congestion_control
// net.ipv4.tcp_available_congestion_control = bbr cubic reno
```