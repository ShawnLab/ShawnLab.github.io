---
category: 醉翁之翼
tags:
  - 效率
  - PowerShell
date: 2019-06-01
title: Alias：优雅高效的执行脚本命令
vssue-title: Alias
---

> 此文所述文本编辑器为 Visual Studio Code，以下简称 Code，大家可以根据喜好替换

## macOS or Linux

用 Code 编辑配置文件，没装 Code 的话可以把 code 换成 vim

```shell
code ~/.zshrc
```

### 1、设置命令行程序代理

在配置文件中加入如下片段就可以在终端中使用命令 `proxy` 设置代理，`disxy` 去除代理

```shell
alias proxy='export http_proxy=http://127.0.0.1:7890 https_proxy=http://127.0.0.1:7890'
alias disxy='unset http_proxy https_proxy'
```

### 2、直接进入常用目录

```shell
alias pylab='cd ~/Codes/Python/ShawnLab'
```

### 3、快速打开 UI Automator Viewer

```shell
export ANDROID_HOME=~/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
alias uier='~/Library/Android/sdk/tools/bin/uiautomatorviewer'
```

## Windows

用 Code 编辑配置文件,没装 Code 的话可以把 code 换成 notepad

```powershell
if (!(Test-Path -Path $PROFILE )) { New-Item -Type File -Path $PROFILE -Force } code $PROFILE
```

### 1、快速打开 PowerShell 个人配置文件

> 语法解析：`function 功能名称 { 命令语句 }`，功能名称可直接执行，名称太长可以用 `Set-Alias` 设置别名

使用别名 `pspf` 把上面那一串打开个人配置的命令打包，以后在终端键入 `pspf` 就能直接编辑个人配置了。

```powershell
function PowerShellProfile { if (!(Test-Path -Path $PROFILE )) { New-Item -Type File -Path $PROFILE -Force } code $PROFILE }
Set-Alias pspf PowerShellProfile
```

### 2、Windows 设置命令行程序代理

Windows 设置代理需要管理员权限，先装个小工具提权

```powershell
scoop install sudo
```

在配置文件中加入如下片段就可以在终端中使用命令 `proxy` 设置代理，`disxy` 去除代理

```powershell
function proxy { sudo netsh winhttp set proxy 127.0.0.0.1:7890 }
function disxy { sudo netsh winhttp reset proxy }
```

### 3、使 Scoop 更好用

- 使用命令 `scsp` 设置代理，`scrp` 去除代理

  ```powershell
  function scsp { scoop config proxy 127.0.0.0.1:7890 }
  function scrp { scoop config rm proxy }
  ```

- 使用命令 `susc` 升级所有应用并清除旧版本

  ```powershell
  function susc { scoop update * ; scoop cleanup * }
  ```

### 4、启动 Jenkins

> 语法解析： `param ($port = 8080)` 是把脚本参数化，定义一个变量 `$port` 并附上默认值，`$env:USERPROFILE` 为 PowerShell 系统变量，代表用户目录。

```powershell
function Jenkins { param ($port = 8080) java -jar '$env:USERPROFILE\Sync\Jenkins\jenkins.war' --httpPort=$port }
Set-Alias ojk Jenkins
```

### 5、直接进入常用目录

```powershell
function ShawnLab { Set-Location $env:USERPROFILE\Codes\Python\ShawnLab }
Set-Alias pylab ShawnLab
```

### 6、Android 相关

- 快速打开 UI Automator Viewer

  > 此功能需要设置 Android SDK 中 adb 的环境变量才有效

  ```powershell
  function uier { uiautomatorviewer.bat }
  ```

- 一步截图并保存到指定位置

  ```powershell
  function screencap { param ($name = 'sc') adb shell screencap -p /sdcard/$name.png ; adb pull /sdcard/$name.png $env:USERPROFILE\Pictures }
  Set-Alias assp screencap
  ```

- 抓取 Cruzr 的 log 并保存到指定位置

  > ()中的命令先执行，然后通过 | 管道把值传替给 adb pull 当参数，这个命令随着我的离职，不知道还有几个人会使用

  ```powershell
  function Alog { param ($hour = 1) adb pull (adb shell todo getlog $hour | findstr sdcard) \$env:USERPROFILE\Downloads }
  Set-Alias clog Alog
  ```
