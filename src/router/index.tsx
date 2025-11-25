import { Layout } from '@layout/root';
import { createBrowserRouter } from 'react-router';
import { FullPageLoading } from '@components/ui/loading';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '/',
        hydrateFallbackElement: <FullPageLoading />,
        lazy: async () => {
          const { default: Component } = await import('@pages/Home/index');
          return { Component };
        },
      },
      {
        path: '/skill',
        hydrateFallbackElement: <FullPageLoading />,
        lazy: async () => {
          const { default: Component } = await import('@pages/Skill/index');
          return { Component };
        },
      },
      {
        path: '/test',
        hydrateFallbackElement: <FullPageLoading />,
        lazy: async () => {
          const { default: Component } = await import('@pages/Test/index');
          return { Component };
        },
      },
      {
        path: '/site',
        hydrateFallbackElement: <FullPageLoading />,
        lazy: async () => {
          const { default: Component } = await import('@/pages/Site/index');
          return { Component };
        },
      },
      {
        path: '/PolaroidPhoto',
        hydrateFallbackElement: <FullPageLoading />,
        lazy: async () => {
          const { default: Component } = await import('@/pages/PolaroidPhoto/index');
          return { Component };
        },
      },
      {
        path: '/comments',
        hydrateFallbackElement: <FullPageLoading />,
        lazy: async () => {
          const { default: Component } = await import('@pages/Comments/index');
          return { Component };
        },
      },
      {
        path: '/statistics',
        hydrateFallbackElement: <FullPageLoading />,
        lazy: async () => {
          const { default: Component } = await import('@pages/Statistics/index');
          return { Component };
        },
      },
      {
        path: '/album',
        hydrateFallbackElement: <FullPageLoading />,
        lazy: async () => {
          const { default: Component } = await import('@pages/album/index');
          return { Component };
        },
      },
      {
        path: '/docs',
        hydrateFallbackElement: <FullPageLoading />,
        lazy: async () => {
          const { default: Component } = await import('@pages/Docs/index');
          return { Component };
        },
        children: [
          {
            path: ':name',
            hydrateFallbackElement: <FullPageLoading />,
            lazy: async () => {
              const { default: Component } = await import('@pages/Docs/index');
              return { Component };
            },
          },
        ],
      },
      {
        path: '*',
        hydrateFallbackElement: <FullPageLoading />,
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
