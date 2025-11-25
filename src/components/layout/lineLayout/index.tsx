import type { ReactNode, FC } from 'react';

interface LineLayoutProps {
  children: ReactNode;
}

export const LineLayout: FC<LineLayoutProps> = ({ children }) => {
  return (
    <>
      <div className='isolate bg-gray-50 dark:bg-gray-950'>
        <div className='max-w-screen overflow-x-hidden'>
          {/* 左右侧线条背景（重复渐变+边框） */}
          <div className='grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center pt-14.25 [--gutter-width:2.5rem] lg:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)]'>
            {/* 左侧线条 */}
            <div className='col-start-1 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 lg:block dark:[--pattern-fg:var(--color-white)]/10'></div>

            {/* 中间内容区（包裹 Header + 页面内容 + Footer） */}
            <div className='text-gray-950 lg:col-start-2 dark:text-white'>{children}</div>

            {/* 右侧线条 */}
            <div className='row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 lg:col-start-3 lg:block dark:[--pattern-fg:var(--color-white)]/10'></div>
          </div>
        </div>
      </div>
    </>
  );
};
