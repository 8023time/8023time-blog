import { SidebarLogo } from './logo';
import { LayoutMenu } from './layout-menu';

export function Sidebar() {
  return (
    <aside className='flex w-40 flex-col border-r border-gray-100 bg-white text-black'>
      <SidebarLogo />
      <LayoutMenu />
    </aside>
  );
}
