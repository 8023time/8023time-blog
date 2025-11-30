import Link from 'next/link';
import { SITE_INFO } from './config';
import { Tooltip } from '@components/ui/tooltip';

export const FooterTop = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center space-y-4 py-6'>
      <ul className='flex gap-4'>
        {SITE_INFO.socialIcons.map((item) => (
          <li key={item.name}>
            <Link href={item.to} target='_blank' className='transition-transform hover:scale-110'>
              <Tooltip content={item.name} placement='top'>
                <span className='theme-transition icon-circle' title={item.name}>
                  {item.icon}
                </span>
              </Tooltip>
            </Link>
          </li>
        ))}
      </ul>

      <div className='text-sm text-gray-500'>{SITE_INFO.stats}</div>
    </div>
  );
};
