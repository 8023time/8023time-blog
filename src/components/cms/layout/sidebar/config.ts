import { createElement } from 'react';
import { IconHome, IconList, IconSunny, IconCalendar, IconBox } from './icon';

export const layoutMenu = [
  {
    name: '仪表盘',
    type: 'item' as const,
    icon: createElement(IconHome),
    path: '/cms/',
  },
  {
    name: '内容管理',
    type: 'group' as const,
    children: [
      { path: '/cms/posts', name: '文章列表', icon: createElement(IconList) },
      { path: '/cms/posts/create', name: '写文章', icon: createElement(IconSunny) },
      { path: '/cms/categories', name: '分类管理', icon: createElement(IconCalendar) },
      { path: '/cms/tags', name: '标签管理', icon: createElement(IconBox) },
    ],
  },
  {
    name: '互动管理',
    type: 'group' as const,
    children: [{ path: '/cms/comments', name: '评论管理', icon: createElement(IconList) }],
  },
  {
    name: '媒体库',
    type: 'item' as const,
    icon: createElement(IconBox),
    path: '/cms/media',
  },
  {
    name: '设置',
    type: 'item' as const,
    icon: createElement(IconBox),
    path: '/cms/settings',
  },
];
