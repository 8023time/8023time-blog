import React from 'react';
import { cn } from '../../../common/utils/className';

/**
 * @description: 图标组件属性
 */
export type IconProps = {
  /**
   * @description: 图标名称，可以是字符串或 导入的 svg，png 等静态资源
   * @default: ''
   */
  icon: string | React.ReactNode;
  /**
   * @description: 图标资源的描述，当 icon 为静态资源时，该属性可用于设置 alt 标签
   * @default: ''
   */
  alt?: string;
  /**
   * @description: 图标大小，单位为像素
   * @default: 24
   */
  size?: number;
  /**
   * @description: 是否为圆角
   * @default: false
   */
  round?: boolean;
  /**
   * @description：自定义样式
   * @default: ''
   */
  className?: string;
  /**
   * @description: 图标颜色
   * @default: ''
   */
  color?: string;
  /**
   * @description: 点击事件
   * @default: undefined
   */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

/**
 * @description: 图标包装器属性（用于 createIcon 等二次封装，排除 icon）
 */
export type IconWrapperProps = Omit<IconProps, 'icon'>;

/**
 * @description: 默认图标组件属性
 */
const defaultIconProps: IconProps = {
  icon: '',
  alt: '',
  size: 30,
  round: true,
  className: '',
  color: '',
  onClick: undefined,
};

const Icon = React.memo(
  ({
    icon = defaultIconProps.icon,
    alt = defaultIconProps.alt,
    size = defaultIconProps.size,
    round = defaultIconProps.round,
    className = defaultIconProps.className,
    color = defaultIconProps.color,
    onClick = defaultIconProps.onClick,
  }: IconProps) => {
    const isString = typeof icon === 'string';

    return (
      <div
        className={cn(
          'relative inline-block rounded-xl p-1.5 transition-colors duration-200 ease-in-out hover:bg-stone-100/50 dark:hover:bg-stone-700/50',
          className,
        )}
        style={{
          width: size,
          height: size,
          color,
        }}
        aria-label={alt}
        role={alt ? 'img' : undefined}
        onClick={onClick}
      >
        {isString ? (
          <img
            src={icon}
            alt={alt}
            loading='lazy'
            className={cn(
              'h-full w-full object-contain transition-transform duration-200 ease-in-out',
              round && 'overflow-hidden rounded-full',
            )}
          />
        ) : (
          icon
        )}
      </div>
    );
  },
);

export default Icon;
