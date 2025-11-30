import { cn } from '@lib/class-name';
import type { FC, ReactNode } from 'react';

export const OldWebsiteLink: FC<{ children?: ReactNode; className?: string }> = ({ className, children }) => {
  return (
    <>
      <div className={cn('group relative cursor-pointer px-1.5 text-sm/6 text-sky-800 dark:text-sky-300', className)}>
        <span className='absolute inset-0 border border-dashed border-sky-300/60 bg-sky-400/10 group-hover:bg-sky-400/15 dark:border-sky-300/30'></span>
        {children}
        <CornerSVG className='top-[-2px] left-[-2px]' />
        <CornerSVG className='top-[-2px] right-[-2px]' />
        <CornerSVG className='bottom-[-2px] left-[-2px]' />
        <CornerSVG className='right-[-2px] bottom-[-2px]' />
      </div>
    </>
  );
};

const CornerSVG: FC<{ className?: string }> = ({ className }) => {
  return (
    <>
      <svg
        width='5'
        height='5'
        viewBox='0 0 5 5'
        className={cn('absolute fill-sky-300 dark:fill-sky-300/50', className)}
      >
        <path d='M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z'></path>
      </svg>
    </>
  );
};
