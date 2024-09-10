import React from 'react';
import * as TablerIcon from 'react-icons/tb';

export type IconName = keyof typeof TablerIcon;

interface IconProps extends React.SVGAttributes<SVGElement> {
  icon: IconName;
}

const Icon = ({ icon, ...props }: IconProps) => {
  const IconComponent = TablerIcon[icon];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent {...props} />;
};

export default Icon;
