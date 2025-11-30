import { usePathname } from 'next/navigation';
import { layoutMenu } from '../layout.config';

function normalize(path: string) {
  return path.replace(/\/+$/, '');
}

function getCurrentPageName(path: string): string {
  const cleanPath = normalize(path);

  for (const menu of layoutMenu) {
    if (menu.type === 'item' && normalize(menu.path) === cleanPath) return menu.name;
    if (menu.type === 'group') {
      for (const child of menu.children || []) {
        if (normalize(child.path) === cleanPath) {
          return child.name;
        }
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
        <span className='max-w-xs truncate font-medium text-blue-600'>{currentName}</span>
      </div>
    </>
  );
};
