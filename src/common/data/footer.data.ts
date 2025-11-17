export const footerData = {
  top: {
    stats: '哇，本站已经运行了 168 天 23 小时 55 分钟 🎉',
    socialIcons: [
      { name: 'GitHub', icon: '💻', to: 'https://github.com/你的账号' },
      { name: 'X', icon: '✖️', to: 'https://x.com/你的账号' },
      { name: '知乎', icon: '👨‍🎓', to: 'https://zhihu.com/你的账号' },
      { name: 'bilibili', icon: '📺', to: 'https://bilibili.com/你的账号' },
      { name: '微博', icon: '🐦', to: 'https://weibo.com/你的账号' },
    ],
  },

  categories: [
    {
      title: '文章杂记',
      items: [
        { name: '文章分类', to: '/articles/category' },
        { name: '最近更新', to: '/articles/latest' },
        { name: '随机文章', to: '/articles/random' },
      ],
    },
    {
      title: '个人空间',
      items: [
        { name: '回忆录', to: '/memory' },
        { name: '留言区', to: '/message' },
        { name: '音乐播放', to: '/music' },
      ],
    },
    {
      title: '我的工具',
      items: [
        { name: '渐变背景生成器', to: '/tools/gradient' },
        { name: '简历修改器', to: '/tools/resume' },
      ],
    },
    {
      title: '友情链接',
      items: [
        { name: '豆包', to: 'https://www.doubao.com' },
        { name: 'chatGPT', to: 'https://chat.openai.com' },
      ],
    },
  ],

  copyright: '©2024 - 2025 BY 8023time',
};
