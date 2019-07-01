# ubuntu 系统
ubuntu 是一个使用相对广发，社区活跃的 linux 桌面系统。我采用的是新的 uefi 方式安装，这种方式是最新、最便捷的安装方式。

## 准备工作
- 一个内存 > 4g 的 u 盘，最好读写要快。
- 下载好 [ubuntu](https://www.ubuntu.com/download/desktop) 镜像
- [rufus](https://rufus.ie/) 开源软件

## 开始

### 制作启动盘
使用 rufus 制作启动盘很简单，只需要加载镜像，调整扇区大小（推荐 4096），然后写入等待就行了，注意不要随意关闭，这个时间会持续几分钟，
会有卡顿的地方，等待一会就好了。

### win10 下压缩磁盘，新建分区。
```
我的电脑右键/管理/存储/磁盘管理
磁盘0/OS（C:）右键压缩卷/选择大小（100g）/保持未分区，不要格式化
```
### 关闭快速启动
```
设置/系统/电池和睡眠/其他电源设置/更改当前不可用的设置/
```

### 关闭 secure boot
做系统离不开 BIOS 和 UEFI，首先调整 BIOS 下的设置。我的本是小米 air 按住 F2 进入 BIOS。
```
Security/Set Supervisor Password 
Security/Secure Boot /Disable
Boot/Boot Type/ UEFI (默认)
f10 enter
```
### 安装
按住 F12 进入 UEFI 选择启动 U 盘，然后按照步骤根据自身情况选择，但要注意，在分区时需要自定义分区。

### 分区
首先明确需要分成4个区：
- / (50g) 主分区，ext4 ， /
- /home (剩余大小) 逻辑分区
- /swap (> 内存  + 2g < 2 * 内存) 逻辑分区，交换空间
- /efi (100m / 200m) 逻辑分区，EFI 系统分区

:::tip
这里没有 /root 分区是因为 UEFI 模式下主分区是 /efi 。我主要的用途是开发，需要命令安装很多工具，因此会占用很多 /root 空间。
:::

### 设置 UEFI 启动顺序
安装结束就可以进入到系统了，按照这个流程我一次成功的安装了 ubuntu，然后需要在 BIOS 中调整 UEFI 的启动顺序，将 ubuntu 顺序
提前，不然每次开机默认进入 win10。

### 右键失效
```
gsettings set org.gnome.desktop.peripherals.touchpad click-method areas
```

### 调整分区
系统已经正常进入，但是分区时不合理，这时可以通过 UEFI 启动盘进入引导系统，通过工具 gparted 重新调整分区。如果在已安装好的系统上使用
，会发现无法调整分区大小，因为此时的分区是装载的状态。
```
sudo apt-get install gparted
```
启动：
```
sudo gparted
```
这样就可以通过界面来调整分区打消了，需要注意的是只能在相邻的两个分区之间调整，然后逐渐“移动”到想分配的位置。
