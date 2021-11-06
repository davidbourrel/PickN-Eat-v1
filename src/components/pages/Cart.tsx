import { FC, useContext, useMemo } from 'react';
import cartContext from '../../contexts/cartContext';
import HeaderTwo from '../elements/HeaderTwo';
import SubmitButton from '../elements/SubmitButton';
import MinusSvg from '../images/icons/MinusSvg';
import PlusSvg from '../images/icons/PlusSvg';
import Section from '../modules/Section';

const Cart: FC = () => {
  const { addToCart, removeFromCart, cart, cartTotalPrice, amountOfItems } =
    useContext(cartContext);

  const emptyCart = useMemo(
    () =>
      cart.length === 0 && (
        <div className='flex items-center justify-center flex-1 mb-10'>
          <HeaderTwo text='Your cart is empty' className='font-bold text-2xl' />
        </div>
      ),
    [cart]
  );

  return (
    <Section>
      <HeaderTwo text='Your cart' />
      <div>
        {emptyCart}
        {cart.map((item) => (
          <div
            key={item.id}
            className='m-5 pb-5 border-b-2 border-gray-300 grid grid-cols-3 gap-2'
          >
            <h3 className='font-bold mb-2'>{item.name}</h3>
            <div>
              <button
                onClick={() => removeFromCart(item)}
                className={
                  cart.length <= 0
                    ? 'bg-gray-200 p-1 border-2 border-gray-900 rounded ml-2 opacity-50 pointer-events-none select-none'
                    : 'bg-gray-200 p-1 border-2 border-gray-900 rounded transition hover:bg-red-700 ml-2 hover:text-white opacity-100 pointer-events-auto select-auto'
                }
              >
                <MinusSvg />
              </button>
              <button
                onClick={() => addToCart(item)}
                className={
                  cart.length >= 20
                    ? 'bg-gray-200 p-1 border-2 border-gray-900 rounded ml-2 opacity-50 pointer-events-none select-none'
                    : 'bg-gray-200 p-1 border-2 border-gray-900 rounded transition hover:bg-red-700 ml-2 hover:text-white opacity-100 pointer-events-auto select-auto'
                }
              >
                <PlusSvg />
              </button>
            </div>

            <div className='col-2 text-right'>
              <span className='font-bold text-red-700'>
                {amountOfItems(item.id)} x
              </span>{' '}
              <span>${item.price.toFixed(2)}</span>
            </div>
          </div>
        ))}

        {cart.length !== 0 && (
          <div className='mx-5 divide-y-2 divide-black'>
            <div className='flex justify-between pb-2'>
              <strong className='text-xl'>Total Price</strong>
              <strong className='text-red-700 text-xl'>
                ${cartTotalPrice.toFixed(2)}
              </strong>
            </div>
            <div className='text-right'>
              <SubmitButton children='Checkout' />
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Cart;
