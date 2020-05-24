---
category: 醉翁之翼
tags:
  - Robot Framework
  - Appium
date: 2019-05-01
title: Robot Framework 之启动安卓应用
vssue-title: Robotium-Android
---

## 代码示例

如下代码以打开微信为例：

1、首先在 Settings 下引入 AppiumLibrary 库

2、然后在 Test Cases 下新建用例名为“打开微信”的测试用例

3、使用 AppiumLibrary 库中 Open Application 关键字打开微信

```robot
*** Settings ***

Library     AppiumLibrary

*** Test Cases ***

打开微信
    Open Application    http://localhost:4723/wd/hub    platformName=Android    platformVersion=6.0.1
    ...    deviceName=192.168.31.225:5555    appPackage=com.tencent.mm    appActivity=.ui.LauncherUI
    ...    noReset=True    unicodeKeyboard=True    resetKeyboard=True    automationName=UiAutomator2

```

## 代码详解

Open Application 参数：

`http://localhost:4723/wd/hub`：为 Appium 服务器端通信接口，端口默认为 4723

`platformName`：为平台名称

`platformVersion`：为平台版本

`deviceName`：为设备名称，通过命令 `adb devices` 获取, device 前面的字段就是设备名称，示例用的 IP 连接，所以设备名称也为 IP，通过 USB 连接的设备名称为英文字母组合。

```sh
adb devices
List of devices attached
192.168.31.225:5555   device
```

`appPackage`：为应用包名，`appActivity`：为可启动的活动名称，可通过命令 `adb shell dumpsys activity activities | findstr mFocusedActivity` 获取，以微信为例，`/` 前面时包名，后面为活动名称。

> Linux 或 macOS 可把 findstr 换成 grep

```sh
adb shell dumpsys activity activities | findstr mFocusedActivity
  mFocusedActivity: ActivityRecord{eb4f68a u0 com.tencent.mm/.ui.LauncherUI, isShadow:false t200}
```

`noReset`：是否重置应用，需保留应用数据时置为 True

`unicodeKeyboard`：需输入输入中文时置为 True

`resetKeyboard`：是否重置键盘

`automationName`：Appium 1.14 后默认使用 UiAutomator2， 1.13 前默认使用 UiAutomator1
