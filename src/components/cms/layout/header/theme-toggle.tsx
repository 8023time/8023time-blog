'use client';

import type { FC } from 'react';
import { useTheme } from '@hooks/use-theme';
import { SolarMoonSleepBold, SolarSunBold } from '@components/icons/theme-icons';
import { Tooltip } from '@components/ui/tooltip';

export const ThemeToggle: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Tooltip content={theme.name === 'dark' ? '浅色模式' : '深色模式'} placement='bottom'>
        <button
          className='cursor-pointer rounded-lg p-2 text-xl text-gray-700 hover:bg-gray-50'
          onClick={() => setTheme(theme.name === 'dark' ? 'light' : 'dark')}
        >
          {theme.name === 'dark' ? <SolarSunBold /> : <SolarMoonSleepBold />}
        </button>
      </Tooltip>
    </>
  );
};
