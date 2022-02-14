import { FC } from 'react';
import { Link } from 'react-router-dom';
import OrderButton from '../elements/Buttons/OrderButton';
import HeaderOne from '../elements/Headings/HeaderOne';
import HeaderTwo from '../elements/Headings/HeaderTwo';
import Section from '../modules/Section';

const Delivery: FC = () => {
  return (
    <Section>
      <HeaderOne>Delivery</HeaderOne>
      <div className='grid grid-rows-6 place-content-center text-center'>
        <p className='my-6 font-semibold text-lg'>
          Place an order and get delivered
        </p>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://deliveroo.fr/fr/'
          className='place-self-center w-full'
        >
          <OrderButton>ORDER WITH DELIVEROO</OrderButton>
        </a>

        <div className='flex justify-between items-center my-6 mx-auto'>
          <span className='rounded-full w-10 h-1 bg-red-900' />
          <span className='mx-4 mb-1'>OR</span>
          <span className='rounded-full w-10 h-1 bg-red-900' />
        </div>
        <HeaderTwo className='border-none'>TAKEAWAY</HeaderTwo>
        <p className='font-semibold text-lg'>Order now and pick up on site</p>
        <Link to='/'>
          <OrderButton>ORDER ONLINE</OrderButton>
        </Link>
      </div>
    </Section>
  );
};
export default Delivery;
