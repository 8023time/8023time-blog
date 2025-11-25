import type { SVGProps } from 'react';

export function Info(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 48 48' {...props}>
      <circle cx='24' cy='24' r='21' fill='#2196F3' />
      <path fill='#fff' d='M22 22h4v11h-4z' />
      <circle cx='24' cy='16.5' r='2.5' fill='#fff' />
    </svg>
  );
}

export const Loading: React.FC<SVGProps<SVGSVGElement>> = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='animate-spin text-blue-500'
  >
    <path d='M21 12a9 9 0 1 1-6.219-8.56' />
  </svg>
);

export function Success(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 512 512' {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M256 42.667C138.18 42.667 42.667 138.18 42.667 256S138.18 469.334 256 469.334S469.334 373.82 469.334 256S373.821 42.667 256 42.667m80.336 137.114l30.167 30.167l-131.836 132.388l-79.083-79.083l30.166-30.167l48.917 48.917z'
      />
    </svg>
  );
}

export function Warning(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32' {...props}>
      <path
        fill='currentColor'
        d='M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14s14-6.3 14-14S23.7 2 16 2m-1.1 6h2.2v11h-2.2zM16 25c-.8 0-1.5-.7-1.5-1.5S15.2 22 16 22s1.5.7 1.5 1.5S16.8 25 16 25'
      />
    </svg>
  );
}

export function Error(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 512 512' {...props}>
      <path
        fill='currentColor'
        fill-rule='evenodd'
        d='M256 42.667c117.803 0 213.334 95.53 213.334 213.333S373.803 469.334 256 469.334S42.667 373.803 42.667 256S138.197 42.667 256 42.667m48.918 134.25L256 225.836l-48.917-48.917l-30.165 30.165L225.835 256l-48.917 48.918l30.165 30.165L256 286.166l48.918 48.917l30.165-30.165L286.166 256l48.917-48.917z'
      />
    </svg>
  );
}
