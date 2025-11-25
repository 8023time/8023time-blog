import { cn } from '@lib/className';
import { useState, useEffect, useRef } from 'react';

/**
 * @description 动态切换图片背景组件
 */
export interface InfiniteViewBackgroundProps {
  src: string[];
  isInterval?: boolean;
  intervalTime?: number;
  className?: string;
  children?: React.ReactNode;
}

/**
 * @description:默认参数
 */
const defaultProps: InfiniteViewBackgroundProps = {
  src: [],
  isInterval: true,
  intervalTime: 10000,
  className: '',
  children: null,
};

const InfiniteView: React.FC<InfiniteViewBackgroundProps> = ({
  src = defaultProps.src,
  isInterval = defaultProps.isInterval,
  intervalTime = defaultProps.intervalTime,
  className = defaultProps.className,
  children = defaultProps.children,
}: InfiniteViewBackgroundProps) => {
  const [showIndex, setShowIndex] = useState(0);
  const timeRed = useRef<NodeJS.Timeout | null>(null);

  const total: number = src.length;
  const next = () => {
    setShowIndex((pre) => (pre + 1) % total);
  };

  useEffect(() => {
    if (!isInterval && total <= 1) return;
    timeRed.current = setTimeout(() => {
      next();
    }, intervalTime);

    return () => {
      if (timeRed.current) {
        clearTimeout(timeRed.current);
      }
    };
  }, [isInterval, total, intervalTime]);
  return (
    <div className={cn('z-[-1] flex h-full w-full items-center justify-center', className)}>
      {src.map((item, index) => {
        const isActive = index === showIndex;

        return (
          <img
            key={item}
            src={item}
            alt={`bg-${index}`}
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-1000',
              isActive ? 'opacity-100' : 'opacity-0',
            )}
          />
        );
      })}
      <div>{children}</div>
    </div>
  );
};

export default InfiniteView;
