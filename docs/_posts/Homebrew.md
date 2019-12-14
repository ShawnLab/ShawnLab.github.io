---
category: 醉翁之翼
tags:
  - 效率
  - macOS
date: 2019-03-27
title: Homebrew：优雅高效的管理 macOS 软件
vssue-title: Homebrew
---

> The missing package manager for macOS (or Linux)

<!-- more -->

[Homebrew](https://brew.sh/index_zh-cn) 的定位是 macOS 缺失的软件包的管理器，安装 Apple 没有预装但 [你需要的东西](https://formulae.brew.sh/formula/)。在 2.0 版本后更是支持了 Linux 和 Windows Subsystem for Linux 。 历经 10 年的发展，macOS 下绝大部分软件都能用 Homebrew 管理了，安装、卸载、更新都只需要一个简单的命令。目前除了少数只在 AppStore 上架和不支持 Homebrew 管理的软件，我一律使用 Homebrew 管理。

## 安装

> 因 Homebrew 相关服务器在国外请自行科学上网

将以下命令粘贴至终端，脚本会在执行前暂停，并说明将它将做什么。高级安装选项在 [这里](https://docs.brew.sh/Installation)

```sh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## 使用帮助

Homebrew 的可执行命令是 brew，其基本使用方法如下（以 python 为例）。

查找软件包

```sh
brew search python
```

> 对于有界面的软件，安装、卸载、更新都在 brew 后跟 cask ，如安装微信：`brew cask insatll wechat` brew cask 可用命令使用：`brew cask －h` 查看。

安装软件包

```sh
brew install python
```

列出已安装的软件包

```sh
brew list
```

卸载软件包

```sh
brew uninstall python
```

查看软件包信息

```sh
brew info python
```

列出软件包的依赖关系  

```sh
brew deps python
```

更新 brew

```sh
brew update
```

列出过时的软件包（已安装但不是最新版本）

```sh
brew outdated
```

更新过时的全部软件包

```sh
brew upgrade
```

更新过时的指定软件包

```sh
brew upgrade python
```

清理过时的软件包下载缓存

```sh
brew cleanup
```

## 软件仓库

虽然 Homebrew 内置的两个仓库 homebrew-core、homebrew-cask 包含了绝大部分软件，但还是推荐添加如下两个仓库，然后就可以搜到相关软件了。

homebrew-cask-fonts：字体仓库，Powerline 字体包含在内

```sh
brew tap homebrew/cask-fonts
```

homebrew-cask-versions：替换版本仓库，如安装多个版本的 JDK

```sh
brew tap homebrew/cask-versions
```

天高任鸟飞，海阔凭鱼跃，余下的特性自由探索吧。
