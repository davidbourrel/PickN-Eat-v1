import { FC, useMemo } from 'react';
import { HeaderProps } from '../types';

const HeaderThree: FC<HeaderProps> = ({ text, className }) => {
  const computedClassName = useMemo(
    () => `text-lg py-2 text-gray-800 font-bold ${className ?? ''}`,
    [className]
  );

  return <h2 className={computedClassName}>{text}</h2>;
};

export default HeaderThree;
