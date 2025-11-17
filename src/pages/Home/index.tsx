import type React from 'react';
import { NavLink } from 'react-router';
import { backgroundData } from '@data/background.data';
import { Typewriter, WavesLoader, CatLoader, InfiniteViewBackground } from '@components/index';

const Home: React.FC = () => {
  return (
    <>
      <div className='relative aspect-3/2 h-full w-full overflow-hidden rounded-3xl object-cover'>
        <InfiniteViewBackground src={backgroundData}>
          <div className='flex h-full flex-col items-center justify-center'>
            <NavLink
              to='/'
              className='block transform text-xs transition-transform duration-300 hover:scale-100 active:scale-95'
            >
              <CatLoader />
            </NavLink>

            <Typewriter
              texts={['你好,我是8023time,欢迎来到我的个人网站!', '欢迎探索我的数字世界！', '代码、创意、无限可能。']}
              textColor='auto'
              mask={true}
              textSize={25}
              className='text-xl leading-relaxed font-bold text-black drop-shadow-2xl sm:text-2xl md:text-3xl lg:text-4xl'
            />
          </div>

          <div className='absolute bottom-0 left-0 z-10 h-16 w-full'>
            <WavesLoader />
          </div>
        </InfiniteViewBackground>
      </div>
    </>
  );
};

export default Home;
