import { FC, useMemo } from 'react';
import { ClassNameComponentProps } from '../../_types/components';
import Logo from './logo.png';

const BCLogo: FC<ClassNameComponentProps> = ({ className }) => {
  const computedClassName = useMemo(
    () => `w-16 h-17 cursor-pointer ${className ?? ''}`,
    [className]
  );
  return <img src={Logo} alt='KFC logo' className={computedClassName} />;
};

export default BCLogo;
