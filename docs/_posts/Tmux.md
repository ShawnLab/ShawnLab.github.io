---
category: 醉翁之翼
tags:
  - Terminal
  - Beautify
date: 2020-05-18
title: 优雅高效的使用 Tmux
vssue-title: Tmux
---

![Oh My Tmux 官方展示效果](https://cloud.githubusercontent.com/assets/553208/19740585/85596a5a-9bbf-11e6-8aa1-7c8d9829c008.gif)

<!-- more -->

> Tmux 是一个终端复用器,有了它再也不用担心服务器断线。至于怎么操作的文章有很多，比如阮一峰老师的 [Tmux 使用教程](http://www.ruanyifeng.com/blog/2019/10/tmux.html)，我这里就不在详细赘述。此文主要在于提高 Tmux 的颜值，毕竟对我来说颜值才是第一生产力。

## 安装

### macOS

```sh
brew install tmux
```

### Linux

```sh
sudo apt-get install tmux
```

### AppImage

> 让 Linux 应用随处运行,给予运行权限，双击运行！无需安装！不需要改变依赖或系统配置。

CentOS 和跳板机太需要 AppImage ，真是谁用谁知道，手动编译实在困难重重，这里给出 AppImage 包的 [下载地址链接](https://github.com/nelsonenzo/tmux-appimage/releases)

```sh
chmod a+x tmux*.AppImage
mv tmux.*AppImage /usr/local/bin/tmux
```

## 配置

想手动配置的可以看这个教程：[Tmux 使用手册](http://louiszhai.github.io/2017/09/30/tmux/)，写的很详细。当然要想好看还是需要搭配 [Oh My Tmux](https://github.com/gpakosz/.tmux)，不想折腾希望开箱即用的话直接使用 Oh My Tmux 配置。

Oh My Tmux 依赖：

- tmux **`>= 2.1`**
- awk, perl and sed

在终端敲入如下命令：

```sh
cd
git clone https://github.com/gpakosz/.tmux.git
ln -s -f .tmux/.tmux.conf
cp .tmux/.tmux.conf.local .
```

## 最简操作流程

> [Oh My Tmux 快捷键列表](https://github.com/gpakosz/.tmux#bindings)

1. 新建会话 `tmux new -s session_name`。
2. 在 Tmux 窗口运行需要使用的命令。
3. 按下快捷键 `Ctrl+a d` 将会话分离。
4. 下次使用时，重新连接到会话 `tmux a -t session_name`
