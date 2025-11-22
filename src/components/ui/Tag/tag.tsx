import type React from 'react';
import { cn } from '@/utils/className';
import type { MouseEvent } from 'react';
import { TagStyle } from './style/index';
import type { TagProps } from './interface';

// 主组件
const Tag: React.FC<TagProps> = (props) => {
  const { children, color, size, removable, onRemove, onClick, disabled, className, icon, ...rest } = props;

  const handleRemove = (e: MouseEvent) => {
    e.stopPropagation();
    if (!disabled) onRemove?.();
  };

  const clickable = Boolean(onClick && !disabled);

  const classes = cn(TagStyle({ color, size, clickable, disabled }), className);

  return (
    <span className={classes} onClick={!disabled ? onClick : undefined} {...rest}>
      {icon && <span className='shrink-0'>{icon}</span>}

      <span>{children}</span>

      {removable && (
        <button
          onClick={handleRemove}
          className={`ml-1 rounded-full p-0.5 transition-colors hover:bg-black/10 focus:ring-2 focus:ring-current focus:ring-offset-1 focus:outline-none`}
          aria-label='Remove'
          disabled={disabled}
        />
      )}
    </span>
  );
};

export default Tag;
