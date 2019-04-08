# 应用层协议
常见的应用层协议有 HTTP、FTP、SMTP 、Telnet、DNS、SFTP、SCP、SSH 。

<img :src="$withBase('/browser/http.png')" alt="fps">

## HTTP 协议
HTTP 是一种无状态协议，默认端口是 80 。HTTP 协议不止应用于网页。

## DNS 协议
Domain Name System 域名系统，也可以叫做域名解析协议。在互联网访问一个地址的时候，使用的是熟悉的 ` www.baidu.com `，但是实际找到
对应的计算机是通过 ip 地址去寻找。DNS 协议就是将域名解析为 ip 地址。

### DNS 工作流程
- 通过域名访问
- 发送至域名解析服务器
  - 解析根域名 比如.org .com .cn
  - 通过解析算法解析（迭代、递归）

## FTP 协议
FTP 协议主要用于文件传输，FTP 协议要比 HTTP 协议复杂的多，基于 TCP。

## SFTP 协议
SFTP 与 FTP 很相似，但是 SFTP 更安全并且支持断点续传，基于 ssh。

## SCP 协议
加密拷贝传输，不可断电续传，基于 ssh。

## SMTP 协议
邮件传输协议

## Telnet 协议
基于网络虚拟终端 NVT 实现，实现设备间拨号通讯。

:::tip
http://www.kumouse.com/doc/FTP/tcp.htm

http://www.kumouse.com/doc/FTP/Telnet.htm 
:::