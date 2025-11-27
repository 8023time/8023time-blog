'use client';

import { UserAuth } from './user-auth';
import { BreadCrumb } from './bread-crumb';
import { ThemeToggle } from './theme-toggle';
import { FullscreenButton } from './full-screen';

export default function Header() {
  return (
    <header className='flex h-13 items-center justify-between border-b border-gray-100 bg-white px-3'>
      <BreadCrumb />

      <div className='flex items-center'>
        <FullscreenButton />
        <ThemeToggle />
        <UserAuth />
      </div>
    </header>
  );
}
