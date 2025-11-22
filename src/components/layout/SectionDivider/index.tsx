import React from 'react';
import { cn } from '@utils/className';
import { SectionDividerStyle } from './style/index';
import type { SectionDividerProps } from './interface';

export const SectionDivider: React.FC<SectionDividerProps> = (props) => {
  const { children, className, ...rest } = props;

  const styles = cn(SectionDividerStyle(), className);

  return (
    <div className={styles} {...rest}>
      {children}
    </div>
  );
};
