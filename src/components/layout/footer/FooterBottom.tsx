import { SITE_COPYRIGHT } from './config';
import { ThemeSwitcher } from '@components/ui/theme-switcher';

export const FooterBottom = () => {
  return (
    <>
      <div className='px-5 pt-10 pb-15'>
        <div className='mx-auto flex w-full items-center justify-between gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8 md:px-6 lg:px-8'>
          <div className='theme-transition grid place-items-center text-sm/6 text-gray-700 sm:flex-row sm:gap-2 sm:pr-4 dark:text-gray-400'>
            {SITE_COPYRIGHT}
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </>
  );
};
