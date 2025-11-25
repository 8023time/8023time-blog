import type { FC } from 'react';
import { cn } from '@/lib/class-name';
import { SectionDividerStyle } from './style/index';
import type { SectionDividerProps } from './interface';

export const SectionDivider: FC<SectionDividerProps> = (props) => {
  const { children, className, ...rest } = props;

  const styles = cn(SectionDividerStyle(), className);

  return (
    <div className={styles} {...rest}>
      {children}
    </div>
  );
};
