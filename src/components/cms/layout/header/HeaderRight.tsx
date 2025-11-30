import Image from 'next/image';
import { ThemeToggle } from '@components/ui/theme-switcher';
import { FullscreenSwitcher } from '@components/ui/full-screen-switcher';

export const HeaderRight = () => {
  return (
    <>
      <div className='flex items-center'>
        <FullscreenSwitcher />
        <ThemeToggle />
        <UserAuth />
      </div>
    </>
  );
};

export const UserAuth = () => {
  return (
    <>
      <div className='flex cursor-pointer items-center space-x-2 rounded-full p-2 transition-colors hover:bg-gray-100'>
        <Image src='/avatar.png' alt='avatar' width={24} height={24} className='rounded-full' />
        <span className='hidden text-xs font-medium text-gray-700 md:inline'>寻觅~流光</span>
      </div>
    </>
  );
};
