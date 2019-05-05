# 内网穿透
使用内网穿透主要来源于两个需求，其一是 mediaDevices.getUserMedia 要求必须是 https 安全域名才可调用，而本地开发环境的安全域名，
借助于内网穿透工具可以实现。其二是微信公众号调试，公众号的链接要求必须是外网域名，本地调试时借助内网穿透实现。目前的问题是访问速度
过慢，因此在生产环境的使用还有待考察。
## 下载 mgrok 
https://ngrok.com/,需要注册后才能下载。
## 开启本地 https
ngrok 同时可以开启两个端口，因此不需要而外的命令。首先需要初始化：
```
ngrok authtoken xxx
```
其中 authtoken 的值可以在官网的 auth 下复制。
```
// 当前启动的端口
ngrok http 8080
```
如果出现错误 `invalid host header`
```
ngrok http 8080 -host-header="localhost:8080"
ngrok http -host-header=rewrite 8080
``