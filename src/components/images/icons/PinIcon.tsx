import { FC, useMemo } from 'react';
import { ClassNameComponentProps } from '../../../_types/components';

const PinIcon: FC<ClassNameComponentProps> = ({ className }) => {
  const computedClassName = useMemo(
    () => `w-8 fill-current ${className ?? ''}`,
    [className]
  );
  return (
    <svg className={computedClassName} viewBox='0 0 33 39'>
      <title>Pin</title>
      <defs>
        <filter
          x='-101.5%'
          y='-67.9%'
          width='303.0%'
          height='271.8%'
          filterUnits='objectBoundingBox'
        >
          <feOffset
            dx='0'
            dy='7'
            in='SourceAlpha'
            result='shadowOffsetOuter1'
          ></feOffset>
          <feGaussianBlur
            stdDeviation='10'
            in='shadowOffsetOuter1'
            result='shadowBlurOuter1'
          ></feGaussianBlur>
          <feColorMatrix
            values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.304036458 0'
            type='matrix'
            in='shadowBlurOuter1'
          ></feColorMatrix>
        </filter>
      </defs>
      <g stroke='none' strokeWidth='1'>
        <g>
          <g fillRule='nonzero'>
            <path d='M16.5,0 C7.425,0 0,7.3125 0,16.25 C0,28.275 15.015,38.35 15.51,38.675 C15.84,38.8375 16.17,39 16.5,39 C16.83,39 17.16,38.8375 17.49,38.675 C17.985,38.35 33,28.275 33,16.25 C33,7.3125 25.575,0 16.5,0 Z'></path>
          </g>
          <circle fill='#FFFFFF' cx='16.5' cy='15.5' r='5.5'></circle>
        </g>
      </g>
    </svg>
  );
};

export default PinIcon;
