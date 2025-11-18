import React from 'react';
import { SectionDivider } from '@components/index';

const Album: React.FC = () => {
  return (
    <>
      <div className='mx-2 mt-24 font-mono text-sm/7 font-medium tracking-widest text-gray-500 uppercase'>8023time</div>
      <SectionDivider>
        <h1 className='mx-2 text-4xl tracking-tighter text-balance sm:text-5xl lg:text-6xl xl:text-8xl'>回忆相册</h1>
      </SectionDivider>
      <SectionDivider className='mt-10'>
        <p className='prose mx-2 max-w-(--breakpoint-md) text-lg leading-8 text-gray-600 dark:text-gray-400'>
          这里是回忆相册，记录了我过去的生活，分享了我对生活的感悟。
        </p>
      </SectionDivider>
      <SectionDivider className='mt-10 h-100'></SectionDivider>
    </>
  );
};

export default Album;
