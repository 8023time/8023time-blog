'use client';

import Link from 'next/link';
import type { FC } from 'react';
import { cn } from '@/lib/class-name';
import { MAIN_NAV_CONFIG } from './config';
import OldWebsiteLink from './OldWebsiteLink';
import { Tooltip } from '@components/ui/tooltip';
import { useFullscreen } from '@/hooks/use-full-screen';
import { FullscreenIcon, FullscreenExitIcon } from '@components/icons/fullscreen';

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  const { isFullscreen, toggle } = useFullscreen();

  return (
    <>
      <header className={cn('fixed inset-x-0 top-0 z-999 border-b border-black/5 dark:border-white/10', className)}>
        <div className='bg-white dark:bg-gray-950'>
          <div className='flex h-14 items-center justify-between gap-8 px-4 sm:px-6'>
            {/* Logo */}
            <div className='flex items-center gap-4'>
              <Link href='/' className='shrink-0' aria-label='Home'>
                <div className='flex items-center gap-5'>
                  <img src='/avatar.png' width={25} />
                  <span className='text-center font-sans text-lg font-bold text-gray-950 dark:text-white'>
                    8023time
                  </span>
                </div>
              </Link>
            </div>

            {/* 桌面端菜单 */}
            <div className='flex items-center gap-6 max-md:hidden'>
              {MAIN_NAV_CONFIG.map((item) => {
                return (
                  <Link
                    key={item.name}
                    href={item.to!}
                    className='text-sm/6 text-gray-950 hover:text-gray-900 dark:text-white dark:hover:text-white/90'
                  >
                    {item.name}
                  </Link>
                );
              })}

              <OldWebsiteLink />

              <Tooltip content={isFullscreen ? '退出全屏' : '全屏'} placement='bottom'>
                <div className='flex items-center' onClick={toggle}>
                  {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
                </div>
              </Tooltip>
            </div>

            {/* 移动端菜单按钮 */}
            <div className='flex items-center gap-2.5 md:hidden'>
              <button
                type='button'
                className='undefined relative inline-grid size-7 place-items-center rounded-md text-gray-950 hover:bg-gray-950/5 dark:text-white dark:hover:bg-white/10'
                aria-label='Navigation'
              >
                <span className='absolute top-1/2 left-1/2 size-11 -translate-1/2 pointer-fine:hidden'></span>
                <svg viewBox='0 0 16 16' fill='currentColor' className='size-4'>
                  <path d='M8 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM9.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z'></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
