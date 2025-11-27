import { usePathname } from 'next/navigation';
import { layoutMenu } from '../sidebar/config';

function getCurrentPageName(path: string): string {
  if (path.startsWith('/activity/detail/')) return '活动详情';

  for (const menu of layoutMenu) {
    if (menu.type === 'item' && menu.path === path) return menu.name;
    if (menu.type === 'group') {
      for (const child of menu.children || []) {
        if (child.path === path) return child.name;
      }
    }
  }
  return '页面';
}
export const BreadCrumb = () => {
  const pathname = usePathname();
  const currentName = getCurrentPageName(pathname);

  return (
    <>
      <div className='flex items-center text-sm'>
        <a href='/activity' className='text-gray-500 transition-colors hover:text-blue-600'>
          首页
        </a>
        <span className='mx-2 font-light text-gray-400'>/</span>
        <span className='max-w-xs truncate font-medium text-blue-600'>{currentName}</span>
      </div>
    </>
  );
};
