import { cn } from '@utils/className';
import { NavLink } from 'react-router';
import { Tooltip } from '@components/index';
import { useThemeStore } from '@store/index';
import { SunRiseIcon } from '@components/index';
import { MAIN_NAV_CONFIG } from '@data/header.data';

export interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const { theme, setTheme } = useThemeStore();

  function handleClick() {
    setTheme(theme.name === 'light' ? 'dark' : 'light');
  }

  return (
    <>
      <header className={cn('fixed inset-x-0 top-0 z-10 border-b border-black/5 dark:border-white/10', className)}>
        <div className='bg-white dark:bg-gray-950'>
          <div className='flex h-14 items-center justify-between gap-8 px-4 sm:px-6'>
            {/* Logo */}
            <div className='flex items-center gap-4'>
              <a className='shrink-0' aria-label='Home' href='/'>
                <NavLink to='/'>
                  <div className='flex items-center gap-5'>
                    <img src='/avatar.png' width={25} />
                    <span className='text-center font-sans text-lg font-bold text-gray-950 dark:text-white'>
                      8023time
                    </span>
                  </div>
                </NavLink>
              </a>
            </div>

            {/* 桌面端菜单 */}
            <div className='flex items-center gap-6 max-md:hidden'>
              {MAIN_NAV_CONFIG.map((item) => {
                return (
                  <NavLink
                    key={item.name}
                    to={item.to!}
                    className='text-sm/6 text-gray-950 hover:text-gray-900 dark:text-white dark:hover:text-white/90'
                  >
                    {item.name}
                  </NavLink>
                );
              })}

              <NavLink
                to='https://www.8023time.com'
                className='group relative px-1.5 text-sm/6 text-sky-800 dark:text-sky-300'
                target='_blank'
              >
                <span className='absolute inset-0 border border-dashed border-sky-300/60 bg-sky-400/10 group-hover:bg-sky-400/15 dark:border-sky-300/30'></span>
                旧版网站
                <svg
                  width='5'
                  height='5'
                  viewBox='0 0 5 5'
                  className='absolute top-[-2px] left-[-2px] fill-sky-300 dark:fill-sky-300/50'
                >
                  <path d='M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z'></path>
                </svg>
                <svg
                  width='5'
                  height='5'
                  viewBox='0 0 5 5'
                  className='absolute top-[-2px] right-[-2px] fill-sky-300 dark:fill-sky-300/50'
                >
                  <path d='M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z'></path>
                </svg>
                <svg
                  width='5'
                  height='5'
                  viewBox='0 0 5 5'
                  className='absolute bottom-[-2px] left-[-2px] fill-sky-300 dark:fill-sky-300/50'
                >
                  <path d='M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z'></path>
                </svg>
                <svg
                  width='5'
                  height='5'
                  viewBox='0 0 5 5'
                  className='absolute right-[-2px] bottom-[-2px] fill-sky-300 dark:fill-sky-300/50'
                >
                  <path d='M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z'></path>
                </svg>
              </NavLink>

              <Tooltip content='切换黑暗模式' placement='bottom'>
                <div className='flex items-center'>
                  <SunRiseIcon alt='SunRise' onClick={handleClick} />
                </div>
              </Tooltip>
            </div>

            {/* 移动端菜单按钮 */}
            <div className='flex items-center gap-2.5 md:hidden'>
              <button
                type='button'
                className='undefined relative inline-grid size-7 place-items-center rounded-md text-gray-950 hover:bg-gray-950/5 dark:text-white dark:hover:bg-white/10'
                aria-label='Navigation'
              >
                <span className='absolute top-1/2 left-1/2 size-11 -translate-1/2 pointer-fine:hidden'></span>
                <svg viewBox='0 0 16 16' fill='currentColor' className='size-4'>
                  <path d='M8 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM9.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z'></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
