import { cn } from '@utils/className';
import { NavLink } from 'react-router';
import { AvatarIcon, ToggleTheme } from '@/components';
import { footerData } from '@data/footer.data';

export interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div
      className={cn('mt-40 w-full bg-gray-50 text-sm/loose text-gray-950 dark:bg-gray-950 dark:text-white', className)}
    >
      {/* 页脚导航 */}
      <div className='relative w-full before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-gray-950/5 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-gray-950/5 dark:before:bg-white/10 dark:after:bg-white/10'>
        <div className='flex w-full flex-col items-center justify-center'>
          <AvatarIcon />
          <ul className='flex gap-4'>
            {/* QQ */}
            <li>
              <a
                href='https://im.qq.com/' /* 替换为你的 QQ/联系链接 */
                target='_blank'
                rel='noopener noreferrer'
                aria-label='QQ'
                className='inline-flex items-center justify-center rounded-md p-2 transition hover:bg-gray-100 dark:hover:bg-white/5'
              >
                <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none' aria-hidden>
                  <path
                    d='M12 2C7 2 4 5 4 8.5 4 11 6 13 9 13s3-2 6-2 6 2 6 4.5S17 18 12 18s-9-2.5-9-6'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <circle cx='9' cy='9' r='0.9' fill='currentColor' />
                  <circle cx='15' cy='9' r='0.9' fill='currentColor' />
                </svg>
              </a>
            </li>

            {/* GitHub */}
            <li>
              <a
                href='https://github.com/your-username'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub'
                className='inline-flex items-center justify-center rounded-md p-2 transition hover:bg-gray-100 dark:hover:bg-white/5'
              >
                <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none' aria-hidden>
                  <path
                    d='M12 2C7.58 2 4 5.58 4 10c0 3.54 2.29 6.54 5.47 7.6.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.65 7.65 0 0112 6.8c.68.003 1.36.09 2 .26 1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38C17.71 16.54 20 13.54 20 10c0-4.42-3.58-8-8-8z'
                    fill='currentColor'
                  />
                </svg>
              </a>
            </li>

            {/* X (Twitter) */}
            <li>
              <a
                href='https://x.com/your-username'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='X'
                className='inline-flex items-center justify-center rounded-md p-2 transition hover:bg-gray-100 dark:hover:bg-white/5'
              >
                <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none' aria-hidden>
                  <path
                    d='M18 5L12 11.2 6 5'
                    stroke='currentColor'
                    strokeWidth='1.6'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M6 19l6-6.2L18 19'
                    stroke='currentColor'
                    strokeWidth='1.6'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>
            </li>

            {/* Bilibili */}
            <li>
              <a
                href='https://space.bilibili.com/your-id'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Bilibili'
                className='inline-flex items-center justify-center rounded-md p-2 transition hover:bg-gray-100 dark:hover:bg-white/5'
              >
                <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none' aria-hidden>
                  <rect x='3' y='6' width='18' height='12' rx='2' stroke='currentColor' strokeWidth='1.5' />
                  <path d='M8 8.5l1 1M16 8.5l-1 1' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
                  <rect x='7' y='14' width='10' height='1.2' rx='0.6' fill='currentColor' />
                </svg>
              </a>
            </li>

            {/* 抖音 (Douyin/TikTok) */}
            <li>
              <a
                href='https://www.douyin.com/user/your-id'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='抖音'
                className='inline-flex items-center justify-center rounded-md p-2 transition hover:bg-gray-100 dark:hover:bg-white/5'
              >
                <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none' aria-hidden>
                  <path
                    d='M15 3v9.5a3.5 3.5 0 11-3.5-3.5V8'
                    stroke='currentColor'
                    strokeWidth='1.6'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M9 21V9'
                    stroke='currentColor'
                    strokeWidth='1.6'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>
            </li>
          </ul>

          <div>哇，本站居然运行了 400 天 10 小时 10 分 30 秒😯</div>
        </div>
      </div>

      <div
        className={
          'relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-gray-950/5 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-gray-950/5 dark:before:bg-white/10 dark:after:bg-white/10'
        }
      >
        <footer className='bg-gray-50 text-sm/loose text-gray-950 dark:bg-gray-950 dark:text-white'>
          {/* 移动端导航列 */}
          <div className='flex gap-4 p-4 *:first:border-l-0 *:last:border-r-0 md:hidden'>
            {/* 左侧为奇数 */}
            <div className='flex flex-1 flex-col gap-10'>
              {footerData.categories
                .filter((_, index) => index % 2 === 0)
                .map((item) => {
                  return (
                    <div className='text-center'>
                      <h3 className='font-semibold'>{item.title}</h3>
                      <ul className='mt-4 grid gap-4'>
                        {item.items.map((subItem) => {
                          return (
                            <li>
                              <NavLink className='hover:underline' to={subItem.to}>
                                {subItem.name}
                              </NavLink>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
            </div>

            {/* 右侧为偶数 */}
            <div className='flex flex-1 flex-col gap-10'>
              {footerData.categories
                .filter((_, index) => index % 2 === 1)
                .map((item) => {
                  return (
                    <div className='text-center'>
                      <h3 className='font-semibold'>{item.title}</h3>
                      <ul className='mt-4 grid gap-4'>
                        {item.items.map((subItem) => {
                          return (
                            <li>
                              <NavLink className='hover:underline' to={subItem.to}>
                                {subItem.name}
                              </NavLink>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* 桌面端导航列 */}
          <div className='mx-auto hidden w-full grid-cols-4 justify-between gap-y-0 *:first:border-l-0 *:last:border-r-0 md:grid md:grid-cols-4 md:gap-6 md:gap-x-4 lg:gap-8'>
            {footerData.categories.map((item) => {
              return (
                <div className='border-x border-b border-gray-950/5 py-10 pl-2 text-center not-md:border-0 md:border-b-0 dark:border-white/10'>
                  <h3 className='font-semibold'>{item.title}</h3>
                  <ul className='mt-4 grid gap-4'>
                    {item.items.map((subItem) => {
                      return (
                        <li>
                          <NavLink className='hover:underline' to={subItem.to}>
                            {subItem.name}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </footer>
      </div>

      {/* 主题切换 + 备案信息 */}
      <div className='px-5 pt-10 pb-15'>
        <div className='mx-auto flex w-full items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8 md:px-6 lg:px-8'>
          {/* 备案信息 */}
          <div className='grid place-items-center text-sm/6 text-gray-700 sm:flex-row sm:gap-2 sm:pr-4 dark:text-gray-400'>
            {footerData.copyright}
          </div>

          {/* 主题切换 Radio 组 */}
          <ToggleTheme />
        </div>
      </div>
    </div>
  );
};

export default Footer;
