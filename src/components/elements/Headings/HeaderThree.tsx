import { FC, useMemo } from 'react';
import { HeaderProps } from '../types';

const HeaderThree: FC<HeaderProps> = ({ text, className }) => {
  const computedClassName = useMemo(
    () => `text-lg text-gray-800 font-bold ${className ?? ''}`,
    [className]
  );

  return <h3 className={computedClassName}>{text}</h3>;
};

export default HeaderThree;
