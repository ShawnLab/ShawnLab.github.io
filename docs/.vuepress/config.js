// .vuepress/config.js

module.exports = {
    // 网站 Title
    title: '醉翁之翼',
  
    // 网站描述
    description: '有的路，你必须一个人走，这不是孤独，而是选择！',
  
    // 网站语言
    locales: {
      '/': {
        lang: 'zh-CN',
      },
    },
  
    // 使用的主题
    theme: 'meteorlxy',
  
    // 主题配置
    themeConfig: {
      // 主题语言
      lang: require('vuepress-theme-meteorlxy/lib/langs/zh-CN'),
  
      // 个人信息
      personalInfo: {
        // 昵称
        nickname: '醉翁之翼',
  
        // 个人简介
        description: 'Happy Coding<br/>Happy Life',
  
        // 电子邮箱
        email: 'mcomax@outlook.com',
  
        // 所在地
        location: 'ShenZhen City, China',

        // 头像
        // 设置为外部链接
        avatar: 'https://raw.githubusercontent.com/ShawnLab/ShawnLab.github.io/media/avatar.jpg',
        // 或者放置在 .vuepress/public 文件夹，例如 .vuepress/public/img/avatar.jpg
        // avatar: '/img/avatar.jpg',
        
  
        // 社交平台帐号信息
        sns: {
          // Github 帐号和链接
          github: {
            account: 'ShawnLab',
            link: 'https://github.com/ShawnLab',
          },
  
          // LinkedIn 帐号和链接
          linkedin: {
            account: 'mcomax',
            link: 'http://www.linkedin.com/in/mcomax',
          },
        },
      },
  
      // 上方 header 的相关设置
      header: {
        // header 的背景，可以使用图片，或者随机变化的图案（geopattern）
        background: {
          // 使用图片的 URL，如果设置了图片 URL，则不会生成随机变化的图案，下面的 useGeo 将失效
          //url: '/assets/img/bg.jpg',
  
          // 使用随机变化的图案，如果设置为 false，且没有设置图片 URL，将显示为空白背景
          useGeo: true,
        },
  
        // 是否在 header 显示标题
        showTitle: true,
      },
  
      // 是否显示文章的最近更新时间
      lastUpdated: true,
  
      // 顶部导航栏内容
      nav: [
        { text: '首页', link: '/', exact: true },
        { text: '文章', link: '/posts/', exact: false },
      ],
  
      // 评论配置
      comments: false,
    },
  }