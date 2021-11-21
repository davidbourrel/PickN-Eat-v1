import { FC, useMemo } from 'react';
import { ClassNameComponentProps } from '../../../_types/components';

const PlusSvg: FC<ClassNameComponentProps> = ({ className }) => {
  const computedClassName = useMemo(
    () =>
      `fill-current w-5 h-5 cursor-pointer transition hover:text-white ${className}`,
    [className]
  );

  return (
    <svg className={computedClassName} viewBox='0 0 448 512'>
      <title>More</title>
      <path
        fill='currentColor'
        d='M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z'
      />
    </svg>
  );
};

export default PlusSvg;
