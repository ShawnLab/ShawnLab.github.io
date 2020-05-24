---
category: 醉翁之翼
tags:
  - Robot Framework
date: 2019-05-02
title: Robot Framework 之万能的 Evaluate
vssue-title: Robotium-Evaluate
---

## Evaluate 语法说明

| 关键字   | 参数                                     |
| -------- | ---------------------------------------- |
| Evaluate | expression, modules=None, namespace=None |

在 Python 中评估给定的表达式并返回结果。

`expression`如[评估表达式中所述](https://robotframework.org/robotframework/latest/libraries/BuiltIn.html#Evaluating%20expressions)在 Python 中进行[评估](https://robotframework.org/robotframework/latest/libraries/BuiltIn.html#Evaluating%20expressions)。

`modules`  参数可以用于指定要导入并添加到评估名称空间的 Python 模块的逗号分隔列表。

`namespace`  参数可用于将自定义评估名称空间作为字典传递。  可能`modules`添加到此命名空间。

## 样例

### 算数运算符

- 直接计算

| 变量       | 关键字   | 表达式    |
| ---------- | -------- | --------- |
| \${result} | Evaluate | 4\*10 + 2 |

- 引用变量

| 变量       | 关键字   | 表达式    |
| ---------- | -------- | --------- |
| \${result} | Evaluate | \${x} + 2 |

- 传递字典

| 变量       | 关键字            | 参数 1    | 参数 2           |
| ---------- | ----------------- | --------- | ---------------- |
| \${ns}     | Create Dictionary | x=\${4}   | y=\${2}          |
| \${result} | Evaluate          | x\*10 + y | namespace=\${ns} |

### 布尔表达式

| 变量       | 关键字   | 表达式              |
| ---------- | -------- | ------------------- |
| \${status} | Evaluate | 0 < \${result} < 10 |

### 生成随机数

> 注意不要混淆其它语言的语法，Python 里 random 模块 random.randint(x，y) 的值是闭区间，包含给定的两个数

| 变量       | 关键字   | 参数 1               | 参数 2         |
| ---------- | -------- | -------------------- | -------------- |
| \${random} | Evaluate | random.randint(0, 5) | modules=random |

### 正则表达式

> 注意：反斜杠 `\` 在 Robot Framework 里是转义字符，所以使用正则表达式要用双反斜杠 `\\` 用于转义。

```py
*** Test Cases ***

提取数字
    ${string}    Set Variable    Shawn-2.527.10-05
    ${findnumber}    Evaluate    re.findall('\\d','${string}')    re
    ${findnumbers}    Evaluate    re.findall('\\d+','${string}')    re
```

两个 findall 都是获取字符串里的数字,它们的差异只是一个是`\\d`,另一个是`\\d+`。
`\\d`就是把数字一个一个取出来,`\\d+`也是把数字取出来,如果是连续的数字作为
一个值取出。所以前者取出来的是 ['2','5','2','7','1','0','0','5'],后者取出来的是['2','527','10','05']
