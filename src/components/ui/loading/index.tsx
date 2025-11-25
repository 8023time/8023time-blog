import type { FC } from 'react';
import { cn } from '@/lib/class-name';

export interface LoadingProps {
  text?: string;
  className?: string;
}

const defaultLoadingText = '别着急，坐和放宽，慢慢来';

export const Loading: FC<LoadingProps> = (props) => {
  const { text, className, ...rest } = props;

  const renderText = text ?? defaultLoadingText;

  return (
    <div data-hide-print {...rest} className={cn('flex flex-col items-center justify-center gap-6 py-20', className)}>
      <div className='relative h-10 w-10'>
        <span className='animate-loading-spin absolute inset-0 rounded-full border-4 border-slate-200 border-t-indigo-500' />
      </div>

      {renderText && <span className='text-sm text-slate-600'>{renderText}</span>}
    </div>
  );
};

export const FullPageLoading = () => <Loading className='h-[calc(100vh-6.5rem-10rem)]' />;
