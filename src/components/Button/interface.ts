import React from 'react';

export type ButtonElement = HTMLButtonElement;

export type ButtonVariant = 'solid' | 'outlined' | 'filled' | 'text' | 'link';

export type ButtonColor = 'primary' | 'danger' | 'warning' | 'info';

export type ButtonSize = 'small' | 'medium' | 'large';

/**
 * @description 按钮
 */
export interface ButtonProps extends React.HTMLAttributes<ButtonElement> {
  /**
   * @description: 按钮类型
   */
  variant?: ButtonVariant;
  /**
   * @description: 按钮颜色
   */
  color?: ButtonColor;
  /**
   * @description: 按钮尺寸
   */
  size?: ButtonSize;
  /**
   * @description: 自定义类名
   */
  className?: string;
  /**
   * @description: 子元素
   */
  children: React.ReactNode;
}
