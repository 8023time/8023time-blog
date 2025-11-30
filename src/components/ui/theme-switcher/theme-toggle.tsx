'use client';

import type { FC } from 'react';
import { useTheme } from '@hooks/use-theme';
import { Tooltip } from '@components/ui/tooltip';
import { SolarMoonSleepBold, SolarSunBold } from '@components/icons/theme-icons';

export const ThemeToggle: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Tooltip content={theme.name === 'dark' ? '浅色模式' : '深色模式'} placement='bottom'>
        <button
          className='theme-transition icon-common flex size-8 items-center justify-center rounded-lg'
          onClick={() => setTheme(theme.name === 'dark' ? 'light' : 'dark')}
        >
          {theme.name === 'dark' ? <SolarMoonSleepBold /> : <SolarSunBold />}
        </button>
      </Tooltip>
    </>
  );
};
