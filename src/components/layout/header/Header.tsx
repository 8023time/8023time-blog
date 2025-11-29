'use client';

import Link from 'next/link';
import type { FC } from 'react';
import { cn } from '@/lib/class-name';
import { Avatar } from './HeaderLogo';
import { HeaderMenu } from './HeaderCenterMenu';
import { HeaderCenter } from './HeaderCenter';
import { OldWebsiteLink } from './OldWebsiteLink';
import { ThemeToggle } from '@components/ui/theme-switcher';
import { IsMobile, IsDesktop } from '@components/ui/viewport';
import { FullscreenSwitcher } from '@components/ui/full-screen-switcher';

export const Header: FC<{ className?: string }> = ({ className }) => {
  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-999 border-b border-gray-300/50 backdrop-blur-xl backdrop-saturate-150',
          className,
        )}
      >
        <div className='theme-transition flex h-14 items-center justify-between gap-8 bg-white/40 px-4 sm:px-6 dark:bg-gray-900/40'>
          <Avatar />

          <IsDesktop>
            <HeaderCenter />
          </IsDesktop>

          <div className='flex items-center'>
            <FullscreenSwitcher />
            <ThemeToggle />

            <OldWebsiteLink className='mx-2'>
              <Link href='https://www.8023time.com'>旧版网站</Link>
            </OldWebsiteLink>

            <IsMobile>
              <HeaderMenu />
            </IsMobile>
          </div>
        </div>
      </header>
    </>
  );
};
