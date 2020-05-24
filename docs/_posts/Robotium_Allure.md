---
category: 醉翁之翼
tags:
  - Robot Framework
  - Appium
  - Allure
date: 2019-05-05
title: Robot Framework 用上美观的测试报告 Allure
vssue-title: RobotHub
---

Robot Framework 自带的报表比较简单，现在使用 Allure 报表来增强体验

## 安装命令行工具

1、Windows

> 推荐用 Scoop 安装，方便管理，自动配置环境变量。对 Scoop 不了解的可查看文章[Scoop：优雅高效的管理 Windows 软件](/posts/2019/03/28/scoop.md)

```sh
scoop install allure
```

2、macOS

> macOS软件包安装离不开 Homebrew ，对 Homebrew 不了解的可查看文章[Homebrew：优雅高效的管理 macOS 软件](/posts/2019/03/27/homebrew.md)

```sh
brew install allure
```

## 与 Robot Franework 集成

```sh
pip install allure-robotframework
```

运行时增加 `--listener` 参数使 Robot Framework 监听 Allure

```sh
robot --listener allure_robotframework ./my_robot_test
```

## 生成报表

```sh
allure generate ResultsDir -c -o ReportsDir
```

ResultsDir 为 Allure 生成的 xml 格式的文件目录，ReportsDir 为报表生成目录。

## 修复 Allure 报表截图不显示

创建自定义库 AllureHelper.py  并在`*** Settings ***`引入

```py
import allure
from robot.libraries.BuiltIn import BuiltIn

class AppiumLibraryHelper(object):
    ROBOT_LIBRARY_SCOPE = "TEST SUITE"
    ROBOT_LISTENER_API_VERSION = 2

    def __init__(self):
        self.ROBOT_LIBRARY_LISTENER = self

    def _start_suite(self, name, attrs):
         BuiltIn().set_library_search_order('AllureHelper')

    def capture_page_screenshot(self, filename=None):
        ul = BuiltIn().get_library_instance('AppiumLibrary')
        path = ul._get_screenshot_paths(filename)[0]
        allure.attach.file(path, name="screenshot", attachment_type=attachment_type.JPG)
        return path
```
