'use client';

import { HeaderLeft } from './HeaderLeft';
import { HeaderRight } from './HeaderRight';

export function Header() {
  return (
    <>
      <header className='flex h-13 items-center justify-between border-b border-gray-100 px-3'>
        <HeaderLeft />
        <HeaderRight />
      </header>
    </>
  );
}
