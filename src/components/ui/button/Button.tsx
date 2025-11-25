import type { FC } from 'react';
import { cn } from '@/lib/class-name';
import { buttonStyle } from './style/index';
import type { ButtonProps } from './interface';

const Button: FC<ButtonProps> = (props) => {
  const { variant = 'solid', color = 'info', size = 'medium', className = '', children, ...rest } = props;

  const classes = cn(buttonStyle({ variant, color, size }), className);

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
