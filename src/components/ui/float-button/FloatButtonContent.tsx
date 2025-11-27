import type { FC } from 'react';
import { cn } from '@/lib/class-name';
import { Question } from '@components/icons/question';
import { FloatButtonContentStyle } from './style/indx';
import type { FloatButtonContentProps } from './interface';

export const FloatButtonContent: FC<FloatButtonContentProps> = (props) => {
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
