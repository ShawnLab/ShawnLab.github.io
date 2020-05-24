---
category: 醉翁之翼
tags:
  - HttpRunner
date: 2019-08-13
title: HttpRunner 学习笔记
vssue-title: HttpRunner
---

HttpRunner 是一款面向 HTTP (S) 协议的通用测试框架，只需编写维护一份 `YAML/JSON` 脚本，即可实现自动化测试、性能测试、线上监控、持续集成等多种测试需求。

## 核心特性

* 继承 [Requests](http://docs.python-requests.org/en/master/) 的全部特性，轻松实现 HTTP (S) 的各种测试需求
* 采用 `YAML/JSON` 的形式描述测试场景，保障测试用例描述的统一性和可维护性
* 借助辅助函数（`debugtalk.py`），在测试脚本中轻松实现复杂的动态计算逻辑
* 支持完善的测试用例分层机制，充分实现测试用例的复用
* 测试前后支持完善的 hook 机制
* 响应结果支持丰富的校验机制
* 基于 HAR 实现接口录制和用例生成功能（[har2case](https://github.com/HttpRunner/har2case)）
* 结合 [Locust](http://locust.io/) 框架，无需额外的工作即可实现分布式性能测试
* 执行方式采用 CLI 调用，可与 Jenkins 等持续集成工具完美结合
* 测试结果统计报告简洁清晰，附带详尽统计信息和日志记录
* 极强的可扩展性，轻松实现二次开发和 Web 平台化

## 用例设计

以 YAML 为例。

test_httpbin.yml  

```yaml
- config:
    name: testcase description
    base_url: http://www.httpbin.org
- test:  
    name: get request  
    request:  
        url: /get  
        method: GET  
    validate:  
        - eq: [status_code,200]
```

* `config`：作为整个测试用例集的全局配置项
* `test`：对应单个测试用例
* `name` 这个 test 的名字
* `request` 这个 test 具体发送 http 请求的各种信息，如下:
* `url` 请求的路径 (若 config 中有定义 base_url, 则完整路径是用 base_url +url)
* `method` 请求方法 POST, GET 等等
* `validate` 完成请求后，所要进行的验证内容。所有验证内容均通过该 test 才算通过，否则失败.

## 参数关联：例如获取Token

在 HttpRunner 中，支持参数提取（`extract`）和参数引用的功能（`$var`）。

在测试步骤（test）中，若需要从响应结果中提取参数，则可使用 `extract` 关键字。extract 的列表中可指定一个或多个需要提取的参数。

在提取参数时，当 HTTP 的请求响应结果为 JSON 格式，则可以采用`.` 运算符的方式，逐级往下获取到参数值；响应结果的整体内容引用方式为 content 或者 body。

例如，接口 `/api/get-token` 的响应结果为：

```json
{"success": true, "token": "ZQkYhbaQ6q8UFFNE"}
```

那么要获取到 token 参数，就可以使用 content.token 的方式；具体的写法如下：

```yaml
extract:
    token: content.token
```

其中，token 作为提取后的参数名称，可以在后续使用 `$token` 进行引用。

```yaml
headers:
    device_sn: FwgRiO7CNA50DSU
    token: $token
    Content-Type: application/json
```

test_extract.yaml

```yaml
- config:
    name: testcase description
    variables: {}

- test:
    name: /api/get-token
    request:
        headers:
            Content-Type: application/json
            User-Agent: python-requests/2.18.4
            app_version: 2.8.6
            device_sn: FwgRiO7CNA50DSU
            os_platform: ios
        json:
            sign: 9c0c7e51c91ae963c833a4ccbab8d683c4a90c98
        method: POST
        url: http://127.0.0.1:5000/api/get-token
    extract:
        token: content.token
    validate:
        - eq: [status_code, 200]
        - eq: [headers.Content-Type, application/json]
        - eq: [content.success, true]

- test:
    name: /api/users/1000
    request:
        headers:
            Content-Type: application/json
            User-Agent: python-requests/2.18.4
            device_sn: FwgRiO7CNA50DSU
            token: $token
        json:
            name: user1
            password: '123456'
        method: POST
        url: http://127.0.0.1:5000/api/users/1000
    validate:
        - eq: [status_code, 201]
        - eq: [headers.Content-Type, application/json]
        - eq: [content.success, true]
        - eq: [content.msg, user created successfully.]
```

## 文件上传

在 HttpRunner 中使用了 requests_toolbelt 的 MultipartEncoder 来实现文件上传。

upload.yaml

```yaml
- config:
    name: test upload file with httpbin
    base_url: http://www.httpbin.org

- test:
    name: upload file
    variables:
        file_path: "data/test.env"
        multipart_encoder: ${multipart_encoder(file=$file_path)}
    request:
        url: /post
        method: POST
        headers:
            Content-Type: ${multipart_content_type($multipart_encoder)}
        data: $multipart_encoder
    validate:
        - eq: ["status_code", 200]
        - startswith: ["content.files.file", "UserName=test"]
```
