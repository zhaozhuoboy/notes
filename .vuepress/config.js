module.exports = {
  title: 'Danny Dev Notes',
  description: '前端 | HTML5 CSS3 | Vue React | 开发技巧 真机调试 Nodejs',
  head: [
    ['link', { rel: 'icon', href: './assets/favicon.ico' }]
  ],
  port: 9989,
  dest: './dist/', // 打包路径
  themeConfig: { // 主题配置
    logo: './assets/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '大前端', 
        link: '/fe/',
        items: [
          { text: 'Vue', link: '/fe/vue/' },
          { text: 'React', link: '/fe/react/' },
          { text: '小程序', link: '/fe/mp/'}
        ]
      },
      { text: '开发', link: '/dev-skills/' },
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@img': '/assets/'
      }
    }
  }
}