---
category: 醉翁之翼
tags:
  - Robot Framework
  - Jenkins
  - Allure
date: 2019-05-07
title: Robot Framework 之 Jenkins 持续集成
vssue-title: Robotium-Jenkins
---

## 安装插件

搜索并安装如下插件:

- 增强参数化构建：`Extended Choice Parameter Plug-In`
- 美观详细化报表：`Allure Jenkins Plugin`
- 中文本地化插件：`Localization: Chinese (Simplified)`

## 新建任务

新建一个 `自由风格（Freestyle project）`的任务

### 设置参数化构建过程

参数化这里需要 4 个步骤

1、在 `General` 下勾选`参数化构建过程（This project is parameterized）`

2、下拉添加参数选择 `Extended Choice Parameter`

![添加参数](https://raw.githubusercontent.com/ShawnLab/ShawnLab.github.io/media/Add%20Parameter.png "image")

`参数化构建过程`的参数设置

`Name` : 参数名

`Parameter Type` : `Single Select` 是单选， `Check Boxes` 和 `Multiple Selection` 两者都是多选，但后者要按住 `Ctrl` 键，需要多一只手来操作，所以多选建议选择 `Check Boxes`

`Number of Visible Items` : 设置下拉多选框的可见范围，有多少写多少

`Delimiter` : 设置参数分隔符，默认为英文逗号

![参数设置](https://raw.githubusercontent.com/ShawnLab/ShawnLab.github.io/media/Extended%20Choice%20Parameter.png "image")

`Value` : 可选的参数值，这里我填的是 Robot Framework 的命令行参数，`-i, --include <tag>` 和 `-e, --exclude <tag>`

![参数设置](https://raw.githubusercontent.com/ShawnLab/ShawnLab.github.io/media/Choose%20Source%20for%20Value.png "image")

`Default value` : 默认选中值

![参数设置](https://raw.githubusercontent.com/ShawnLab/ShawnLab.github.io/media/Choose%20Source%20for%20Default.png "image")

`Description`：值的描述

![Description](https://raw.githubusercontent.com/ShawnLab/ShawnLab.github.io/media/Choose%20Source%20for%20Value%20Description.png "image")

3、接下来参考上面的步骤再次添加一个 `Extended Choice Parameter`，`Parameter Type` 选择 `Check Boxes`，`Delimiter` 为 `OR`

![参数设置](https://raw.githubusercontent.com/ShawnLab/ShawnLab.github.io/media/Robot%20Framework%20Tags.png "image")

4、配置 Appium Server 的地址参数，下拉添加参数选择 `String Parameter`

![参数设置](https://raw.githubusercontent.com/ShawnLab/ShawnLab.github.io/media/Appium%20Server%20Address.png "image")

### 构建设置

下拉`增加构建步骤`，选择 `Execute Windows batch command`，输入如下命令

```batch
echo %Tags% %Server%
@echo off
ping 127.0.0.1 -n 6 > nul
call python -m robot --variable HOST:%Server% %Filter% %Tags% --listener allure_robotframework %WORKSPACE%\TestSuites\
exit 0
```

命令组成详解：

1、Build step `执行 Windows 批处理命令` marked build as failure

原因：Jenkins 执行命令，会把命令生成一个批处理文件执行，而 robot 命令对于批处理来说是外部命令，所以要加 call 表示调用。而 Jenkins 执行 Windows 命令, 若退出代码不为 0 , 则 Jenkins 会将构建标记为失败，所以需要加上 exit 0 表示执行完成退出

解决方法：构建命令在 robot 前面加上 call，最后加上 exit 0

### 构建后操作

下拉`增加构建后操作步骤`，选择 `Allure Report`，Results 的 Path 栏 输入`output\allure`，然后点击保存，至此项目已配置完成。

![参数设置](https://raw.githubusercontent.com/ShawnLab/ShawnLab.github.io/media/Allure%20Report.png "image")

## 开始构建

点击 `Build with Parameters` 进入如下构建页面，点击`开始构建`会自动执行过滤后的测试用例.
![开始构建](https://raw.githubusercontent.com/ShawnLab/ShawnLab.github.io/media/Build%20Robotium.png "image")
