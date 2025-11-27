import Link from 'next/link';
import Image from 'next/image';
import type { FC } from 'react';
import { Typewriter } from '@components/ui/typewriter';
import { SectionDivider } from '@components/layout/SectionDivider';
import { GithubIcon, BiliBiliIcon, TwitterIcon, QQIcon, TiktokIcon } from '@components/icons/social-contact';

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
  const socialLinks = [
    {
      icon: <GithubIcon className='h-5 w-5' />,
      href: 'https://github.com/8023time',
      label: 'Github',
      color: 'text-gray-900',
    },
    {
      icon: <BiliBiliIcon className='h-5 w-5' />,
      href: 'https://bilibili.com/1906238729',
      label: 'Bilibili',
      color: 'text-pink-600',
    },
    {
      icon: <TwitterIcon className='h-5 w-5' />,
      href: 'https://twitter.com/Alice577536738',
      label: 'Twitter',
      color: 'text-blue-400',
    },
    { icon: <QQIcon className='h-5 w-5' />, href: 'https://weibo.com/2162105974', label: 'QQ', color: 'text-red-500' },
    {
      icon: <TiktokIcon className='h-5 w-5' />,
      href: 'https://www.tiktok.com/@8023time',
      label: 'Tiktok',
      color: 'text-black dark:text-white',
    },
  ];

  const primaryColor = 'text-pink-500'; // 统一使用主题粉色作为边框和文字颜色

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
              A Web{' '}
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

            {/* **** 核心修改：社交图标样式优化 **** */}
            <div className='flex flex-wrap justify-center gap-4 pt-4 md:justify-start'>
              {socialLinks.map((item) => (
                <Link
                  href={item.href}
                  key={item.href}
                  className={`group flex h-10 w-10 items-center justify-center rounded-full border-2 ${primaryColor} bg-white from-pink-500 to-purple-600 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-r hover:text-white hover:shadow-xl hover:shadow-pink-500/40 md:h-12 md:w-12 dark:border-pink-500 dark:bg-neutral-900 dark:shadow-lg dark:shadow-pink-500/20`}
                >
                  <span
                    className={`flex items-center justify-center transition-colors duration-300 [&>svg]:h-5 [&>svg]:w-5 md:[&>svg]:h-6 md:[&>svg]:w-6 ${primaryColor} animate-icon-bounce group-hover:text-white`} // 应用弹跳动画
                  >
                    {item.icon}
                  </span>
                </Link>
              ))}
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
