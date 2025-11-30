import { createElement } from 'react';
import { IconHome, IconList, IconSunny, IconCalendar, IconBox } from './sidebar/Icons';

export const layoutMenu = [
  {
    name: '仪表盘',
    type: 'item' as const,
    icon: createElement(IconHome),
    path: '/cms',
  },
  {
    name: '内容管理',
    type: 'group' as const,
    children: [
      { path: '/cms/posts/create', name: '写文章', icon: createElement(IconSunny) },
      { path: '/cms/posts', name: '文章列表', icon: createElement(IconList) },
    ],
  },
  {
    name: '互动管理',
    type: 'group' as const,
    children: [
      { path: '/cms/comments', name: '评论管理', icon: createElement(IconCalendar) },
      { path: '/cms/messages', name: '留言管理', icon: createElement(IconList) },
      { path: '/cms/ai/chat', name: 'AI配置', icon: createElement(IconCalendar) },
    ],
  },
  {
    name: '其他',
    type: 'group' as const,
    children: [
      {
        name: '设置',
        icon: createElement(IconBox),
        path: '/cms/settings',
      },
    ],
  },
];
