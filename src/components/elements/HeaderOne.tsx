import { FC } from 'react';

interface HeaderOneProps {
  text: string;
}

const HeaderOne: FC<HeaderOneProps> = ({ text }) => (
  <h1 className='py-2 text-4xl text-red-700 font-bold border-b border-gray-300'>
    {text}
  </h1>
);
export default HeaderOne;
