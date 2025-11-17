import { cn } from '@utils/className';
import type { ReactNode } from 'react';
import type { MouseEvent } from 'react';

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

/**
 * @description: 标签默认props
 */
const defaultTagProps: TagProps = {
  children: '',
  color: 'gray',
  size: 'sm',
  removable: false,
  onRemove: undefined,
  onClick: undefined,
  disabled: false,
  className: '',
};

const colorMap: Record<TagColor, string> = {
  blue: 'bg-blue-100 text-blue-700 border-blue-200',
  green: 'bg-green-100 text-green-700 border-green-200',
  red: 'bg-red-100 text-red-700 border-red-200',
  yellow: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  purple: 'bg-purple-100 text-purple-700 border-purple-200',
  gray: 'bg-gray-100 text-gray-700 border-gray-200',
  indigo: 'bg-indigo-100 text-indigo-700 border-indigo-200',
};

const sizeMap: Record<TagSize, string> = {
  xs: 'px-2 py-0.5 text-xs',
  sm: 'px-2.5 py-1 text-sm',
  md: 'px-3 py-1.5 text-base',
};

// 主组件
const Tag = ({
  children = defaultTagProps.children,
  color = defaultTagProps.color,
  size = defaultTagProps.size,
  removable = defaultTagProps.removable,
  onRemove = defaultTagProps.onRemove,
  onClick = defaultTagProps.onClick,
  disabled = defaultTagProps.disabled,
  className = defaultTagProps.className,
  icon = defaultTagProps.icon,
}: TagProps) => {
  const handleRemove = (e: MouseEvent) => {
    e.stopPropagation();
    if (!disabled) onRemove?.();
  };

  const handleClick = () => {
    if (!disabled && onClick) onClick();
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border font-medium transition-all',
        'select-none',
        colorMap[color!],
        sizeMap[size!],
        onClick && !disabled && 'cursor-pointer hover:opacity-80',
        disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
      onClick={handleClick}
    >
      {icon && <span className='flex-shrink-0'>{icon}</span>}
      <span>{children}</span>
      {removable && (
        <button
          onClick={handleRemove}
          className={cn(
            'ml-1 rounded-full p-0.5 transition-colors',
            'hover:bg-black/10 focus:ring-2 focus:ring-current focus:ring-offset-1 focus:outline-none',
          )}
          aria-label='Remove'
          disabled={disabled}
        ></button>
      )}
    </span>
  );
};

export default Tag;
