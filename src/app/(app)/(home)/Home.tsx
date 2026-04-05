import Image from 'next/image';
import type { FC } from 'react';
import { Typewriter } from '@components/ui/typewriter';
import { SectionDivider } from '@/components/ui/section-divider';

const floatAnimationStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  /* 增加图标悬浮时的弹跳动画 */
  @keyframes icon-bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }
  .group:hover .animate-icon-bounce {
      animation: icon-bounce 0.5s ease-in-out;
  }
`;

const Home: FC = () => {
  return (
    <>
      <SectionDivider>
        <style>{floatAnimationStyles}</style>

        {/* 背景氛围层 */}
        <div className='pointer-events-none absolute inset-0 overflow-hidden'>
          <div className='absolute -top-[15%] right-[5%] h-[200px] w-[200px] rounded-full bg-pink-300/20 blur-[80px] filter md:-top-[10%] md:right-[10%] md:h-[400px] md:w-[400px] md:blur-[100px] dark:bg-pink-600/20'></div>
          <div className='absolute -bottom-[10%] left-[5%] h-[150px] w-[150px] rounded-full bg-purple-300/20 blur-[80px] filter md:-bottom-[10%] md:left-[10%] md:h-[300px] md:w-[300px] md:blur-[100px] dark:bg-purple-600/20'></div>
        </div>

        <div className='relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-10 px-6 py-12 md:flex-row md:justify-between md:gap-12 md:px-12 lg:gap-24 lg:px-20'>
          {/* 左侧文本区域 */}
          <div className='flex w-full flex-col justify-center space-y-4 text-center md:w-1/2 md:text-left lg:space-y-6'>
            <h1 className='text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl md:text-5xl lg:text-6xl dark:text-white'>
              Hi, I&apos;m{' '}
              <span>
                <span className='bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'>
                  寻觅~流光
                </span>
                👋
              </span>
            </h1>

            <h2 className='flex items-center justify-center text-xl font-medium text-neutral-700 sm:text-2xl md:justify-start md:text-3xl lg:text-4xl dark:text-neutral-300'>
              A Full Stack{' '}
              <code className='ml-2 rounded-md bg-pink-100 px-2 py-1 font-mono text-pink-600 dark:bg-pink-900/30 dark:text-pink-400'>
                &lt;Developer /&gt;
              </code>
            </h2>

            <p className='mx-auto max-w-md text-base leading-relaxed text-neutral-600 sm:text-lg md:mx-0 md:max-w-lg dark:text-neutral-400'>
              An independent developer coding with love, exploring the infinite possibilities of the digital world.
            </p>

            <div className='h-12 text-lg font-medium text-neutral-800 sm:h-16 sm:text-xl md:h-16 dark:text-neutral-200'>
              <Typewriter
                texts={['你好,我是寻觅~流光,欢迎来到我的个人网站!', '欢迎探索我的数字世界！', '代码、创意、无限可能。']}
                textColor='auto'
                mask={true}
                cursorColor='#ec4899'
              />
            </div>
          </div>

          {/* 右侧头像区域 */}
          <div className='flex w-full items-center justify-center md:w-1/2 md:justify-end'>
            <div className='animate-float relative h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-80 lg:w-80'>
              <div className='absolute -inset-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-30 blur-2xl filter dark:opacity-40'></div>
              <div className='relative h-full w-full overflow-hidden rounded-full border-[4px] border-white bg-white shadow-2xl md:border-[6px] dark:border-neutral-800 dark:bg-neutral-800'>
                <Image
                  src='/avatar.png'
                  alt='8023time avatar'
                  width={256}
                  height={256}
                  className='h-full w-full object-cover transition-transform duration-500 hover:scale-105'
                />
              </div>
            </div>
          </div>
        </div>
      </SectionDivider>
    </>
  );
};

export default Home;
