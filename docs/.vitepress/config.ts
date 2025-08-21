import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '牛奶糖的笔记',
  description: 'STM32 / Linux 技术笔记',
  cleanUrls: 'with-subfolders',
  lastUpdated: true,

  // head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'STM32', link: '/stm32/' },
      { text: 'Linux', link: '/linux/' }
    ],


    // logo: '/logo.png',

    footer: {
      message: '鲁ICP备2022022379号-1',
      copyright: '© 2025 大块牛奶糖'
    },

    sidebar: {
      // 针对 /stm32/ 下的页面
      '/stm32/': [
        {
          text: 'STM32 学习笔记',
          items: [
            { text: 'GPIO 基础', link: '/stm32/basic-gpio' }
          ]
        }
      ],

      // 针对 /linux/ 下的页面
      '/linux/': [
        {
          text: 'Linux 学习笔记',
          items: [
          ]
        }
      ]
    }
  }
})
