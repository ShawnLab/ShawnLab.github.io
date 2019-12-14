---
category: 醉翁之翼
tags:
  - 效率
  - Windows
date: 2019-03-28
title: Scoop：优雅高效的管理 Windows 软件
vssue-title: Scoop
---

> A command-line installer for Windows

<!-- more -->

## 前言

发现 Scoop 是在 18 年 12 月中旬折腾测试报告框架 Allure 的时候，文档里写着 `For Windows, Allure is available from the Scoop commandline-installer.` 安装命令： `scoop install allure` 笔者在 Windows 上用过类似的项目 Chocolatey ，但用不惯，可能是遇上 Chocolatey 的时机不对。在 macOS 上用 Homebrew 用的非常爽，在 Windows 下看到新玩意就想研究下，于是我就点击文档里的链接去看看 Scoop 是何方神圣，用下来发现 Scoop 有几个吸引我的地方：

* 下载链接来自软件官网，带 Hash 校验
* 软件仓库筛选严谨，不收录流氓软件
* 软件静默安装、卸载、更新，无复杂操作
* 自动配置被安装软件的环境变量，不污染系统环境变量

这么好用的工具怎么会没有文章介绍呢？于是我用关键字：“Windows Scoop”在 Google 搜了一下，发现 Chawye Hsu、SPNCR 两位作者的文章写的非常好，其中 Chawye Hsu 在 2015 年就开始使用 Scoop，我怎么没能早点发现 Scoop 呢！

Chawye Hsu：

[用 Scoop 改善 Windows Powershell](https://www.h404bi.com/blog/2015/08/23/use-scoop-to-enhance-windows-powershell.html)  
[再谈谈 Scoop 这个 Windows 下的软件包管理器](https://www.h404bi.com/blog/2018/05/12/talk-about-scoop-the-package-manager-for-windows-again.html)

SPNCR：

[「一行代码」搞定软件安装卸载，用 Scoop 管理你的 Windows 软件](https://sspai.com/post/52496)  
[给 Scoop 加上这些软件仓库，让它变成强大的 Windows 软件管理器](https://sspai.com/post/52710)  

## 安装

> 安装 Scoop 需要 [PowerShell 3](https://docs.microsoft.com/zh-cn/powershell/scripting/install/installing-windows-powershell?view=powershell-6#upgrading-existing-windows-powershell) 或以上、[.NET Framework 4.5](https://dotnet.microsoft.com/download) 或以上， Win10 满足条件，Win7 可点击这两个依赖的链接下载相关软件或补丁进行升级，建议升级到最新版本。

以管理员权限打开 PowerShell ，然后依次键入如下两条命令并回车，遇到 Y/N 询问全部键入 Y 并回车

```powershell
Set-ExecutionPolicy RemoteSigned -scope CurrentUser
iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
```

## 使用帮助

> 其实上面两位作者的文章都讲的差不多了，我就记录一下我常用的几个命令和几个常用的库

在命令行中输输入下面的命令就可以了解 Scoop 的大概用法：

```powershell
scoop -h
```

上面的命令会输出如下帮助信息：

```Usage
Usage: scoop <command> [<args>]

Some useful commands are:

alias       Manage scoop aliases
bucket      Manage Scoop buckets
cache       Show or clear the download cache
checkup     Check for potential problems
cleanup     Cleanup apps by removing old versions
config      Get or set configuration values
create      Create a custom app manifest
depends     List dependencies for an app
export      Exports (an importable) list of installed apps
help        Show help for a command
home        Opens the app homepage
info        Display information about an app
install     Install apps
list        List installed apps
prefix      Returns the path to the specified app
reset       Reset an app to resolve conflicts
search      Search available apps
status      Show status and check for new app versions
uninstall   Uninstall an app
update      Update apps, or Scoop itself
virustotal  Look for app's hash on virustotal.com
which       Locate a shim/executable (similar to 'which' on Linux)


Type 'scoop help <command>' to get help for a specific command.
```

## 效率命令

> 上面帮助信息里的命令都很好理解了，带`app`字样的就跟上软件名称作为参数，就不做过多介绍了，下面就介绍几个隐藏稍微深一点但用的多的维护Scoop所安装软件的命令

更新所有软件

```powershell
scoop update *
```

清理所有老版本

```powershell
scoop cleanup *
```

清理所有下载缓存

```powershell
scoop cache rm *
```

## 软件仓库

软件仓库是 Scoop 很重要的一环，如果没几个软件可用来安装，那 Scoop 就是个摆设，下面通过我所安装的软件列表介绍几个仓库

Scoop 安装的软件列表

```powershell
scoop list
```

会输出类似下图的信息

![scoop list](https://raw.githubusercontent.com/ShawnLab/ShawnLab.github.io/media/scoop_list.png)

在上面的图中黄色方括号非常耀眼，那是我添加的仓库，在你搜索软件时，主仓库没有的就会有提示 `scoop bucket add 库名`，添加仓库需要 Git 支持，系统没有 Git 时会提示使用下面的命令安装 Git

```powershell
scoop install git
```

extras：有界面的常用软件仓库

```powershell
scoop bucket add extras
```

version：软件替换版本仓库

```powershell
scoop bucket add version
```

java：替换版本的 JDK 仓库

```powershell
scoop bucket add java
```

nerd-fonts：Powerline 字体仓库

```powershell
scoop bucket add nerd-fonts
```
