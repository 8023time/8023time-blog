import type { ReactNode } from 'react';

/**
 * @description: 标签颜色
 */
export type TagColor = 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'gray' | 'indigo';

/**
 * @description：标签尺寸
 */
export type TagSize = 'xs' | 'sm' | 'md';

/**
 * @description: 标签props
 */
export interface TagProps {
  /**
   * @description: 标签内容
   * @default: ""
   */
  children?: ReactNode;
  /**
   * @description: 标签颜色
   * @default: "gray"
   */
  color?: TagColor;
  /**
   * @description: 标签尺寸
   * @default: "md"
   */
  size?: TagSize;
  /**
   * @description: 是否可删除
   * @default: false
   */
  removable?: boolean;
  /**
   * @description: 点击删除回调
   * @default: undefined
   */
  onRemove?: () => void;
  /**
   * @description: 点击回调
   * @default: undefined
   */
  onClick?: () => void;
  /**
   * @description: 是否禁用
   * @default: false
   */
  disabled?: boolean;
  /**
   * @description: 自定义类名
   * @default: ""
   */
  className?: string;
  /**
   * @description: 自定义图标
   * @default: undefined
   */
  icon?: ReactNode;
}
