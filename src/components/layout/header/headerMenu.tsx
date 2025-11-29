import Link from 'next/link';
import * as React from 'react';
import { headerMenuConfig } from './config';
import * as Dialog from '@radix-ui/react-dialog';
import { MingcuteMenuFill } from '@components/icons/menu';

export const HeaderMenu = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger>
          <button
            type='button'
            className='flex size-7 cursor-pointer place-items-center justify-center rounded-md text-center hover:bg-gray-950/5 dark:text-white dark:hover:bg-white/10'
            aria-label='Navigation'
            title='Navigation'
          >
            <MingcuteMenuFill />
          </button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay
            className={`fixed inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
          />
          <Dialog.Content
            className={`fixed bottom-0 left-0 w-full transform rounded-t-3xl bg-white/95 p-5 shadow-[0_-18px_45px_-28px_rgba(15,23,42,0.8)] transition-transform duration-300 dark:bg-slate-900/95 ${
              open ? 'translate-y-0' : 'translate-y-full'
            }`}
          >
            <div className='mx-auto h-1.5 w-10 rounded-full bg-slate-300/80 dark:bg-slate-700/80' />
            <div className='mt-4 max-h-[65vh] space-y-4 overflow-y-auto'>
              {headerMenuConfig.map((item) => (
                <div key={item.title} className='space-y-2'>
                  {/* 分组标题 */}
                  <div className='px-1 text-xs font-medium tracking-[0.16em] text-slate-400 uppercase dark:text-slate-500'>
                    {item.title}
                  </div>

                  {/* 子菜单列表 */}
                  <div className='rounded-2xl border border-slate-100/70 bg-slate-50/80 p-2 shadow-sm dark:border-slate-800/60 dark:bg-slate-900/70'>
                    <ul className='flex flex-wrap gap-2'>
                      {item.subMenu?.map((child) => (
                        <li key={child.title}>
                          <Link
                            href={child.path ?? '/'}
                            onClick={() => setOpen(false)}
                            className='inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200/80 transition hover:-translate-y-0.5 hover:bg-slate-900 hover:text-white hover:ring-slate-900/20 dark:bg-slate-800 dark:text-slate-100 dark:ring-slate-700/80 dark:hover:bg-slate-50 dark:hover:text-slate-900'
                          >
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
