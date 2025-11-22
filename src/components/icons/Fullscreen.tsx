import type React from 'react';
import Icon from './base/index';
import type { SVGProps } from 'react';
import type { IconWrapperProps } from './base/index';

export function Fullscreen(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 32 32' {...props}>
      <path
        fill='none'
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='2'
        d='M4 12V4h8m8 0h8v8M4 20v8h8m16-8v8h-8'
      />
    </svg>
  );
}

const FullscreenIcon: React.FC<IconWrapperProps> = (props) => {
  return <Icon icon={<Fullscreen />} {...props} />;
};

export default FullscreenIcon;
