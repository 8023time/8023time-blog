import type { ReactNode } from 'react';

export type TooltipPlacement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom';

/**
 * @description: Tooltip组件props
 */
export interface TooltipProps {
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
   * @description: 鼠标移出隐藏延迟
   */
  leaveDelay?: number;
  /**
   * @description: 是否需要箭头
   */
  arrow?: boolean;
}
