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
            className='theme-transition icon-common flex size-8 items-center justify-center rounded-md'
            aria-label='Navigation'
          >
            <MingcuteMenuFill />
          </button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay
            className={`fixed inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
          />
          <Dialog.Content
            className={`fixed bottom-0 left-0 w-full transform rounded-t-xl bg-white p-4 shadow-lg transition-transform duration-200 dark:bg-slate-900 ${
              open ? 'translate-y-0' : 'translate-y-full'
            }`}
          >
            <div className='mx-auto h-1 w-8 rounded-full bg-slate-300 dark:bg-slate-700' />

            <div className='mt-4 max-h-[65vh] space-y-4 overflow-y-auto'>
              {headerMenuConfig.map((item) => (
                <div key={item.title} className='space-y-1.5'>
                  <div className='px-0.5 text-xs font-semibold tracking-wide text-slate-400 dark:text-slate-500'>
                    {item.title}
                  </div>

                  <ul className='grid grid-cols-2 gap-2'>
                    {item.subMenu?.map((child) => (
                      <li key={child.title}>
                        <Link
                          href={child.path ?? '/'}
                          onClick={() => setOpen(false)}
                          className='block rounded-md border border-transparent bg-slate-100 px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700'
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
