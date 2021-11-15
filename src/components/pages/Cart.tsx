import { FC, useContext, useMemo } from 'react';
import cartContext from '../../contexts/cartContext';
import HeaderThree from '../elements/Headings/HeaderThree';
import HeaderTwo from '../elements/Headings/HeaderTwo';
import SubmitButton from '../elements/Buttons/SubmitButton';
import MinusSvg from '../images/icons/MinusSvg';
import PlusSvg from '../images/icons/PlusSvg';
import Section from '../modules/Section';

const Cart: FC = () => {
  const { addToCart, removeFromCart, cart, cartTotalPrice, cartTotalItems } =
    useContext(cartContext);

  const emptyCart = useMemo(
    () =>
      cartTotalItems === 0 ? (
        <HeaderTwo
          text='Your cart is empty'
          className='font-bold border-none text-center'
        />
      ) : null,
    [cartTotalItems]
  );

  const cartContent = useMemo(
    () =>
      cart.map((item) => (
        <div
          key={item.id}
          className='grid grid-cols-3 gap-2 items-center pb-2 border-b-2 border-gray-300 my-5 sm:mx-5'
        >
          <HeaderThree
            text={item.title}
            className='font-bold mb-2 capitalize'
          />
          <div>
            <button
              onClick={() => removeFromCart(item.id)}
              className={
                cartTotalItems <= 0
                  ? 'bg-gray-200 p-1 border-2 border-gray-900 rounded ml-2 opacity-50 pointer-events-none select-none'
                  : 'bg-gray-200 p-1 border-2 border-gray-900 rounded transition hover:bg-red-700 ml-2 hover:text-white opacity-100 pointer-events-auto select-auto'
              }
            >
              <MinusSvg />
            </button>
            <button
              onClick={() => addToCart(item)}
              className={
                cartTotalItems >= 20
                  ? 'bg-gray-200 p-1 border-2 border-gray-900 rounded ml-2 opacity-50 pointer-events-none select-none'
                  : 'bg-gray-200 p-1 border-2 border-gray-900 rounded transition hover:bg-red-700 ml-2 hover:text-white opacity-100 pointer-events-auto select-auto'
              }
            >
              <PlusSvg />
            </button>
          </div>

          <div className='text-right font-bold'>
            <span className='text-red-700'>{item.amount}</span>
            <span>{` x ${item.price.toFixed(2)} = ${(
              item.amount * item.price
            ).toFixed(2)}`}</span>
          </div>
        </div>
      )),
    [addToCart, removeFromCart, cart, cartTotalItems]
  );

  const cartCheckout = useMemo(
    () =>
      cart.length !== 0 && (
        <div className='pt-5 sm:mx-5'>
          <div className='flex justify-between mb-4'>
            <strong className='text-xl'>Total Price</strong>
            <strong className='text-red-700 text-xl'>
              ${cartTotalPrice.toFixed(2)}
            </strong>
          </div>

          <SubmitButton
            children='Checkout'
            className='bg-green-800 hover:bg-green-700'
          />
        </div>
      ),
    [cart, cartTotalPrice]
  );

  return (
    <Section>
      <HeaderTwo text='Your cart' />
      <div className='pt-4 sm:px-4'>
        {emptyCart}
        {cartContent}
        {cartCheckout}
      </div>
    </Section>
  );
};

export default Cart;
