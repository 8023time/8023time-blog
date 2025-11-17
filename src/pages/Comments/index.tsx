import React from 'react';

const Comments: React.FC = () => {
  return (
    <>
      <div className='mt-24'>
        <div className='mx-2 font-mono text-sm/7 font-medium tracking-widest text-gray-500 uppercase'>8023time</div>

        {/* 标题 */}
        <div className='relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-gray-950/5 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-gray-950/5 dark:before:bg-white/10 dark:after:bg-white/10'>
          <h1 className='mx-2 text-4xl tracking-tighter text-balance sm:text-5xl lg:text-6xl xl:text-8xl'>留言区</h1>
        </div>

        {/* 描述 */}
        <div className='relative mt-10 before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-gray-950/5 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-gray-950/5 dark:before:bg-white/10 dark:after:bg-white/10'>
          <p className='prose mx-2 max-w-(--breakpoint-md) text-lg leading-8 text-gray-600 dark:text-gray-400'>
            这里是留言区，欢迎大家留言。
          </p>
        </div>

        {/* 描述 */}
        <div className='relative mt-10 p-4 before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-gray-950/5 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-gray-950/5 dark:before:bg-white/10 dark:after:bg-white/10'>
          <div className='flex h-200 w-full flex-col items-center justify-between rounded-lg border-gray-600 bg-gray-100 p-4'>
            <div className='w-full flex-1'>内容区</div>
            <div className='flex w-full items-center justify-between'>
              <div>
                <span>已装填298条弹幕</span>
              </div>
              <div className='flex bg-amber-400'>
                <div>图标</div>
                <input type='text' placeholder='发送个友善的弹幕见证当下' />
                <input type='text' placeholder='昵称' />
                <button>发送</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
