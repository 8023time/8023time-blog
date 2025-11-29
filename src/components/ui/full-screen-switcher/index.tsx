'use client';

import { Tooltip } from '@components/ui/tooltip';
import { useFullscreen } from '@/hooks/use-full-screen';
import { FullscreenIcon, FullscreenExitIcon } from '@components/icons/fullscreen';

export const FullscreenSwitcher = () => {
  const { isFullscreen, toggle } = useFullscreen();

  return (
    <>
      <Tooltip content={isFullscreen ? '退出全屏' : '全屏'} placement='bottom'>
        <button className='cursor-pointer rounded-lg p-2 text-xl text-gray-700 hover:bg-gray-50' onClick={toggle}>
          {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
        </button>
        <div className='flex items-center'></div>
      </Tooltip>
    </>
  );
};
