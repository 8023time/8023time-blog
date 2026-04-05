import type { ReactNode } from 'react';

interface HeaderMenuConfig {
  title: string;
  path?: string;
  icon?: ReactNode;
  subMenu?: HeaderMenuConfig[];
}

export const headerMenuConfig: HeaderMenuConfig[] = [
  {
    title: '此站点',
    path: '/',
    subMenu: [
      { title: '首页', path: '/' },
      { title: '关于', path: '/about' },
      { title: '网站分析', path: '/statistics' },
    ],
  },
  {
    title: '个人空间',
    path: '/polaroidPhoto',
    subMenu: [
      { title: '技能', path: '/skill' },
      { title: 'ai聊天', path: '/chat' },
      { title: '留言区', path: '/comments' },
      { title: '网站合集', path: '/site' },
    ],
  },

  {
    title: '文章杂记',
    subMenu: [
      { title: '全部文章', path: '/essay' },
      { title: '按时间分类', path: '/essay/time-line' },
      { title: '按标签分类', path: '/essay/tags' },
    ],
  },
  {
    title: '小玩意',
    subMenu: [
      {
        title: '我的世界',
        path: 'https://minecraft.8023time.com',
      },
      { title: 'console-brand', path: 'https://console-brand.8023time.com' },
    ],
  },
  {
    title: '快捷链接',
    subMenu: [
      { title: 'GitHub', path: 'https://github.com/8023time' },
      { title: 'CSDN', path: 'https://blog.csdn.net/qq_41931605' },
      { title: 'YouTube', path: 'https://www.youtube.com/channel/UCQRRtKumwrHbgY0kORl-hBw' },
      { title: 'X', path: 'https://x.com/Alice577536738' },
    ],
  },
];
