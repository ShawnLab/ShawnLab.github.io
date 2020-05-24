---
category: 醉翁之翼
tags:
  - V2Ray
  - 效率
date: 2019-03-26
title: V2Ray：优秀的开源网络代理工具
vssue-title: V2Ray
---

V2Ray 原生支持 Socks、HTTP、Shadowsocks、VMess 等协议，目前已经全平台支持 Windows、Mac、Linux、Android、iOS 等操作系统的使用，助你畅爽体验互联网。相对起 Shadowsocks 来说属于后起之秀，在混淆能力、兼容性、速度上有着独到的优点。

<!-- more -->

> 官方推荐的 GUI [客户端](https://v2ray.com/awesome/tools.html) 不做详细介绍，除了 iOS 版本需要付费，其余均免费。服务端方面强烈推荐开启 BBR 拥塞控制提高吞吐量减少延迟。

## 服务器端安装 ##

V2Ray 提供了一个在 Linux 中的自动化安装脚本。这个脚本会自动检测有没有安装过 V2Ray，如果没有，则进行完整的安装和配置；如果之前安装过 V2Ray ，则只更新 V2Ray 二进制程序而不更新配置。

> 以下指令假设已在 `su` 环境下，如果不是，请先运行 `sudo su`。

运行下面的指令下载并安装 V2Ray。

```bash
bash <(curl -L -s https://install.direct/go.sh)
```

看到类似于下面这样的提示就算安装成功了，如果安装不成功脚本会有红色的提示语句，这个时候你应当按照提示除错，除错后再重新执行一遍脚本安装 V2Ray。对于错误提示如果看不懂，使用翻译软件翻译一下就好。

```output
PORT:xxxxx
UUID:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx
Created symlink from /etc/systemd/system/multi-user.target.wants/v2ray.service to /lib/systemd/system/v2ray.service.
V2Ray v3.xx is installed.
```

## VMess协议 ##

脚本默认配置好了 VMess 协议。在首次安装完成之后，V2Ray 不会自动启动，需要手动运行下列命令操作 V2Ray。服务器端 V2Ray 启动后把脚本安装命令输出的 PORT:和 UUID：后面的参数输入客户端就可畅游网络了。

使用以下命令启动 V2Ray:

```bash
systemctl start v2ray
```

停止运行 V2Ray：

```bash
systemctl stop v2ray
```

重启 V2Ray:

```bash
systemctl restart v2ray
```

## Shadowsocks协议 ##

要支持 Shadowsocks 协议，需要修改配置文件，在 inbound[]中的｛vmess｝协议下中增加｛shadowsocks｝片段代码，修改后重启 V2Ray 生效，配置文件路径为 /etc/v2ray/config.json。

```json
"inbound": [
   {

     "protocol": "vmess",

     ...

   },

   {

     "protocol": "shadowsocks",

     "port": 30001,

     "settings": {

       "method": "aes-256-cfb",

       "password": "password",

       "udp": false,

       "network": "tcp"

     }

   }

],
```

### 自定义参数 ###

- "port": 端口,
- "password": "密码",
- "method": "加密方法",

详细说明请参照[官方文档](https://v2ray.com/chapter_02/02_protocols.html)

## BBR 拥塞控制 ##

BBR 是 Google 开源的拥塞控制算法，已提交给 Linux 内核。 BBR 算法可以显著提高吞吐量并减少连接延迟起到加速效果，内核从 4.9 开始已经内置该算法。

命令 `uname -r`  可查看内核，内核低的自个去升级吧，这里不做相关概述。

命令  `lsmod | grep bbr` 查看 BBR 模块是否载入，如果结果中没有  `tcp_bbr`  的话就执行下述命令，一行一个。

```bash
modprobe tcp_bbr  
echo "tcp_bbr" >> /etc/modules-load.d/modules.conf
echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf  
echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf  
```

保存生效

```bash  
sysctl -p
```

执行

```bash
sysctl net.ipv4.tcp_available_congestion_control  
sysctl net.ipv4.tcp_congestion_control  
```

如果结果都有 `bbr` , 则证明你的内核已开启 bbr。看到有 tcp_bbr 模块即说明 bbr 已启动，这样，就可以畅爽体验互联网了。
