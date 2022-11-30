import { ComponentProps } from 'react';
import { IconBaseProps, IconType } from '@react-icons/all-files';

import { Colors } from '@/styles/color';

interface IconProps extends ComponentProps<'svg'> {
  isActive: boolean;
  iconName: string;
  iconProps?: IconBaseProps;
}

export const Icon: React.FC<IconProps> = ({ isActive, iconName, iconProps }: IconProps) => {
  const iconDir = iconName.slice(0, 2).toLowerCase();
  const getIcon = (): JSX.Element => {
    const icon: IconType = import(`react-icons/${iconDir}/index.esm.js`).then(
      (elemList) => elemList[iconName as keyof JSX.Element],
    );
    console.log(icon);
    return icon;
  };
  const IconElement: IconType = () => getIcon();
  return <IconElement color={isActive ? Colors.Blue3 : Colors.Black3} {...iconProps} />;
};
