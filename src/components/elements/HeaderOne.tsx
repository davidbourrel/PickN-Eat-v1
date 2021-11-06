import { FC, useMemo } from 'react';
import { HeaderProps } from './types';

const HeaderOne: FC<HeaderProps> = ({ text, className }) => {
  const computedClassName = useMemo(
    () =>
      `py-2 text-4xl text-red-700 font-bold border-b border-gray-300 ${
        className || ''
      }`,
    [className]
  );

  return <h1 className={computedClassName}>{text}</h1>;
};
export default HeaderOne;
