import { FC } from 'react';
import Section from '../modules/Section';

const Delivery: FC = () => {
  return (
    <Section className='items-center justify-center flex-1'>
      <h1 className='font-bold text-2xl'>DELIVERY</h1>
      <p>Place an order and get delivered</p>
      <button>ORDER WIH DELIVEROO</button>
      <span>OR</span>
      <h2>TAKEAWAY</h2>
      <p>Order and pick up on site</p>
      <button>ORDER ONLINE</button>
    </Section>
  );
};
export default Delivery;
