import { BiliBiliIon, QQIcon, TiktokIcon, TwitterIcon, GithubIcon, AvatarIcon } from '@components/icons';

export const footerData = {
  top: {
    avatar: AvatarIcon,
    socialIcons: [
      { name: 'X', icon: TwitterIcon, to: 'https://x.com/Alice577536738' },
      { name: 'bilibili', icon: BiliBiliIon, to: 'https://space.bilibili.com/1906238729' },
      { name: 'GitHub', icon: GithubIcon, to: 'https://github.com/8023time' },
      { name: 'QQ', icon: QQIcon, to: 'https://weibo.com/2162105974' },
      { name: '抖音', icon: TiktokIcon, to: 'https://zhihu.com/你的账号' },
    ],
    stats: '哇，本站居然运行了 400 天 10 小时 10 分 30 秒 🤯😯🎉',
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
        { name: '回忆相册', to: '/album' },
        { name: '留言版区', to: '/comments' },
        { name: '音乐天地', to: '/music' },
        { name: '个人简历', to: '/music' },
        { name: '照相馆', to: '/PolaroidPhoto' },
      ],
    },
    {
      title: '工具推荐',
      items: [
        { name: '图标库', to: 'https://yesicon.app/' },
        { name: '简历修改器', to: '/tools/resume' },
        { name: '渐变背景生成器', to: 'https://www.lingdaima.com/jianbianse/' },
      ],
    },
    {
      title: '友情链接',
      items: [
        { name: 'chatGpt', to: 'https://chatgpt.com' },
        { name: 'claude', to: 'https://claude.com' },
        { name: 'grok', to: 'https://grok.com' },
        { name: 'gemini', to: 'https://gemini.google.com/app' },
        { name: 'deepSeek', to: 'https://deepseek.com' },
        { name: '豆包', to: 'https://doubao.com' },
      ],
    },
  ],

  copyright: '©2024 - 2025 BY 8023time',
};
