import type React from 'react';
import { useEffect, useRef } from 'react';
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

export default ThemeInitializer;
