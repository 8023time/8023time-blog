import Image from 'next/image';

const APP_NAME = '寻觅~流光';

export function SidebarLogo() {
  return (
    <>
      <div className='flex items-center justify-center gap-2 py-2'>
        <Image src='/logo.png' alt='App Logo' width={40} height={40} className='object-contain' priority />
        <span
          className='bg-gradient-to-r from-gray-500 to-gray-900 bg-clip-text text-center font-sans text-lg font-bold tracking-wide text-transparent dark:from-gray-100 dark:to-gray-500'
          aria-hidden='true'
        >
          {APP_NAME}
        </span>
      </div>
    </>
  );
}
