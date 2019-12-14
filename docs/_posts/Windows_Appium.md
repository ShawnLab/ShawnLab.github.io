---
category: 醉翁之翼
tags:
  - Appium
  - Windows
date: 2019-03-31
title: Windows 搭建 Appium 环境
vssue-title: Windows-Appium
---

> 本文基于 Windows 10 实践

Appium 是一个开源的自动化测试框架， 用与 native， hybrid 和 mobile web 应用。它使用 WebDriver 协议驱动 iOS， Android，和 Windows 应用 。

<!-- more -->

## 环境依赖 #

* JDK
* Yarn
* Python
* Node.js
* Andriod SDK

## 安装环境依赖 ##

> 推荐用 Scoop 安装，方便管理，自动配置环境变量。对 Scoop 不了解的可查看文章[Scoop：优雅高效的管理 Windows 软件](/posts/2019/03/28/scoop.md)

```sh
scoop install git
scoop bucket add extras
scoop bucket add java
scoop install adopt8-hotspot
scoop install yarn
scoop install python
scoop install nodejs-lts
scoop install android-sdk
scoop install android-studio
```

## Appium 安装 ##

> Appium安装过程中有一node-gyp模块需要用到Python2或者Visual Studio Build Tools可参考[模块官方解决方法][1]

Yarn 全局安装 Appium

```powershell
yarn global add appium
```

## Appium Doctor ##

> 因为 Scoop 会自动配置环境变量，所以 ANDROID_HOME，JAVA_HOME 都不需要手动配置

安装 appium-doctor

```powershell
yarn global add appium-doctor
```

在命令行中运行

```powershell
appium-doctor
```

> 检查项目全部✔则表Aappium环境搭建成功,其它情况会有提示说明怎么解决。

### Appium-Python-Client ###

在命令行中通过如下命令进行安装：

```poweshell
pip install Appium-Python-Client
```

  [1]: https://github.com/nodejs/node-gyp#on-windows
