'use client';

import { useState, useEffect, useCallback } from 'react';

export type ThemeType = {
  name: 'light' | 'dark' | 'System';
  label: string;
};

const THEME_KEY_LOCAL = '_8023time-theme_';

const themeList: ThemeType[] = [
  { name: 'dark', label: '暗色主题' },
  { name: 'light', label: '明亮主题' },
  { name: 'System', label: '跟随系统' },
];

const getThemeFromStorage = (): ThemeType['name'] => {
  if (typeof window === 'undefined') return 'light';
  const stored = localStorage.getItem(THEME_KEY_LOCAL);
  if (stored && themeList.some((t) => t.name === stored)) {
    return stored as ThemeType['name'];
  }
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return isDark ? 'dark' : 'light';
};

const setThemeToLocalStorage = (themeName: ThemeType['name']) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(THEME_KEY_LOCAL, themeName);
};

const applyThemeToDocument = (themeName: ThemeType['name']) => {
  if (typeof window === 'undefined') return;

  if (themeName === 'System') {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    themeName = isDark ? 'dark' : 'light';
  }

  document.documentElement.setAttribute('data-theme', themeName);
};

const setupSystemThemeListener = (callback: () => void) => {
  if (typeof window === 'undefined') return () => {};
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
};

export const useTheme = () => {
  const [theme, setThemeState] = useState<ThemeType>(() => {
    const name = getThemeFromStorage();
    return themeList.find((t) => t.name === name) ?? themeList[0];
  });

  const setTheme = useCallback(
    (themeName: ThemeType['name']) => {
      const newTheme = themeList.find((t) => t.name === themeName);
      if (!newTheme || newTheme.name === theme.name) return;

      setThemeState(newTheme);
      applyThemeToDocument(themeName);
      setThemeToLocalStorage(themeName);
    },
    [theme],
  );

  useEffect(() => {
    if (theme.name !== 'System') return;
    const cleanup = setupSystemThemeListener(() => {
      applyThemeToDocument('System');
    });
    return cleanup;
  }, [theme.name]);

  return { theme, themeList, setTheme };
};
