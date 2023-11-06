import { defineConfig } from 'vitepress'
import linuxSidebar from './sidebar/linux'

const ipcMap = {
  'zhaozhuo.pro': '京ICP备2021036256号-1',
  'dianlan.online': '京ICP备2021036256号-2'
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "zhaozhuo'notes",
  description: "一个前端工程师的学习笔记，升级打怪记录。主要的技术栈是 Vue。学习方向富文本编辑器、nodejs、组件库、前端工程化。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Linux', link: '/linux/basis' }
    ],

    sidebar: {
      '/linux/': linuxSidebar(),
      '/fe/': {
        text: '前端',
        base: '/fe/',
      },
      '/demo/': {
        text: '示例',
        base: '/demo/',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhaozhuoboy' }
    ],
    footer: {
      message: `<a href="http://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">京ICP备2021036256号-2</a>`,
      copyright: `Copyright © 2021 - ${new Date().getFullYear()} All Rights Reserved.`
    },
    search: {
      provider: 'local'
    }
  }
})
