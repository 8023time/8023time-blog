import type { FC } from 'react';
import '@styles/tailwindcss.css';
import router from '@router/index';
import { RouterProvider } from 'react-router';
import { FloatButton } from '@components/ui/float-button';
import { ScrollProgressBar } from '@components/ui/page-scroll-progress';

const App: FC = () => {
  return (
    <>
      {/* 顶部进度条 */}
      <ScrollProgressBar />
      {/* 上拉按钮 */}
      <FloatButton.BackTop />
      {/* 路由 */}
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};
export default App;
