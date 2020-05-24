---
category: 醉翁之翼
tags:
  - Robot Framework
date: 2019-05-03
title: Robot Framework 之 Android 疑难杂症
vssue-title: Robotium-Keywords
---

## 动态界面 UI Automator Viewer Device Screenshot 失败

在 App 动态界面，使用 UI Automator Viewer Device Screenshot 的时候总是报错，可以使用 Get Source 关键字把 UI XML 源码获取到以便于调试，有时候一次是抓取不到的，所以多试几次。

```robot
*** Settings ***
Library           AppiumLibrary

*** Keywords ***
获取界面元素
    [Arguments]    ${number}
    :FOR    ${x}    IN RANGE    ${number}
    \    ${xml}    Get Source
    \    Log Many    ${xml}
```

## 动态界面操作 Element 缓慢

动态界面通过 Get Source 拿到 Element 的属性之后，使用 Click Element 会很慢，一个步骤长达 30 秒，这完全不可忍受，所以还得改进。使用坐标点击更快，但坐标不能写死，写死坐标的话前面的 Get Source 失去了意义，而且在分辨率不同的机器上会出现兼容性问题。

1. 通过 Get Source 获得 UI XML
2. 通过 XML.Get Element Attribute 获得 bounds 属性
3. 通过正则提取 bounds 的数值计算相对坐标
4. 通过 Click A Point 点击相对坐标

```robot
*** Settings ***
Library           XML
Library           AppiumLibrary

*** Keywords ***
金手指
    [Arguments]    ${xpath}
    [Documentation]    快速定位动态界面元素座标，并点击
    ${xml}    Get Source
    ${bounds}   XML.Get Element Attribute    ${xml}    bounds    ${xpath}
    @{bounds}    Evaluate    re.findall('\\d+','${bounds}')    re
    ${x}    Evaluate    (@{bounds}[0]+@{bounds}[2])/2
    ${y}    Evaluate    (@{bounds}[1]+@{bounds}[3])/2
    Click A Point    ${x}    ${y}    duration=1000
```

## FrameLayout 布局使用 Click A Point 出错

FrameLayout 布局的弹窗使用 Click A Point 点击空白区域会出错，可以使用 adb shell input x y 的方式点击物理坐标。

```robot
*** Settings ***
Library           Process

*** Keywords ***
点击物理座标
    [Arguments]    ${x}    ${y}
    Run Process    adb    shell    input    tap    ${x}    ${y}
```
