import type React from 'react';
import { backgroundData } from '@data/background.data';
import { Typewriter, WavesLoader, CatLoader, InfiniteViewBackground } from '@components/index';

const Home: React.FC = () => {
  return (
    <>
      <div className='relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-gray-950/5 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-gray-950/5 dark:before:bg-white/10 dark:after:bg-white/10'>
        <div className='relative aspect-3/2 h-full w-full overflow-hidden rounded-3xl object-cover'>
          <InfiniteViewBackground src={backgroundData} className='overflow-hidden'>
            <div className='flex h-full flex-col items-center justify-center'>
              <div className='block transform text-xs transition-transform duration-300 hover:scale-100 active:scale-95'>
                <CatLoader />
              </div>

              <Typewriter
                texts={['你好,我是8023time,欢迎来到我的个人网站!', '欢迎探索我的数字世界！', '代码、创意、无限可能。']}
                textColor='auto'
                mask={true}
                textSize={25}
              />
            </div>
            <WavesLoader />
          </InfiniteViewBackground>
        </div>
      </div>
    </>
  );
};

export default Home;
