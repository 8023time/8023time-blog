import type React from 'react';
import { backgroundData } from '@data/background.data';
import { Typewriter, WavesLoader, CatLoader, InfiniteViewBackground, SectionDivider } from '@components/index';

const Home: React.FC = () => {
  return (
    <SectionDivider>
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
    </SectionDivider>
  );
};

export default Home;
