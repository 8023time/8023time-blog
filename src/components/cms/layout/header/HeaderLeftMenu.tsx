'use client';

import Link from 'next/link';
import * as React from 'react';
import { layoutMenu } from '../layout.config';
import { usePathname } from 'next/navigation';
import * as Dialog from '@radix-ui/react-dialog';
import { SidebarLogo } from '../sidebar/SidebarLogo';
import { PhXCircleFill } from '@components/icons/circle';
import { MingcuteMenuFill } from '@components/icons/menu';

export const HeaderLeftMenu = () => {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <button type='button' className='flex items-center justify-center rounded-md p-2' aria-label='Navigation'>
          <MingcuteMenuFill />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay
          className={`fixed inset-0 bg-black/20 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        />

        <Dialog.Content
          className={`fixed inset-y-0 left-0 w-64 transform bg-white transition-transform duration-200 dark:bg-slate-900 ${
            open ? 'translate-x-0' : '-translate-x-full'
          } flex flex-col`}
        >
          <div className='flex h-14 items-center justify-between border-b border-gray-200 px-4 dark:border-gray-700'>
            <SidebarLogo />
            <button
              onClick={() => setOpen(false)}
              className='rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700'
            >
              <PhXCircleFill />
            </button>
          </div>

          <nav className='flex-1 space-y-4 overflow-y-auto px-2 py-4'>
            {layoutMenu.map((item) => {
              if (item.type === 'item') {
                const active = isActive(item.path!);
                return (
                  <Link
                    key={item.path}
                    href={item.path!}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 rounded-md px-4 py-2 text-sm transition-colors ${
                      active
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                );
              }

              return (
                <div key={item.name} className='space-y-2'>
                  <div className='px-4 text-xs font-semibold text-gray-400 uppercase'>{item.name}</div>
                  <div className='space-y-1'>
                    {item.children!.map((child) => {
                      const active = isActive(child.path);
                      return (
                        <Link
                          key={child.path}
                          href={child.path}
                          onClick={() => setOpen(false)}
                          className={`flex items-center gap-3 rounded-md px-4 py-2 text-sm transition-colors ${
                            active
                              ? 'bg-blue-500 text-white'
                              : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                          }`}
                        >
                          {child.icon}
                          <span>{child.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
