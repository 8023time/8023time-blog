import Layout from '@layout/root';
import { FullPageLoading as Loading } from '@components/ui/index';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '/',
        hydrateFallbackElement: <Loading />,
        lazy: async () => {
          const { default: Component } = await import('@pages/Home/index');
          return { Component };
        },
      },
      {
        path: '/skill',
        hydrateFallbackElement: <Loading />,
        lazy: async () => {
          const { default: Component } = await import('@pages/Skill/index');
          return { Component };
        },
      },
      {
        path: '/test',
        hydrateFallbackElement: <Loading />,
        lazy: async () => {
          const { default: Component } = await import('@pages/Test/index');
          return { Component };
        },
      },
      {
        path: '/site',
        hydrateFallbackElement: <Loading />,
        lazy: async () => {
          const { default: Component } = await import('@/pages/Site/index');
          return { Component };
        },
      },
      {
        path: '/PolaroidPhoto',
        hydrateFallbackElement: <Loading />,
        lazy: async () => {
          const { default: Component } = await import('@/pages/PolaroidPhoto/index');
          return { Component };
        },
      },
      {
        path: '/comments',
        hydrateFallbackElement: <Loading />,
        lazy: async () => {
          const { default: Component } = await import('@pages/Comments/index');
          return { Component };
        },
      },
      {
        path: '/statistics',
        hydrateFallbackElement: <Loading />,
        lazy: async () => {
          const { default: Component } = await import('@pages/Statistics/index');
          return { Component };
        },
      },
      {
        path: '/album',
        hydrateFallbackElement: <Loading />,
        lazy: async () => {
          const { default: Component } = await import('@pages/album/index');
          return { Component };
        },
      },
      {
        path: '/docs',
        hydrateFallbackElement: <Loading />,
        lazy: async () => {
          const { default: Component } = await import('@pages/Docs/index');
          return { Component };
        },
        children: [
          {
            path: ':name',
            hydrateFallbackElement: <Loading />,
            lazy: async () => {
              const { default: Component } = await import('@pages/Docs/index');
              return { Component };
            },
          },
        ],
      },
      {
        path: '*',
        hydrateFallbackElement: <Loading />,
        lazy: async () => {
          const { default: Component } = await import('@components/common/404');
          return { Component };
        },
        handle: { hideFooter: true },
      },
    ],
  },
]);

export default router;
