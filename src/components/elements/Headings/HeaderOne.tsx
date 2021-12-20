import { FC, useMemo } from 'react';
import { HeaderProps } from '../types';

const HeaderOne: FC<HeaderProps> = ({ className, children }) => {
  const computedClassName = useMemo(
    () =>
      `text-2xl py-2 text-gray-800 font-semibold border-b border-gray-300 md:text-3xl ${
        className ?? ''
      }`,
    [className]
  );

  return <h1 className={computedClassName}>{children}</h1>;
};
export default HeaderOne;
