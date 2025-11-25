import React from 'react';
import { cn } from '@/lib/class-name';

export interface LogoProps {
  src: string;
  name: string;
  className?: string;
  hoverColor?: string;
}

const Logo: React.FC<LogoProps> = (props) => {
  const { src, name, className, hoverColor } = props;

  return (
    <div
      className={cn(
        'group relative flex h-20 w-20 items-center justify-center rounded-2xl p-1',
        'border-2 border-slate-300 bg-white/10 backdrop-blur-xl',
        'transform transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-105',
        'sm:h-20 sm:w-20 md:h-25 md:w-25 lg:h-30 lg:w-30',
        className,
      )}
      style={{
        transition: 'border-color 1s ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = hoverColor!;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = '';
      }}
    >
      <img src={src} className='h-full w-full object-contain' alt={name} aria-label={name} loading='lazy' />
    </div>
  );
};

export default Logo;
