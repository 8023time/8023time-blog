import React from 'react';
import { cn } from '@utils/index';
import { Question } from '@components/index';
import type { FloatButtonContentProps } from './interface';
import { FloatButtonContentStyle } from './style/indx';

const FloatButtonContent: React.FC<FloatButtonContentProps> = (props) => {
  const { icon, description, className, ...rest } = props;

  const { container, icon: iconStyle, description: descriptionStyle } = FloatButtonContentStyle();

  const defaultElement = (
    <div>
      <Question />
    </div>
  );

  return (
    <div {...rest} className={cn(container, className)}>
      {icon && <div className={cn(iconStyle, className)}>{icon}</div>}
      {description && <div className={cn(descriptionStyle, className)}>{description}</div>}
      {!icon && !description && defaultElement}
    </div>
  );
};

export default FloatButtonContent;
