import React from 'react';
import { cn } from '@utils/index';
import type BackTop from './BackTop';
import { floatButtonStyle } from './style/indx';
import type { FloatButtonProps } from './interface';
import FloatButtonContent from './FloatButtonContent';

const _FloatButton: React.FC<FloatButtonProps> = (props) => {
  const {
    className,
    icon,
    shape = 'circle',
    type = 'default',
    size = 'medium',
    disabled = false,
    description,
    ...rest
  } = props;

  //=============== style ===============//
  const classString: string = cn(floatButtonStyle({ type, shape, size, disabled }), className);

  //=============== content ===============//
  const buttonNode = <FloatButtonContent icon={icon} description={description} />;

  return (
    <button className={classString} {...rest}>
      {buttonNode}
    </button>
  );
};

type CompoundedComponent = typeof _FloatButton & {
  BackTop: typeof BackTop;
};

const FloatButton = _FloatButton as CompoundedComponent;

export default FloatButton;
