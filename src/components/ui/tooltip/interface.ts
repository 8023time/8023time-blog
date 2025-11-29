import type { ReactNode } from 'react';

export type TooltipPlacement = 'top' | 'left' | 'right' | 'bottom';

/**
 * @description: Tooltip组件props
 */
export interface TooltipProps {
  /**
   * @description: 子元素
   */
  children: ReactNode;
  /**
   * @description: 类名
   */
  className?: string;
  /**
   * @description: 子元素
   */
  content: ReactNode | string;
  /**
   * @description: 位置
   */
  placement?: TooltipPlacement;
  /**
   * @description: 鼠标移入显示延迟
   */
  enterDelay?: number;
  /**
   * @description: 是否需要箭头
   */
  arrow?: boolean;
}
