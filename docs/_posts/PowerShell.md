---
category: 醉翁之翼
tags:
  - PowerShell
  - Beautify
date: 2019-03-30
title: 优雅高效的使用 PowerShell
vssue-title: PowerShell
---

![主题Agnoster](https://raw.githubusercontent.com/ShawnLab/ShawnLab.github.io/media/Agnoster.png)

<!-- more -->

## 概览 #

> 本文所述需在 PowerShell V5 及以上执行，Win10 以下 需要安装[补丁](https://www.microsoft.com/en-us/download/details.aspx?id=54616)升至 V5

PowerShell 模块：

* [posh-git](https://github.com/dahlbyk/posh-git)
* [oh-my-posh](https://github.com/JanDeDobbeleer/oh-my-posh)
* [PSReadLine](https://github.com/lzybkr/PSReadLine)
* [Get-ChildItemColor](https://github.com/joonro/Get-ChildItemColor)

Powerline 字体：

* [Sarasa Gothic](https://github.com/be5invis/Sarasa-Gothic)

Terminal 终端：

* [Terminus](https://github.com/Eugeny/terminus)

## 模块安装 ##

### oh-my-posh & posh-git ###

> 推荐用 Scoop 安装，方便管理模块，对 Scoop 不了解的可查看文章 [Scoop：优雅高效的管理 Windows 软件](/posts/2019/03/28/scoop.md)

```sh
scoop install oh-my-posh
```

安装 `oh-my-posh` 会顺带安装好 `posh-git` ，可使用如下命令查看是否已安装：

```sh
scoop list
```

如果未安装请使用如下命令手动安装：

```sh
scoop install posh-git
```

### PSReadLine ###

> PSReadLine在 V5 或以上版本中自带，目前Win7建议不要升级，Win10建议用快捷键 `Win＋ R` 运行下面的第一条命令升级

```sh
powershell -noprofile -command "Install-Module PSReadLine -Force -SkipPublisherCheck
```

或者

```sh
powershell -noprofile -command "Update-Module PSReadLine
```

### Get-ChildItemColor ###

> 此模块只在 PowerShellGallery 有，需要在 PowerShell 中运行命令安装

```powershell
Install-Module Get-ChildItemColor
```

或者

```powershell
Install-Module Get-ChildItemColor -Scope CurrentUser
```

## 字体安装 ##

Sarasa Gothic 是国人开发的一款字体，中文名叫更纱黑体，显示效果出众，支持 Powerline。Scoop 仓库默认是没有这个字体的，还需要加个库，命令如下：

```sh
scoop bucket add nerd-fonts
```

然后就可以安装更纱黑体了，命令如下：

```sh
scoop install sarasagothic
```

## 终端安装 ##

> PowerShell GUI 可自定义的选项非常少，而在Win7上配置字体很麻烦，且 PowerShell GUI 不能识别更纱黑体，但必须配置Powerline字体才能发挥效果，不然会出现很多方框！！！于是颜值出众的 Terminus 就被推荐了。

```sh
scoop install terminus
```

安装好后，点击设置齿轮 ⚙ 设置字体为更纱黑体，GUI 工具就不详细介绍怎么设置了。

## 配置 ##

### 新建配置 ###

上面的模块安装完后并未启用，要启用必须写入配置文件，通过下面的命令可打开记事本新建个人配置：

```sh
if (!(Test-Path -Path $PROFILE )) { New-Item -Type File -Path $PROFILE -Force } notepad $PROFILE
```

### 启用模块 ###

拷贝如下配置到上个命令打开的记事本中并保存，重新打开 PowerShell 后即可看到效果

```powershell
# 导入模块的语法为：Import-Module 模块名
Import-Module posh-git

Import-Module oh-my-posh
# 设置主题
Set-Theme PowerLine

Import-Module PSReadLine
# 设置自动补全
Set-PSReadLineKeyHandler -Key Tab -Function Complete

Import-Module Get-ChildItemColor
# 设置命令别号，输出彩色文件名
Set-Alias l Get-ChildItemColor -option AllScope
Set-Alias ls Get-ChildItemColorFormatWide -option AllScope
```
