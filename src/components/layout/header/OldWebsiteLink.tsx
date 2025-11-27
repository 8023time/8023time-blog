import Link from 'next/link';
import { cn } from '@lib/class-name';

const svgPath = 'M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z';

const CornerSVG = ({ positionClass }: { positionClass: string }) => (
  <svg
    width='5'
    height='5'
    viewBox='0 0 5 5'
    className={cn('absolute fill-sky-300 dark:fill-sky-300/50', positionClass)}
  >
    <path d={svgPath}></path>
  </svg>
);
const OldWebsiteLink = ({ href = 'https://www.8023time.com' }) => {
  return (
    <Link href={href} className='group relative px-1.5 text-sm/6 text-sky-800 dark:text-sky-300' target='_blank'>
      <span className='absolute inset-0 border border-dashed border-sky-300/60 bg-sky-400/10 group-hover:bg-sky-400/15 dark:border-sky-300/30'></span>
      旧版网站
      <CornerSVG positionClass='top-[-2px] left-[-2px]' />
      <CornerSVG positionClass='top-[-2px] right-[-2px]' />
      <CornerSVG positionClass='bottom-[-2px] left-[-2px]' />
      <CornerSVG positionClass='right-[-2px] bottom-[-2px]' />
    </Link>
  );
};

export default OldWebsiteLink;
