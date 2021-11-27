import { FC, useMemo } from 'react';
import { ClassNameComponentProps } from '../../../_types/components';

const MinusSvg: FC<ClassNameComponentProps> = ({ className }) => {
  const computedClassName = useMemo(
    () =>
      `fill-current w-5 h-5 cursor-pointer transition md:hover:text-white ${className}`,
    [className]
  );

  return (
    <svg className={computedClassName} viewBox='0 0 448 512'>
      <title>Less</title>
      <path
        fill='currentColor'
        d='M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z'
      />
    </svg>
  );
};

export default MinusSvg;
