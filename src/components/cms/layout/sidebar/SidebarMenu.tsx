'use client';

import Link from 'next/link';
import { layoutMenu } from '../layout.config';
import { usePathname } from 'next/navigation';

function normalizePath(path: string) {
  if (!path) return '';
  return path.replace(/\/+$/, '');
}

function getActiveMenu(pathname: string) {
  const cleanPath = normalizePath(pathname);
  const allItems = layoutMenu.flatMap((menu) =>
    menu.type === 'item' ? [menu] : menu.children?.map((child) => child) || [],
  );
  const exactMatch = allItems.find((item) => normalizePath(item.path!) === cleanPath);
  if (exactMatch) return exactMatch;
  const prefixMatches = allItems.filter((item) => cleanPath.startsWith(normalizePath(item.path!)));
  if (!prefixMatches.length) return null;
  return prefixMatches.reduce((prev, curr) =>
    normalizePath(curr.path!).length > normalizePath(prev.path!).length ? curr : prev,
  );
}

export const LayoutMenu = () => {
  const pathname = usePathname();
  const activeItem = getActiveMenu(pathname);

  return (
    <nav className='mt-4 flex-1 space-y-4 overflow-y-auto px-2 py-4'>
      {layoutMenu.map((item) => {
        if (item.type === 'item') {
          const active = activeItem?.path === item.path;

          return (
            <Link
              key={item.path}
              href={item.path!}
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
            {/* 分组标题 */}
            <div className='px-4 text-xs font-semibold text-gray-400 uppercase'>{item.name}</div>
            {/* 子菜单 */}
            <div className='space-y-1'>
              {item.children!.map((child) => {
                const active = activeItem?.path === child.path;

                return (
                  <Link
                    key={child.path}
                    href={child.path}
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
  );
};
