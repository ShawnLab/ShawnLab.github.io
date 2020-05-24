---
category: 醉翁之翼
tags:
  - Appium
  - macOS  
date: 2019-03-31
title: macOS搭建Appium环境
vssue-title: macOS-Appium
---

Appium 是一个开源的自动化测试框架， 用与 native， hybrid 和 mobile web 应用。它使用 WebDriver 协议驱动 iOS， Android，和 Windows 应用 。

<!-- more -->

## 环境依赖

> macOS软件包安装离不开 Homebrew ，对 Homebrew 不了解的可查看文章[Homebrew：优雅高效的管理 macOS 软件](/posts/2019/03/27/homebrew.md)

* JDK
* Yarn
* Python
* Node.js
* Android SDK

## 安装环境依赖

```sh
brew cask install adoptopenjdk8
brew install yarn
brew install python
brew install node
```

## 安装 Appium

### 加速npm安装速度

因 npm package 服务器在国外，所以我们切换到淘宝的镜像服务器

```sh
npm config set registry https://registry.npm.taobao.org
```

### 全局安装

```sh
yarn global add appium
```

## 安装 appium-doctor

```sh
yarn global add appium-doctor
```

安装完成之后，执行 `appium-doctor` 检查 appium 环境

> 检查项目全部显示 ✔ 则表 Appium 环境搭建成功，有 ✖ 的地方，Appium Doctor 都会提示解决方案

常见问题解决：

* WARN AppiumDoctor  ✖ JAVA_HOME is NOT set
* WARN AppiumDoctor  ✖ Bin directory for $JAVA_HOME is not set

解决：

用 vim 打开 ~/.zshrc

```sh
vim ~/.zshrc
```

在 ~/.zshrc 中添加以下配置：

```vim
export JAVA_HOME="$(/usr/libexec/java_home)"
export PATH=$PATH:$JAVA_HOME/bin
```

Android 必解问题：

* WARN AppiumDoctor  ✖ ANDROID_HOME is NOT set

使用 Homebrew 安装 Android Studio：

```sh
brew cask install android-studio
```

安装成功之后，在启动台打开 Android Studio 按照提示装好 Android SDK 然后在 `~/.zshrc` 中添加以下配置：

```vim
export ANDROID_HOME=~/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
```

最后，`~/.zshrc` 文件配置如下：

```vim
export JAVA_HOME="$(/usr/libexec/java_home)"
export ANDROID_HOME=~/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$JAVA_HOME/bin
```

执行：

```sh
source ~/.zshrc
```

iOS 必解问题：

* WARN AppiumDoctor  ✖ Xcode is NOT installed!

解决：去 App Store 搜索 Xcode 安装即可

* WARN AppiumDoctor  ✖ Xcode Command Line Tools are NOT installed

解决：

```sh
xcode-select --install # 按照提示安装即可，安装过brew的不会存在这个问题
```

* WARN AppiumDoctor  ✖ Carthage was NOT found!

解决：

```sh
brew install carthage
```

再次执行 `appium-doctor` 检查 appium 环境

以上，appium 环境就搭建完成，安装成功之后，执行：

```sh
appium
```
