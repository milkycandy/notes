import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "大块牛奶糖的笔记本",
  description: "大块牛奶糖的笔记本",
  lastUpdated: true,

  themeConfig: {
    logo: {
      src: '/logo.png'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/milkycandy' },
      {
        icon: {
          svg: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="zhuzhan-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.73252 2.67094C3.33229 2.28484 3.33229 1.64373 3.73252 1.25764C4.11291 0.890684 4.71552 0.890684 5.09591 1.25764L7.21723 3.30403C7.27749 3.36218 7.32869 3.4261 7.37081 3.49407H10.5789C10.6211 3.4261 10.6723 3.36218 10.7325 3.30403L12.8538 1.25764C13.2342 0.890684 13.8368 0.890684 14.2172 1.25764C14.6175 1.64373 14.6175 2.28484 14.2172 2.67094L13.364 3.49407H14C16.2091 3.49407 18 5.28493 18 7.49407V12.9996C18 15.2087 16.2091 16.9996 14 16.9996H4C1.79086 16.9996 0 15.2087 0 12.9996V7.49406C0 5.28492 1.79086 3.49407 4 3.49407H4.58579L3.73252 2.67094ZM4 5.42343C2.89543 5.42343 2 6.31886 2 7.42343V13.0702C2 14.1748 2.89543 15.0702 4 15.0702H14C15.1046 15.0702 16 14.1748 16 13.0702V7.42343C16 6.31886 15.1046 5.42343 14 5.42343H4ZM5 9.31747C5 8.76519 5.44772 8.31747 6 8.31747C6.55228 8.31747 7 8.76519 7 9.31747V10.2115C7 10.7638 6.55228 11.2115 6 11.2115C5.44772 11.2115 5 10.7638 5 10.2115V9.31747ZM12 8.31747C11.4477 8.31747 11 8.76519 11 9.31747V10.2115C11 10.7638 11.4477 11.2115 12 11.2115C12.5523 11.2115 13 10.7638 13 10.2115V9.31747C13 8.76519 12.5523 8.31747 12 8.31747Z" fill="currentColor"></path></svg>'
        },
        link: 'https://space.bilibili.com/8625447'
      }
    ],

    editLink: {
      pattern: 'https://github.com/milkycandy/notes/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '上次更新于'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    sidebarMenuLabel: '目录',

    returnToTopLabel: '回到顶部',

    search: {
      provider: 'local'
    },

    nav: [
      { text: '主页', link: '/' },
      { text: 'STM32', link: '/stm32/' },
      { text: 'ESP32', link: '/esp32/' },
      { text: 'Linux', link: '/linux/' }
    ],

    footer: {
      message: '基于 MIT 许可发布 | 版权所有 © 2025 <a href="https://github.com/milkycandy">大块牛奶糖</a>',
      copyright: '鲁ICP备2022022379号-1'
    },

    sidebar: {
      '/stm32/': [
        {
          text: '前言',
          collapsed: false,
          items: [
            { text: '前言', link: '/stm32/index' },
            { text: '认识STM32L476RG', link: '/stm32/intro/stm32l476rg.md' },
            { text: '认识NUCLEO-L476RG开发板', link: '/stm32/intro/nucleo_l476rg.md' },
            { text: '参考资料', link: '/stm32/intro/reference' }
          ]
        },
        {
          text: '从上电到main',
          collapsed: false,
          link: '/stm32/from-power-on-to-main',
          items: [
          ]
        }
      ],
      '/esp32/': [
        {
          text: 'ESP32',
          items: [
            { text: 'TODO', link: '/esp32/index' },
          ]
        }
      ],
      '/linux/': [
        {
          text: 'Linux',
          items: [
            { text: 'TODO', link: '/linux/index' },
          ]
        }
      ]
    }

  }
})
