module.exports = {
  title: 'Dev Notes',
  description: '前端 | HTML5 CSS3 | Vue React | 开发技巧 真机调试 Nodejs',
  head: [
    ['link', { rel: 'icon', href: '/assets/favicon.ico' }]
  ],
  port: 9989,
  themeConfig: { // 主题配置
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
      { text: 'Github', link: 'https://github.com/zhaozhuoboy', target:'_blank' }
    ],
    sidebar: {
      '/docs/fe/': [
        {
          title: '前端',
          collapsable: false, // 是否可折叠
          children: [
            'vue/',
            'react/',
            'wxlite/'
          ]
        }
      ],
      '/docs/dev-skills/': [
        {
          title: '开发技巧',
          collapsable: false,
          children: [
            'chrome'
          ]
        }
      ]
    }
  },
  markdown: {
    lineNumbers: true
  },
  lastUpdated: 'Last Updated',
  configureWebpack: {
    resolve: {
      alias: {
        '@image': '/assets'
      }
    }
  }
}