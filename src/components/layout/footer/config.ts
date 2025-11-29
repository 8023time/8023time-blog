import { createElement } from 'react';
import { BiliBiliIcon, QQIcon, TiktokIcon, TwitterIcon, GithubIcon } from '@components/icons/social-contact';

export const SITE_INFO = {
  socialIcons: [
    { name: 'X', icon: createElement(TwitterIcon), to: 'https://x.com/Alice577536738' },
    { name: 'bilibili', icon: createElement(BiliBiliIcon), to: 'https://space.bilibili.com/1906238729' },
    { name: 'GitHub', icon: createElement(GithubIcon), to: 'https://github.com/8023time' },
    { name: 'QQ', icon: createElement(QQIcon), to: 'https://weibo.com/2162105974' },
    { name: '抖音', icon: createElement(TiktokIcon), to: 'https://zhihu.com/你的账号' },
  ],
  stats: '哇，本站居然运行了 410 天 10 小时 10 分 30 秒 🤯😯🎉',
};

export const SITE_DATA = [
  {
    title: '文章杂记',
    items: [
      { name: '文章分类', to: '/articles/category' },
      { name: '最近更新', to: '/articles/latest' },
      { name: '随机文章', to: '/articles/random' },
      { name: '分类归档', to: '/articles/category' },
      { name: '标签归档', to: '/articles/tag' },
      { name: '随笔记录', to: '/articles/diary' },
    ],
  },
  {
    title: '个人空间',
    items: [
      { name: 'ai聊天', to: '/chat' },
      { name: '照相馆', to: '/polaroidPhoto' },
      { name: '留言区', to: '/comments' },
      { name: '回忆相册', to: '/album' },
      { name: '网站分析', to: '/statistics' },
      { name: '网站集合', to: '/site' },
    ],
  },
  {
    title: '工具推荐',
    items: [
      { name: 'console-brand', to: 'https://console-brand.8023time.com' },
      { name: '哲风壁纸', to: 'https://haowallpaper.com/' },
      { name: '画图软件', to: 'https://excalidraw.com/' },
      { name: '配色表', to: 'http://www.peiseka.cn/' },
      { name: '开源图标', to: 'https://yesicon.app/' },
      { name: 'figma', to: 'https://www.figma.com/' },
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
];

export const SITE_COPYRIGHT = '©2024 - 2025 BY 8023time';
