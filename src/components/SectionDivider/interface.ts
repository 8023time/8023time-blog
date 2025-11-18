import type React from 'react';

export interface SectionDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * @description: The content of the section divider.(内容)
   */
  children?: React.ReactNode;
  /**
   * @description: The class name of the section divider.(样式)
   */
  className?: string;
}
