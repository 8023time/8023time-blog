import { create } from 'zustand';

export type ThemeType = {
  name: 'light' | 'dark' | 'System';
  label: string;
};

interface ThemeState {
  theme: ThemeType;
  themeList: ThemeType[];
  setTheme: (themeName: ThemeType['name']) => void;
}

const THEME_KEY_LOCAL = 'CM-theme';

const themeList: ThemeType[] = [
  { name: 'dark', label: '暗色主题' },
  { name: 'light', label: '明亮主题' },
  { name: 'System', label: '跟随系统' },
];

//===========辅助函数============

/**
 * @description:从 localStorage 或系统偏好中获取当前主题名
 */
const getThemeFromStorage = (): ThemeType['name'] => {
  const stored = localStorage.getItem(THEME_KEY_LOCAL);
  if (stored && themeList.some((t) => t.name === stored)) {
    return stored as ThemeType['name'];
  }

  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return isDark ? 'dark' : 'light';
};

/**
 * @description:将主题保存至 localStorage
 */
export const setThemeToLocalStorage = (themeName: ThemeType['name']) => {
  localStorage.setItem(THEME_KEY_LOCAL, themeName);
};

/**
 * @description:应用主题到 <html> 元素
 */
export const applyThemeToDocument = (themeName: ThemeType['name']) => {
  if (themeName === 'System') {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    themeName = isDark ? 'dark' : 'light';
  }

  const root = document.documentElement;
  root.setAttribute('data-theme', themeName);
};

/**
 * @description；监听系统主题变化的辅助函数
 */
export const setupSystemThemeListener = (callback: () => void) => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', callback);
  return () => {
    mediaQuery.removeEventListener('change', callback);
  };
};

//===========主函数============

const useThemeStore = create<ThemeState>((set, get) => {
  const initThemeName = getThemeFromStorage();
  const initTheme = themeList.find((t) => t.name === initThemeName) ?? themeList[0];

  if (typeof window !== 'undefined') {
    applyThemeToDocument(initThemeName);
  }

  return {
    theme: initTheme,
    themeList,
    setTheme: (themeName) => {
      const newTheme = themeList.find((t) => t.name === themeName);
      if (!newTheme) return;

      if (get().theme.name === newTheme.name) return;
      set({ theme: newTheme });

      applyThemeToDocument(themeName);
      setThemeToLocalStorage(themeName);
    },
  };
});

export default useThemeStore;
