import './App.css';
import type React from 'react';
import router from '@router/index';
import { RouterProvider } from 'react-router';
import { useScroll, motion } from 'motion/react';
import { FloatButton, ThemeInitializer } from '@components/index';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* 顶部进度条 */}
      <motion.div
        className='fixed top-0 right-0 left-0 z-50 h-1 bg-blue-400'
        style={{ scaleX: scrollYProgress, originX: 0 }}
      />
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
