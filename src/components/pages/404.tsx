import { FC } from 'react';
import Section from '../modules/Section';

const NotFound404: FC = () => {
  return (
    <Section className='items-center justify-center flex-1'>
      <h1 className='text-6xl mb-2'>404</h1>
      <p className='font-bold'>La page n'existe pas.</p>
    </Section>
  );
};
export default NotFound404;
