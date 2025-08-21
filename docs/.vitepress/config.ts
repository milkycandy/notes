import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "牛奶糖的STM32笔记",
  description: "大块牛奶糖的STM32笔记",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  lang: 'zh-CN',

  base: '/stm32/',
  cleanUrls: 'with-subfolders',
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '基础篇', link: '/basic-gpio' }
    ],

    sidebar: [
      {
        text: '学习笔记',
        items: [
          { text: 'GPIO基础', link: '/basic-gpio' },
        ]
      }
    ]
  }
})