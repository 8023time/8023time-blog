import Layout from '@layout/root';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '/',
        lazy: async () => {
          const { default: Component } = await import('@pages/Home/index');
          return { Component };
        },
      },
      {
        path: '/skill',
        lazy: async () => {
          const { default: Component } = await import('@pages/Skill/index');
          return { Component };
        },
      },
      {
        path: '/test',
        lazy: async () => {
          const { default: Component } = await import('@pages/Test/index');
          return { Component };
        },
      },
      {
        path: '/site',
        lazy: async () => {
          const { default: Component } = await import('@/pages/Site/index');
          return { Component };
        },
      },
      {
        path: '/PolaroidPhoto',
        lazy: async () => {
          const { default: Component } = await import('@/pages/PolaroidPhoto/index');
          return { Component };
        },
      },
      {
        path: '/comments',
        lazy: async () => {
          const { default: Component } = await import('@pages/Comments/index');
          return { Component };
        },
      },
      {
        path: '/statistics',
        lazy: async () => {
          const { default: Component } = await import('@pages/Statistics/index');
          return { Component };
        },
      },
      {
        path: '/album',
        lazy: async () => {
          const { default: Component } = await import('@pages/album/index');
          return { Component };
        },
      },
      {
        path: '/docs',
        lazy: async () => {
          const { default: Component } = await import('@pages/Docs/index');
          return { Component };
        },
        children: [
          {
            path: ':name',
            lazy: async () => {
              const { default: Component } = await import('@pages/Docs/index');
              return { Component };
            },
          },
        ],
      },
      {
        path: '*',
        lazy: async () => {
          const { default: Component } = await import('@components/common/404');
          return { Component };
        },
      },
    ],
  },
]);

export default router;
