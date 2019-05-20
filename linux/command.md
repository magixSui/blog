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