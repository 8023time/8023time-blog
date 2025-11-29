import type { ReactNode } from 'react';

interface HeaderMenuConfig {
  title: string;
  path?: string;
  icon?: ReactNode;
  subMenu?: HeaderMenuConfig[];
}

export const headerMenuConfig: HeaderMenuConfig[] = [
  {
    title: '首页',
    path: '/',
    subMenu: [
      { title: '此网站', path: '/about/site' },
      { title: '关于作者', path: '/about/author' },
      { title: '网站分析', path: '/statistics' },
    ],
  },
  {
    title: '个人空间',
    path: '/polaroidPhoto',
    subMenu: [
      { title: '留言区', path: '/comments' },
      { title: '技能', path: '/skill' },
      { title: '网站合集', path: '/site' },
    ],
  },

  {
    title: '文章杂记',
    subMenu: [
      { title: '分类', path: '/category' },
      { title: '标签', path: '/tag' },
      { title: '归档', path: '/archive' },
    ],
  },
  {
    title: '工具推荐',
    subMenu: [{ title: 'console-brand', path: 'https://console-brand.8023time.com' }],
  },
  {
    title: '快捷链接',
    subMenu: [
      { title: 'GitHub', path: 'https://github.com/8023time' },
      { title: 'Gitee', path: 'https://gitee.com/8023time' },
      { title: 'CSDN', path: 'https://blog.csdn.net/qq_41931605' },
      { title: '简书', path: 'https://www.jianshu.com/u/f0c5}' },
    ],
  },
];
