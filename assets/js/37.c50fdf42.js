(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{418:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("本文主要讲解如何使用 pre-commit 结合静态代码分析工具。")])]),t._v(" "),a("p",[t._v("学习前端发现了 Husky 能在 git commit 的时候自动触发代码格式化和检查，于是我想 Python 也应该有此类工具，就搜索到了 pre-commit")]),t._v(" "),a("h2",{attrs:{id:"pre-commit-说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-commit-说明"}},[t._v("#")]),t._v(" pre-commit 说明")]),t._v(" "),a("p",[t._v("pre-commit 预提交，是 git hooks 中的一个钩子，由 "),a("code",[t._v("git commit")]),t._v(" 命令调用，可以通过 "),a("code",[t._v("--no-verify")]),t._v(" 参数绕过调用 "),a("code",[t._v("pre-commit")]),t._v("。通常用于在提交代码前，进行代码规范检查。")]),t._v(" "),a("p",[t._v("为了更方便的管理 pre-commit 的设置，于是有了一个同名的工具项目 pre-commit，一个用于管理和维护多语言预提交挂钩的框架。官网地址："),a("a",{attrs:{href:"https://pre-commit.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://pre-commit.com/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("PS：由于工具项目名称和 git hooks 的钩子同名，容易混淆概念，主要注意一下。这里我们详细说明使用的则是同名的工具项目，而不是 git 自身的 pre-commit 脚本钩子")]),t._v(" "),a("h2",{attrs:{id:"pre-commit-框架使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-commit-框架使用"}},[t._v("#")]),t._v(" pre-commit 框架使用")]),t._v(" "),a("p",[t._v("此框架是多语言的，这里以 Python 为例，下面内容均为 Python 相关的使用说明。版本为最新版 2.19.0")]),t._v(" "),a("p",[t._v("pre-commit 框架，随着发展，已经不单单只能用于 git hooks 的 pre-commit 阶段，而是能作用于所有 git hooks 的所有阶段，如上面说的 "),a("code",[t._v("prepare-commit-msg")]),t._v(", "),a("code",[t._v("commit-msg")]),t._v(", "),a("code",[t._v("post-commi")]),t._v(" 等，具体有哪些阶段，参考 git 官方文档："),a("a",{attrs:{href:"https://git-scm.com/docs/githooks",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://git-scm.com/docs/githooks"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("也就是说，pre-commit 不单单可以用于规范代码检测，还可以在 git 的不同阶段，自定义做出各种不同的操作，灵活性很大，非常好用。")]),t._v(" "),a("h3",{attrs:{id:"使用步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用步骤"}},[t._v("#")]),t._v(" 使用步骤")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("安装")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 直接使用pip安装即可")]),t._v("\npip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pre-commit\n")])])]),a("p",[t._v("安装成功后，使用 "),a("code",[t._v("pre-commit --version")]),t._v(" 可正常查看版本。")])]),t._v(" "),a("li",[a("p",[t._v("设置配置文件\npre-commit 依赖项目根目录配置文件 "),a("code",[t._v(".pre-commit-config.yaml")]),t._v("。"),a("strong",[t._v("需要手动在根目录创建此文件。")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在根目录执行如下命令，生成一个默认的配置，python版本")]),t._v("\npre-commit sample-config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" .pre-commit-config.yaml\n")])])]),a("p",[a("strong",[t._v("这里配置的详细设置，后面详细说，这里先使用官方示例。")])])]),t._v(" "),a("li",[a("p",[t._v("设置 git hooks 钩子脚本\npre-commit 框架是通过 git hooks 本身的钩子来调用的，所以在设置好配置文件后，会根据配置，在 git 项目中将钩子脚本配置到 "),a("code",[t._v(".git/hooks")]),t._v(" 路径下。")]),t._v(" "),a("p",[t._v("因为 pre-commit 框架支持各种不同阶段的钩子，所以需要根据配置，配置中使用到什么阶段的钩子，就回自动配置对应的 "),a("code",[t._v("hooks")]),t._v(" 脚本到 "),a("code",[t._v(".git/hooks")]),t._v(" 中")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 直接执行此命令，设置git hooks钩子脚本")]),t._v("\npre-commit "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("对所有文件进行一次检查 (可选)\n配置设置好后，默认是需要 "),a("code",[t._v("git commit")]),t._v(" 命令来出发调用的，只会检查 "),a("code",[t._v("git commit")]),t._v(" 中变更的文件。对所有文件进行检查：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 直接执行此命令，进行全文件检查，--all-files 可简写为 -a")]),t._v("\npre-commit run --all-files\n")])])])]),t._v(" "),a("li",[a("p",[t._v("常用命令")])])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("pre-commit gc "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 清理未使用的缓存 repo")]),t._v("\npre-commit clean "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 清除缓存的 pre-commit 文件")]),t._v("\npre-commit autoupdate "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将 pre-commit 的配置自动更新到最新的 repos 版本")]),t._v("\n")])])]),a("h3",{attrs:{id:"pre-commit-config-yaml-配置详细描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-commit-config-yaml-配置详细描述"}},[t._v("#")]),t._v(" .pre-commit-config.yaml 配置详细描述")]),t._v(" "),a("p",[t._v("首先，是顶层的全局配置，配置项有如下这些：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("字段名")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("repos")]),t._v(" "),a("td",[t._v("（必需）存储库映射列表")])]),t._v(" "),a("tr",[a("td",[t._v("default_install_hook_types")]),t._v(" "),a("td",[t._v("（可选：默认 [pre-commit]）--hook-type 列表，在运行 pre-commit install 时默认使用。")])]),t._v(" "),a("tr",[a("td",[t._v("default_language_version")]),t._v(" "),a("td",[t._v("（可选：默认 {}）从语言到应用于该语言的默认 language_version 的映射。这只会覆盖没有设置 language_version 的单个钩子。")])]),t._v(" "),a("tr",[a("td",[t._v("default_stages")]),t._v(" "),a("td",[t._v("（可选：默认 (all stages)）钩子的 stages 属性的配置范围默认值。这只会覆盖没有设置 stages 的单个钩子。")])]),t._v(" "),a("tr",[a("td",[t._v("files")]),t._v(" "),a("td",[t._v('（可选：默认 ""）全局文件包含模式，正则匹配。')])]),t._v(" "),a("tr",[a("td",[t._v("exclude")]),t._v(" "),a("td",[t._v("（可选：默认^$）全局文件排除模式，正则匹配。")])]),t._v(" "),a("tr",[a("td",[t._v("fail_fast")]),t._v(" "),a("td",[t._v("（可选：默认 false）设置为 true 时，预提交将在第一次失败后停止运行钩子。")])]),t._v(" "),a("tr",[a("td",[t._v("minimum_pre_commit_version")]),t._v(" "),a("td",[t._v("（可选：默认 '0'）需要的最低 pre-commit 版本。")])])])]),t._v(" "),a("p",[t._v("举个例子说明一下，一般常用的顶层配置大致如下：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置默认的阶段为commit，只在提交时进行检查")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default_stages")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" commit\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置默认的语言版本，你也可以在每个repos中单独设置language_version")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default_language_version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("python")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" python3.8\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置排除的文件，正则匹配，这个也可以在每个repos中的hooks脚本中单独配置，以灵活实现不同文件对不同规则的检测排除")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exclude")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^$"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 起码顶层配置，一般使用默认值即可。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这个repos配置下面的内容，就是最重要的核心配置，下面细说")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repos")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n")])])]),a("h4",{attrs:{id:"repos-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#repos-配置"}},[t._v("#")]),t._v(" repos 配置")]),t._v(" "),a("p",[t._v("repos 配置是一个存储库映射列表，用来告诉 pre-commit 从哪里获取钩子的代码。其有三个下层配置，都是必填，如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("字段名")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("repo")]),t._v(" "),a("td",[t._v("git clone 的存储库 url")])]),t._v(" "),a("tr",[a("td",[t._v("rev")]),t._v(" "),a("td",[t._v("git clone 要拉取的 tag 或者 revision")])]),t._v(" "),a("tr",[a("td",[t._v("hooks")]),t._v(" "),a("td",[t._v("钩子映射列表，也就是要进行检测的钩子列表")])])])]),t._v(" "),a("p",[t._v("第二层配置很简单，就是指定 repo 库的地址和版本 tag，拉取代码，然后指定使用这个库中具体的哪些 hooks 脚本。")]),t._v(" "),a("p",[t._v("其中，"),a("code",[t._v("hooks")]),t._v(" 配置为核心配置。\n有哪些 hooks 脚本可选，都是从 git 库中的配置获得。需要具体看这个 git 库的使用方式。因此允许自定义库，自定义 hooks 脚本，然后通过 pre-commit 拉取使用。")]),t._v(" "),a("p",[t._v("hooks 配置下层又有如下配置项：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("字段名")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("（必须）要使用存储库中的哪个钩子，钩子的 id")])]),t._v(" "),a("tr",[a("td",[t._v("alias")]),t._v(" "),a("td",[t._v("（可选）允许钩子在使用 pre-commit 运行 时使用额外的 id 来引用，一般不常用。")])]),t._v(" "),a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[t._v("（可选）重写钩子的名称 - 在钩子执行时显示")])]),t._v(" "),a("tr",[a("td",[t._v("language_version")]),t._v(" "),a("td",[t._v("（可选）覆盖钩子的语言版本")])]),t._v(" "),a("tr",[a("td",[t._v("files")]),t._v(" "),a("td",[t._v("（可选）覆盖默认的文件包含，正则匹配模版")])]),t._v(" "),a("tr",[a("td",[t._v("exclude")]),t._v(" "),a("td",[t._v("（可选）覆盖默认的文件排除，正则匹配模版")])]),t._v(" "),a("tr",[a("td",[t._v("types")]),t._v(" "),a("td",[t._v("（可选）要运行的文件类型列表 (AND)")])]),t._v(" "),a("tr",[a("td",[t._v("types_or")]),t._v(" "),a("td",[t._v("（可选）要在 (OR) 上运行的文件类型列表")])]),t._v(" "),a("tr",[a("td",[t._v("exclude_types")]),t._v(" "),a("td",[t._v("（可选）要排除的文件的类型列表")])]),t._v(" "),a("tr",[a("td",[t._v("args")]),t._v(" "),a("td",[t._v("（可选）要传递给钩子的附加参数列表")])]),t._v(" "),a("tr",[a("td",[t._v("stages")]),t._v(" "),a("td",[t._v("（可选）将钩子限制在 "),a("code",[t._v("commit")]),t._v(", "),a("code",[t._v("merge-commit")]),t._v(", "),a("code",[t._v("push")]),t._v(", "),a("code",[t._v("prepare-commit-msg")]),t._v(", "),a("code",[t._v("commit-msg")]),t._v(", "),a("code",[t._v("post-checkout")]),t._v(", "),a("code",[t._v("post-commit")]),t._v(", "),a("code",[t._v("post-merge")]),t._v(", "),a("code",[t._v("post-rewrite")]),t._v(", or "),a("code",[t._v("manual")]),t._v(" 阶段。这也就是 git 自身支持的不同阶段的钩子")])]),t._v(" "),a("tr",[a("td",[t._v("additional_dependencies")]),t._v(" "),a("td",[t._v("（可选）将被安装在该钩子运行的环境中的依赖项列表。")])]),t._v(" "),a("tr",[a("td",[t._v("always_run")]),t._v(" "),a("td",[t._v("（可选）如果为 true，即使没有匹配的文件，这个钩子也会运行")])]),t._v(" "),a("tr",[a("td",[t._v("verbose")]),t._v(" "),a("td",[t._v("（可选）如果为 true，则强制打印该钩子的输出，即使该钩子通过")])]),t._v(" "),a("tr",[a("td",[t._v("log_file")]),t._v(" "),a("td",[t._v("（可选）日志文件路径，如果存在，当钩子失败或 verbose 为 true 时，钩子输出将额外写入此文件")])])])]),t._v(" "),a("h2",{attrs:{id:"实用配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实用配置"}},[t._v("#")]),t._v(" 实用配置")]),t._v(" "),a("p",[t._v("举例说明，下面就列出一份 Python 版本的配置，看看一般常见的配置是怎样的。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exclude")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" (migrations/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("test/)\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repos")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/pre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("commit/pre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("hooks\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rev")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v3.2.0\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hooks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" trailing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("whitespace\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("markdown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("linebreak"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ext=md"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("of"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("fixer\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" check"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("toml\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" check"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("yaml\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" check"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("added"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("large"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("files\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("maxkb=51200"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" requirements"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("txt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("fixer\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" check"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("merge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("conflict\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/psf/black\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rev")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 22.3.0\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hooks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" black\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("skip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("normalization"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exclude")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" migrations/\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/charliermarsh/ruff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("commit\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rev")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v0.0.277"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hooks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ruff\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("fix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("exit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("non"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("zero"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("fix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("如上，则是一个常用的检测配置，使用了 "),a("code",[t._v("ruff")]),t._v(" （包含 flake8、pylint、isort、pyupgrade 等的规则）进行静态代码检查，black 进行代码格式化，同时还添加了 pre-commit 框架项目提供的一些公共 hooks，具体的使用说明（更多 args 和自定义配置），可以直接访问各 repo 地址，查看文档说明。")]),t._v(" "),a("h3",{attrs:{id:"自动启用-pre-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动启用-pre-commit"}},[t._v("#")]),t._v(" 自动启用 pre-commit")]),t._v(" "),a("p",[t._v("看上面的介绍和使用，会发现有个问题：从 git 库中 clone 一个项目到本地后，即使项目中有 "),a("code",[t._v(".pre-commit-config.yaml")]),t._v(" 配置文件，但是 "),a("code",[t._v(".git/hooks")]),t._v(" 中还是没有设置钩子，需要运行 "),a("code",[t._v("pre-commit install")]),t._v(" 安装后，才能正常使用。")]),t._v(" "),a("p",[t._v("那如果要让他根据 "),a("code",[t._v(".per-commit-config.yaml")]),t._v(" 配置自动安装 git 钩子呢？让我们直接 clone 项目后，便自动启用了 pre-commit。")]),t._v(" "),a("p",[t._v("官方给了一个解决方式：\n使用 "),a("code",[t._v("pre-commit init-templatedir")]),t._v(" 命令，自动设置 git 项目的初始化模版，在版本中自动执行 "),a("code",[t._v("pre-commit install")]),t._v(" 以启用 pre-commit。")]),t._v(" "),a("p",[t._v("设置步骤如下：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置git全局变量，制定初始化模版目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global init.templateDir ~/.git-template\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 自动设置初始化模版")]),t._v("\npre-commit init-templatedir ~/.git-template\n")])])]),a("p",[t._v("ok，到此就可以了，然后可以测试一下，clone 一个带 "),a("code",[t._v(".per-commit-config.yaml")]),t._v(" 配置的库，然后进行提交，则会自动进行 pre-commit 的检测。如果没有 "),a("code",[t._v(".per-commit-config.yaml")]),t._v(" 配置，则会跳过，普通正常使用。")]),t._v(" "),a("p",[t._v("pre-commit 还有很多的命令和用法，这里只是列举了常见的使用，如果要进行更高级的自定义和使用，详细参考官方文档："),a("a",{attrs:{href:"https://pre-commit.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://pre-commit.com/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("官方文档比较简单，看起来也不难，以上大多都是官方文档中的内容，后续更新和使用也以官方文档为准")]),t._v(" "),a("p",[t._v("参考文章：")]),t._v(" "),a("p",[t._v("1、"),a("a",{attrs:{href:"https://amos-x.com/index.php/amos/archives/pre-commit/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 项目管理，代码规范 pre-commit 使用详解"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);