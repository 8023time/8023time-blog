import Link from 'next/link';
import { headerMenuConfig } from './config';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export const HeaderCenter = () => {
  return (
    <NavigationMenu.Root className='relative hidden text-sm font-medium text-slate-600 md:block dark:text-slate-200'>
      <NavigationMenu.List className='theme-transition flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-2 py-1 shadow-[0_20px_45px_-28px_rgba(15,23,42,0.75)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60'>
        {headerMenuConfig.map((item) => {
          const hasChildren = Boolean(item.subMenu && item.subMenu.length > 0);
          return (
            <NavigationMenu.Item key={item.title} className='relative'>
              {hasChildren ? (
                <>
                  <NavigationMenu.Trigger className='group relative flex items-center gap-1 rounded-full px-4 py-2 text-slate-600 transition-all duration-200 after:absolute after:-bottom-1 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-pink-500 after:to-purple-500 after:opacity-0 after:transition-all after:duration-300 after:content-[""] hover:text-slate-900 hover:after:w-8 hover:after:opacity-100 data-[state=open]:text-slate-900 data-[state=open]:after:w-8 data-[state=open]:after:opacity-100 dark:text-slate-200 dark:hover:text-white dark:data-[state=open]:text-white'>
                    <span>{item.title}</span>
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className='absolute top-full left-1/2 z-30 mt-4 w-fit -translate-x-1/2 overflow-hidden rounded-xl border border-white/40 bg-white/95 text-sm shadow-2xl ring-1 shadow-black/10 ring-black/5 backdrop-blur-3xl dark:border-white/10 dark:ring-white/10'>
                    <ul className='flex flex-col gap-3'>
                      {item.subMenu?.map((child) => (
                        <li key={child.title}>
                          <NavigationMenu.Link asChild>
                            <Link
                              className='flex items-center justify-center gap-2 px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-800'
                              href={child.path ?? '/'}
                            >
                              <span className='text-center text-sm whitespace-nowrap'>{child.title}</span>
                            </Link>
                          </NavigationMenu.Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenu.Content>
                </>
              ) : (
                <NavigationMenu.Link
                  className='rounded-full px-4 py-2 text-slate-600 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white'
                  href={item.path ?? '/'}
                >
                  {item.title}
                </NavigationMenu.Link>
              )}
            </NavigationMenu.Item>
          );
        })}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
