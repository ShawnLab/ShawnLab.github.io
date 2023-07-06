(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{396:function(a,t,s){"use strict";s.r(t);var r=s(2),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("Aria2 是一款支持多种协议的轻量级多线程命令行下载工具。")]),a._v(" "),s("h2",{attrs:{id:"特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[a._v("#")]),a._v(" 特性")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("多线程连线：")]),a._v(" Aria2 会自动从多个线程下载文件，并充分利用你的带宽；")]),a._v(" "),s("li",[s("strong",[a._v("轻量：")]),a._v(" 运行时不会占用过多资源，根据官方介绍，内存占用通常在 4MB~9MB，使用 BitTorrent 协议，下行速度 2.8MB/s 时 CPU 占用率约 6%；")]),a._v(" "),s("li",[s("strong",[a._v("全功能 BitTorrent 客户端")])]),a._v(" "),s("li",[s("strong",[a._v("支持 RPC 界面远程控制")])])]),a._v(" "),s("h2",{attrs:{id:"安装-aria2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-aria2"}},[a._v("#")]),a._v(" 安装 Aria2")]),a._v(" "),s("h3",{attrs:{id:"_1-macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-macos"}},[a._v("#")]),a._v(" 1. macOS")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("brew "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" aria2\n")])])]),s("h3",{attrs:{id:"_2-linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-linux"}},[a._v("#")]),a._v(" 2. Linux")]),a._v(" "),s("p",[a._v("Linux 推荐用 GUI 客户端 uGet")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" aria2\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" uget\n")])])]),s("h3",{attrs:{id:"_3-windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-windows"}},[a._v("#")]),a._v(" 3. Windows")]),a._v(" "),s("p",[a._v("Windows 偷懒用设置范本："),s("a",{attrs:{href:"https://github.com/RossWang/Aria2-Integration/tree/master/Bin",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载地址和使用说明"),s("OutboundLink")],1),a._v("，配置文件参考下面的说明酌情修改 aria2.conf 文件即可。")]),a._v(" "),s("h2",{attrs:{id:"设置配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置配置文件"}},[a._v("#")]),a._v(" 设置配置文件")]),a._v(" "),s("p",[a._v("Aria2 提供两种方式使用，一种是直接命令行模式下载，不推荐使用这种方法，推荐使用另外一种 RPC 模式，这种方式 Aria2 启动之后只会安静的等待下载请求，下载完成后也只会安静的驻留后台不会自动退出。而使用 RPC 模式推荐做一个配置文件方便使用。下面以 macOS 为例做详细解说：\n我们把配置文件放在 "),s("code",[a._v("~/.aria2")]),a._v(" 下，依次输入命令")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" .aria2\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" .aria2\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("touch")]),a._v(" aria2.conf\n")])])]),s("p",[a._v("接着打开 Finder，利用 Shift+Cmd+G 进入路径："),s("code",[a._v("~/.aria2/aria2.conf")]),a._v("，用文本编辑器打开 aria2.conf，将以下配置直接拷贝进去：")]),a._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#用户名")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#rpc-user=user")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#密码")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#rpc-passwd=passwd")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#上面的认证方式不建议使用,建议使用下面的token方式")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#设置加密的密钥")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#rpc-secret=token")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#允许rpc")]),a._v("\nenable"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("rpc"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#允许所有来源, web界面跨域权限需要")]),a._v("\nrpc"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("allow")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("origin"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("all"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#允许外部访问，false的话只监听本地端口")]),a._v("\nrpc"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("listen")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("all"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#RPC端口, 仅当默认端口被占用时修改")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#rpc-listen-port=6800")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#最大同时下载数(任务数), 路由建议值: 3")]),a._v("\nmax"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("concurrent"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("downloads"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#断点续传")]),a._v("\ncontinue"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#同服务器连接数最大16")]),a._v("\nmax"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("connection"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("per"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("server")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#最小文件分片大小, 下载线程数上限取决于能分出多少片, 对于小文件重要，最小1M")]),a._v("\nmin"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("split"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("size"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("M\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#单文件最大线程数, 受同服务器连接数限制，路由建议值: 5")]),a._v("\nsplit"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#下载速度限制")]),a._v("\nmax"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("overall"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("download"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("limit"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#单文件速度限制")]),a._v("\nmax"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("download"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("limit"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#上传速度限制")]),a._v("\nmax"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("overall"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("upload"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("limit"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#单文件速度限制")]),a._v("\nmax"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("upload"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("limit"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#断开速度过慢的连接")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#lowest-speed-limit=0")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#验证用，需要1.16.1之后的release版本")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#referer=*")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#文件保存路径, 默认为当前启动位置")]),a._v("\ndir"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("Users"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("xxx"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("Downloads\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#文件缓存, 使用内置的文件缓存, 如果你不相信Linux内核文件缓存和磁盘内置缓存时使用, 需要1.16及以上版本")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#disk-cache=0")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#另一种Linux文件缓存方式, 使用前确保您使用的内核支持此选项, 需要1.15及以上版本(?)")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#enable-mmap=true")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#文件预分配, 能有效降低文件碎片, 提高磁盘性能. 缺点是预分配时间较长")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#所需时间 none < falloc ? trunc « prealloc, falloc和trunc需要文件系统和内核支持")]),a._v("\nfile"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("allocation"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("prealloc\n\n")])])]),s("p",[a._v("默认下载路径的「/Users/xxx/Downloads」可以改为任何你想要的绝对路径。此处写为 Downloads 目录，xxx 请自行替换成你的 Mac 用户名，然后保存，退出编辑器。")]),a._v(" "),s("h2",{attrs:{id:"启动-rpc-模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动-rpc-模式"}},[a._v("#")]),a._v(" 启动 RPC 模式")]),a._v(" "),s("ol",[s("li",[a._v("macOS 推荐用 Alfred Workflow 脚本："),s("a",{attrs:{href:"https://github.com/Wildog/Ariafred/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("Ariafred"),s("OutboundLink")],1)]),a._v(" "),s("li",[a._v("Windows 推荐用 vbs 脚本，在 Aria2 程序目录新建文本文档重命名为 HideRun.vbs，复制下列命令到文档中保存")])]),a._v(" "),s("div",{staticClass:"language-vbnet extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vbnet"}},[s("code",[a._v("CreateObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"WScript.Shell"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("."),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Run")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"aria2c.exe --conf-path=aria2.conf"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n")])])]),s("h2",{attrs:{id:"浏览器扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器扩展"}},[a._v("#")]),a._v(" 浏览器扩展")]),a._v(" "),s("ol",[s("li",[a._v("Chrome 推荐："),s("a",{attrs:{href:"https://chrome.google.com/webstore/detail/camtd-aria2-download-mana/lcfobgbcebdnnppciffalfndpdfeence",target:"_blank",rel:"noopener noreferrer"}},[a._v("Camtd"),s("OutboundLink")],1),a._v(" - Aria2 下载管理器")]),a._v(" "),s("li",[a._v("Firefox 推荐："),s("a",{attrs:{href:"https://addons.mozilla.org/zh-CN/firefox/addon/aria2-integration/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Aria2 Integration"),s("OutboundLink")],1),a._v(" - Aria2 下载器集成组件")])])])}),[],!1,null,null,null);t.default=e.exports}}]);