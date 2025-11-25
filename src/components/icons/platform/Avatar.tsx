import type React from 'react';
import Icon from '../base/index';
import type { IconWrapperProps } from '../base/index';

const AvatarIcon: React.FC<IconWrapperProps> = (props) => {
  return <Icon icon='/avatar.jpg' {...props} />;
};

export default AvatarIcon;
