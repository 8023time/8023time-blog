import './APP.css';
import type React from 'react';
import router from '@router/index';
import { useEffect, useRef } from 'react';
import { RouterProvider } from 'react-router';
import { FloatButton } from '@components/index';
import { useThemeStore, applyThemeToDocument, setupSystemThemeListener } from '@store/index';

const ThemeInitializer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useThemeStore();
  const cleanup = useRef<(() => void) | undefined>(undefined);

  useEffect(() => {
    if (theme.name === 'System') {
      const handleSystemChange = () => {
        applyThemeToDocument('System');
      };
      cleanup.current = setupSystemThemeListener(handleSystemChange);
    }
    return () => {
      cleanup.current?.();
    };
  }, [theme.name]);

  return <>{children}</>;
};

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
