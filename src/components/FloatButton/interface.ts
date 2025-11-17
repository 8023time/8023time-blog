import type React from 'react';

export type FloatButtonShape = 'circle' | 'square';

export type FloatButtonSize = 'large' | 'small' | 'medium';

export type FloatButtonType = 'primary' | 'default';

export type FloatButtonElement = HTMLAnchorElement & HTMLButtonElement;

export interface FloatButtonProps extends React.HTMLAttributes<FloatButtonElement> {
  /**
   * @description: 添加样式
   */
  className?: string;
  /**
   * @description：显示的图标
   */
  icon?: React.ReactNode;
  /**
   * @description：按钮的形状
   */
  shape?: FloatButtonShape;
  /**
   * @description：按钮的颜色类型
   */
  type?: FloatButtonType;
  /**
   * @description: 描述文字
   */
  description?: React.ReactNode;
  /**
   * @description: 大小
   */
  size?: FloatButtonSize;
  /**
   * @description: 是否禁用
   */
  disabled?: boolean;
}

export interface FloatButtonContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * @description：样式
   */
  className?: string;
  /**
   * @description：显示的文字
   */
  description?: FloatButtonProps['description'];
  /**
   * @description：图标
   */
  icon?: FloatButtonProps['icon'];
  /**
   * @description：样式
   */
  prefixCls?: string;
}

export interface BackTopProps extends FloatButtonProps {
  /**
   * @description: 回到顶部所需时间（ms）
   */
  duration?: number;
  /**
   * @description:滚动高度达到此参数值才出现 BackTop
   */
  visibilityHeight?: number;
  /**
   * @description:设置需要监听其滚动事件的元素
   */
  target?: () => HTMLElement | Window | Document;
}
