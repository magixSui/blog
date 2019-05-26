# linux 操作
## 创建文件
```
touch README.md
```
## 创建文件夹
```
mkdir folder
```
## 追加到文件末尾
```
cat file1 >> file2
```
## 查看端口及id
```
netstat -nlp
```
## 杀死端口
```
kill -9 4596
```
## 编辑文件
```
vim file
vi file
```
## 查看当前文件夹下内容
```
ls
```
## 查看文件权限
```
ls -l
```
## 查看端口占用 pid 查询
```
netstat -antup
```
## 根据 pid 杀死进程
```
kill -9 17728
```

## apt-get 卸载

```
sudo apt-get remove --purge python-pip
```

## apt-get 清除下载包

```
sudo apt-get clean
```

## 设置 root 密码
```
sudo passwd root
```
## 切换到 root
```
su
password
```

## 切换到 用户
```
su - user
```

## 更改只读文件
```
:w !sudo tee % 
选择 l
```

## 添加环境变量
有多种添加的方式，我当前使用的方式是 `vim ~/ .bashrc`
```
# 最后一行添加
 exprot PATH=$PATH:YourPath
```
需要注意的是，如果已经存在环境变量，一定使用$PATH 然后以冒号添加，不然会导致全局环境变量实效。
:::tip
假如全局环境变量实效，可以使用命令设置临时环境变量,或者通过根路径访问命令，更改文件然后重启电脑。
:::

## 开机启动
进入 `/etc/rc.local`
```
#!/bin/sh -e
# 这是要执行的命令
sudo sslocal -c /home/ss/ss.json -d start
exit 0
```
增加权限
```
chmod 755 /etc/rc.local
```
重启

## 设置别名
```
# 当前窗口有效 
alias gm=/path/to/v8/tools/dev/gm.py
```