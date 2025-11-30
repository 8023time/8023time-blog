'use client';

import Link from 'next/link';
import { useRef } from 'react';
import * as _Avatar from '@radix-ui/react-avatar';
import { useRouter, usePathname } from 'next/navigation';

export const Avatar = () => {
  const router = useRouter();
  const countRef = useRef(0);
  const pathname = usePathname();
  const timer = useRef<NodeJS.Timeout | null>(null);

  const handleLogin = () => {
    if (timer.current) clearTimeout(timer.current);

    countRef.current++;

    console.log(countRef.current);

    if (countRef.current >= 3) {
      countRef.current = 0;
      if (pathname !== '/') return;
      router.push('/cms');
      return;
    }

    timer.current = setTimeout(() => {
      if (countRef.current > 0) {
        router.push('/');
      }
      countRef.current = 0;
    }, 220);
  };

  return (
    <>
      <div className='flex items-center gap-3'>
        <_Avatar.Root className='relative h-8 w-8 overflow-hidden rounded md:h-9 md:w-9'>
          <_Avatar.Image className='h-full w-full object-cover' src='/avatar.png' alt='Avatar' onClick={handleLogin} />
          <_Avatar.Fallback delayMs={600} className='flex h-full w-full items-center justify-center text-sm font-bold'>
            🤯
          </_Avatar.Fallback>
        </_Avatar.Root>
        <Link href='/'>
          <span className='bg-gradient-to-r from-gray-500 to-gray-900 bg-clip-text text-center font-sans text-lg font-bold tracking-wide text-transparent dark:from-gray-100 dark:to-gray-500'>
            寻觅~流光
          </span>
        </Link>
      </div>
    </>
  );
};
