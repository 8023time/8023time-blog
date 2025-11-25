import React from 'react';
import { cn } from '@lib/className';
import { buttonStyle } from './style/index';
import type { ButtonProps } from './interface';

const Button: React.FC<ButtonProps> = (props) => {
  const { variant = 'solid', color = 'info', size = 'medium', className = '', children, ...rest } = props;

  //=============== style(样式) =================//
  const classes = cn(buttonStyle({ variant, color, size }), className);

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
