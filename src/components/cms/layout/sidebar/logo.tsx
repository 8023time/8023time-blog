import Image from 'next/image';

const APP_NAME = '寻觅~流光';

export function SidebarLogo() {
  return (
    <div className='flex items-center justify-center gap-2 py-2'>
      <Image src='/logo.png' alt='App Logo' width={40} height={40} className='object-contain' priority />
      <span className='text-lg leading-none font-extrabold tracking-wider text-gray-800' aria-hidden='true'>
        {APP_NAME}
      </span>
    </div>
  );
}
