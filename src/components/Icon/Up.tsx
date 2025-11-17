import Icon from './base/index';
import type { SVGProps } from 'react';
import type { IconWrapperProps } from './base/index';

export function Up(props?: SVGProps<SVGSVGElement>) {
  return (
    <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
      <path
        fill='none'
        stroke='currentColor'
        d='M1.5 12c1.11 0 2.771-1.1 4.166-2.212c1.796-1.432 3.365-3.141 4.563-5.102c.897-1.469 1.758-3.253 1.758-4.686M22.5 12c-1.11 0-2.771-1.1-4.166-2.212c-1.796-1.432-3.365-3.141-4.563-5.102c-.897-1.469-1.758-3.253-1.758-4.686M12 0v24'
      />
    </svg>
  );
}

const UpIcon = (props: IconWrapperProps) => {
  return <Icon icon={<Up />} {...props} />;
};

export default UpIcon;
