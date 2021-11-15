import { FC, useMemo } from 'react';
import { HeaderProps } from '../types';

const HeaderOne: FC<HeaderProps> = ({ text, className }) => {
  const computedClassName = useMemo(
    () =>
      `text-3xl py-2 text-red-700 font-bold border-b border-gray-300 md:text-4xl ${
        className || ''
      }`,
    [className]
  );

  return <h1 className={computedClassName}>{text}</h1>;
};
export default HeaderOne;
