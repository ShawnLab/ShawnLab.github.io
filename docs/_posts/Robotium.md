---
category: 醉翁之翼
tags:
  - Robot Framework
  - Appium
date: 2019-03-31
title: Robot Framework 结合 Appium 环境搭建
vssue-title: Robotium
---

> Robot Framework 是一款基于 Python 的功能自动化测试框架。它具备良好的可扩展性，支持关键字驱动，可以同时测试多种类型的客户端或者接口，本文所述环境基于 Python 3 搭建

## 环境依赖

> 依赖环境安装教程请根据自己的系统选择参考 [Windows 搭建 Appium 环境](/posts/2019/03/31/windows-appium.md)和[macOS 搭建 Appium 环境](/posts/2019/03/31/macos-appium.md)两篇文章

- Python 3
- Appium

## 框架搭建

一个命令解决`pip install robotframework-appiumlibrary`，这个命令会自动安装下列依赖：

    robotframework-appiumlibrary==1.5.0.2
      - Appium-Python-Client [required: >=0.28, installed: 0.40]
        - selenium [required: >=3.14.1, installed: 3.141.0]
          - urllib3 [required: Any, installed: 1.24.1]
      - decorator [required: >=3.3.2, installed: 4.4.0]
      - docutils [required: >=0.8.1, installed: 0.14]
      - kitchen [required: >=1.2.4, installed: 1.2.5]
      - robotframework [required: >=2.6.0, installed: 3.1.1]
      - selenium [required: >=2.47.1, installed: 3.141.0]
        - urllib3 [required: Any, installed: 1.24.1]
      - six [required: >=1.10.0, installed: 1.12.0]

## 调试工具

Robot Editor：[下载链接](https://github.com/nokia/RED/releases) 因 RIDE 不怎么好用，所以采用 Nokia 的 RED ， Robot Framework 最初是 Nokia Networks 开发的，所以这算是官方 Editor 了。
