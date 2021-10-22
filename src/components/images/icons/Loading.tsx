import { FC } from 'react';

const Loading: FC = () => (
  <div className='flex items-center justify-center h-80'>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
      className='animate-spin h-12 w-12 mr-3 text-red-700'
    >
      <g transform='translate(80,50)'>
        <g transform='rotate(0)'>
          <circle
            cx='0'
            cy='0'
            r='6'
            fill='currentColor'
            transform='matrix(1.0625,0,0,1.0625,0,0)'
          />
        </g>
      </g>
      <g transform='translate(71.21320343559643,71.21320343559643)'>
        <g transform='rotate(45)'>
          <circle
            cx='0'
            cy='0'
            r='6'
            fill='currentColor'
            transform='matrix(1.125,0,0,1.125,0,0)'
          />
        </g>
      </g>
      <g transform='translate(50,80)'>
        <g transform='rotate(90)'>
          <circle
            cx='0'
            cy='0'
            r='6'
            fill='currentColor'
            transform='matrix(1.1875,0,0,1.1875,0,0)'
          />
        </g>
      </g>
      <g transform='translate(28.786796564403577,71.21320343559643)'>
        <g transform='rotate(135)'>
          <circle
            cx='0'
            cy='0'
            r='6'
            fill='currentColor'
            transform='matrix(1.25,0,0,1.25,0,0)'
          />
        </g>
      </g>
      <g transform='translate(20,50.00000000000001)'>
        <g transform='rotate(180)'>
          <circle
            cx='0'
            cy='0'
            r='6'
            fill='currentColor'
            transform='matrix(1.3125,0,0,1.3125,0,0)'
          />
        </g>
      </g>
      <g transform='translate(28.78679656440357,28.786796564403577)'>
        <g transform='rotate(225)'>
          <circle
            cx='0'
            cy='0'
            r='6'
            fill='currentColor'
            transform='matrix(1.375,0,0,1.375,0,0)'
          />
        </g>
      </g>
      <g transform='translate(49.99999999999999,20)'>
        <g transform='rotate(270)'>
          <circle
            cx='0'
            cy='0'
            r='6'
            fill='currentColor'
            transform='matrix(1.4375,0,0,1.4375,0,0)'
          />
        </g>
      </g>
      <g transform='translate(71.21320343559643,28.78679656440357)'>
        <g transform='rotate(315)'>
          <circle
            cx='0'
            cy='0'
            r='6'
            fill='currentColor'
            transform='matrix(1.5,0,0,1.5,0,0)'
          />
        </g>
      </g>
    </svg>
  </div>
);

export default Loading;
