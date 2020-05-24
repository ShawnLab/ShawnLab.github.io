---
category: 醉翁之翼
tags:
  - 效率
date: 2019-03-31
title: Aria2：轻量级多线程下载工具，跟迅雷说拜拜
vssue-title: Aria2
---

Aria2 是一款支持多种协议的轻量级多线程命令行下载工具。

<!-- more -->

## 特性

- **多线程连线：** Aria2 会自动从多个线程下载文件，并充分利用你的带宽；
- **轻量：** 运行时不会占用过多资源，根据官方介绍，内存占用通常在 4MB~9MB，使用 BitTorrent 协议，下行速度 2.8MB/s 时 CPU 占用率约 6%；
- **全功能 BitTorrent 客户端**
- **支持 RPC 界面远程控制**

## 安装 Aria2

### 1. macOS

```bash
brew install aria2
```

### 2. Linux

Linux 推荐用 GUI 客户端 uGet

```bash
apt install aria2
apt install uget
```

### 3. Windows

Windows 偷懒用设置范本：[下载地址和使用说明][1]，配置文件参考下面的说明酌情修改 aria2.conf 文件即可。

## 设置配置文件

Aria2 提供两种方式使用，一种是直接命令行模式下载，不推荐使用这种方法，推荐使用另外一种 RPC 模式，这种方式 Aria2 启动之后只会安静的等待下载请求，下载完成后也只会安静的驻留后台不会自动退出。而使用 RPC 模式推荐做一个配置文件方便使用。下面以 macOS 为例做详细解说：
我们把配置文件放在 `~/.aria2` 下，依次输入命令

```bash
cd ~
mkdir .aria2
cd .aria2
touch aria2.conf
```

接着打开 Finder，利用 Shift+Cmd+G 进入路径：`~/.aria2/aria2.conf`，用文本编辑器打开 aria2.conf，将以下配置直接拷贝进去：

```nginx
#用户名
#rpc-user=user
#密码
#rpc-passwd=passwd
#上面的认证方式不建议使用,建议使用下面的token方式
#设置加密的密钥
#rpc-secret=token
#允许rpc
enable-rpc=true
#允许所有来源, web界面跨域权限需要
rpc-allow-origin-all=true
#允许外部访问，false的话只监听本地端口
rpc-listen-all=true
#RPC端口, 仅当默认端口被占用时修改
#rpc-listen-port=6800
#最大同时下载数(任务数), 路由建议值: 3
max-concurrent-downloads=5
#断点续传
continue=true
#同服务器连接数最大16
max-connection-per-server=16
#最小文件分片大小, 下载线程数上限取决于能分出多少片, 对于小文件重要，最小1M
min-split-size=1M
#单文件最大线程数, 受同服务器连接数限制，路由建议值: 5
split=16
#下载速度限制
max-overall-download-limit=0
#单文件速度限制
max-download-limit=0
#上传速度限制
max-overall-upload-limit=0
#单文件速度限制
max-upload-limit=0
#断开速度过慢的连接
#lowest-speed-limit=0
#验证用，需要1.16.1之后的release版本
#referer=*
#文件保存路径, 默认为当前启动位置
dir=/Users/xxx/Downloads
#文件缓存, 使用内置的文件缓存, 如果你不相信Linux内核文件缓存和磁盘内置缓存时使用, 需要1.16及以上版本
#disk-cache=0
#另一种Linux文件缓存方式, 使用前确保您使用的内核支持此选项, 需要1.15及以上版本(?)
#enable-mmap=true
#文件预分配, 能有效降低文件碎片, 提高磁盘性能. 缺点是预分配时间较长
#所需时间 none < falloc ? trunc « prealloc, falloc和trunc需要文件系统和内核支持
file-allocation=prealloc

```

默认下载路径的「/Users/xxx/Downloads」可以改为任何你想要的绝对路径。此处写为 Downloads 目录，xxx 请自行替换成你的 Mac 用户名，然后保存，退出编辑器。

## 启动 RPC 模式

 1. macOS 推荐用 Alfred Workflow 脚本：[Ariafred][2]
 2. Windows 推荐用 vbs 脚本，在 Aria2 程序目录新建文本文档重命名为 HideRun.vbs，复制下列命令到文档中保存

```vbnet
CreateObject("WScript.Shell").Run "aria2c.exe --conf-path=aria2.conf",0
```

## 浏览器扩展

 1. Chrome 推荐：[Camtd][3] - Aria2 下载管理器
 2. Firefox 推荐：[Aria2 Integration][4] - Aria2 下载器集成组件

  [1]: https://github.com/RossWang/Aria2-Integration/tree/master/Bin
  [2]: https://github.com/Wildog/Ariafred/releases
  [3]: https://chrome.google.com/webstore/detail/camtd-aria2-download-mana/lcfobgbcebdnnppciffalfndpdfeence
  [4]: https://addons.mozilla.org/zh-CN/firefox/addon/aria2-integration/
