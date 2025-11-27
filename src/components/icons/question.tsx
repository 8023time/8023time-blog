import type { SVGProps } from 'react';

export function Question(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
      <g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'>
        <path d='M12 16v.01M12 13a2 2 0 0 0 .914-3.782a1.98 1.98 0 0 0-2.414.483' />
        <path d='M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0' />
      </g>
    </svg>
  );
}
