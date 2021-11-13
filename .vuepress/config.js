const path = require('path')
const sidebarVue = require('./sidebar/vue.sidebar')
const sidebarReact = require('./sidebar/react.sidebar')
const sidebarWxlite = require('./sidebar/wxlite.sidebar')
const sidebarDevSkill = require('./sidebar/devskill.sidebar')
const sidebarLinux = require('./sidebar/linux.sidebar')

module.exports = {
  title: 'Dev Notes',
  description: '前端 | HTML5 CSS3 | Vue React | 开发技巧 真机调试 Nodejs',
  head: [
    ['link', { rel: 'icon', href: '/assets/favicon.ico' }]
  ],
  port: 9989,
  themeConfig: { // 主题配置
    lastUpdated: '上次更新',
    logo: '/assets/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '大前端', 
        link: '/docs/fe',
        items: [
          { text: 'Vue', link: '/docs/fe/vue/'},
          { text: 'React', link: '/docs/fe/react/' },
          { text: '小程序', link: '/docs/fe/wxlite/'}
        ]
      },
      { text: '开发', link: '/docs/dev-skills/' },
      {
        text: 'Linux',
        link: '/docs/linux/01'
      },
      { text: 'Github', link: 'https://github.com/zhaozhuoboy', target:'_blank' }
    ],
    sidebar: {
      '/docs/fe/vue/': sidebarVue,
      '/docs/fe/react/': sidebarReact,
      '/docs/fe/wxlite/': sidebarWxlite,
      '/docs/dev-skills/': sidebarDevSkill,
      '/docs/linux/': sidebarLinux
    }
  },
  markdown: {
    lineNumbers: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@image': '/assets'
      }
    }
  }
}