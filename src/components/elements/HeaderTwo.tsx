import { FC, useMemo } from 'react';
import { HeaderProps } from './types';

const HeaderTwo: FC<HeaderProps> = ({ text, className }) => {
  const computedClassName = useMemo(
    () =>
      `py-2 text-3xl text-gray-800 font-bold border-b border-gray-300 ${
        className || ''
      }`,
    [className]
  );

  return <h2 className={computedClassName}>{text}</h2>;
};

export default HeaderTwo;
