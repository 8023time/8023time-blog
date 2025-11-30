import { LayoutMenu } from './SidebarMenu';
import { SidebarLogo } from './SidebarLogo';

export function Sidebar() {
  return (
    <>
      <aside className='flex w-40 flex-col border-r border-gray-100'>
        <SidebarLogo />
        <LayoutMenu />
      </aside>
    </>
  );
}
