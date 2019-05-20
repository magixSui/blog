# ubuntu 系统下的 ss
参考 https://www.linuxbabe.com/desktop-linux/how-to-install-and-use-shadowsocks-command-line-client
## 安装
```
sudo apt-get install python-pip
sudo pip install shadowsocks
```
:::warning
我使用的版本是2.18.2，安装完成并不能运行，会抛出一个异常，需要<br>
将第52行libcrypto.EVP_CIPHER_CTX_cleanup.argtypes = (c_void_p,)
改为libcrypto.EVP_CIPHER_CTX_reset.argtypes = (c_void_p,)

再次搜索cleanup（全文件共2处，此处位于111行），将libcrypto.EVP_CIPHER_CTX_cleanup(self._ctx)
改为libcrypto.EVP_CIPHER_CTX_reset(self._ctx)
:::

## 创建配置文件
```
{
"server":"11.22.33.44",
"server_port":50003,
"local_port":1080,
"password":"123456",
"timeout":600,
"method":"aes-256-cfb"
}
```
## 命令运行
根据配置文件的位置运行
```
sslocal -c /home/ss.json
```

## 结果
```
start 127.0.0.1:1080
```

## google SwitchyOmega
想在 ubuntu google 浏览器上使用 ss 需要同时安装 [SwitchyOmega](https://github.com/FelisCatus/SwitchyOmega/releases) 插件。
下载 crx 文件后，如果无法拖拽安装，也可以更改后缀为 zip 压缩后再加载插件。

插件页面
```
chrome://extensions
```
### 配置
安装完成后，选择新增情景模式，选择默认项代理服务器。设置为：
```
sock5 127.0.0.1 1080
```
应用设置。<br>
进入 auto switch 
- 按照规则列表匹配请求选择刚才配置好的情景模式
- 规则列表选择 autoProxy
- 地址栏 https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt
- 下载匹配规则

此时点击右上角圆圈，就可以选择模式使用了。

## 后台启动
```
ssserver -c /etc/shadowsocks.json -d start
ssserver -c /etc/shadowsocks.json -d stop
```