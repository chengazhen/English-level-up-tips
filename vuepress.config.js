const { searchPlugin } = require('@vuepress/plugin-search')
const { defaultTheme } = require('vuepress')
const { viteBundler } = require('@vuepress/bundler-vite')
module.exports = {
  base: '/English-level-up-tips/',
  lang: 'zh-CN',
  title: 'English-level-up-tips',
  description: '这是我的第一个 VuePress 站点',
  plugins: [
    searchPlugin({
      // 配置项
    }),

  ],
  theme: defaultTheme({

    logo: '/images/logo.png',
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: 'github',
        link: 'https://github.com/azhen98/English-grammar',
      },
    ],
    sidebar: [
      {
        text: '序',
        link: '/',
      },
      {
        text: '第一部分',
        collapsible: true,
        children: [
          {
            text: '认知篇',
            link: '/part-1/1-understanding.md',
          },
          {
            text: '单词篇',
            link: '/part-1/2-vocabulary.md',
          },
          {
            text: '听力篇',
            link: '/part-1/3-listening.md',
          },
          {
            text: '阅读篇',
            link: '/part-1/4-reading.md',
          },
          {
            text: '口语篇',
            link: '/part-1/5-speaking.md',
          }]
      }]
  }),
  bundler: viteBundler({
    viteOptions: {
      build: {
        outDir: 'dist'
      }
    },
    vuePluginOptions: {},
  }),
}