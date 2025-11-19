import './App.css';
import type React from 'react';
import router from '@router/index';
import { RouterProvider } from 'react-router';
import { FloatButton, ThemeInitializer } from '@components/index';

const App: React.FC = () => {
  return (
    <>
      {/* 上拉按钮 */}
      <FloatButton.BackTop />
      {/* 监听主题切换 */}
      <ThemeInitializer>
        <RouterProvider router={router}></RouterProvider>
      </ThemeInitializer>
    </>
  );
};
export default App;
