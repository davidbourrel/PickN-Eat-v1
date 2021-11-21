import { FC, useContext, useMemo } from 'react';
import cartContext from '../../contexts/cartContext';
import HeaderThree from '../elements/Headings/HeaderThree';
import HeaderTwo from '../elements/Headings/HeaderTwo';
import SubmitButton from '../elements/Buttons/SubmitButton';
import MinusSvg from '../images/icons/MinusSvg';
import PlusSvg from '../images/icons/PlusSvg';
import Section from '../modules/Section';
import TrashSvg from '../images/icons/TrashSvg';
import RemoveButton from '../elements/Buttons/RemoveButton';

const Cart: FC = () => {
  const {
    cart,
    cartTotalPrice,
    cartTotalItems,
    addToCart,
    removeFromCart,
    removeItemsFromCart,
    removeAllFromCart,
  } = useContext(cartContext);

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
          className='flex my-5 pb-2 border-b-2 border-gray-300'
        >
          <div className='image-container w-20 md:w-28 overflow-hidden flex-shrink-0'>
            <img
              src={item.image}
              alt={item.title}
              className='h-20 rounded  w-full object-cover contrast-100 transition duration-300 transform-gpu hover:contrast-100 filter md:hover:scale-125 md:contrast-75 md:h-28 '
            />
          </div>

          <div className='flex flex-col flex-grow px-4'>
            <HeaderThree
              text={item.title}
              className='font-bold capitalize mb-4 md:text-xl'
            />
            <div className='flex items-center justify-between w-24'>
              <button
                onClick={() => removeFromCart(item.id)}
                className={`bg-gray-200 p-1 border-2 border-gray-900 rounded-full
                  ${
                    cartTotalItems <= 0
                      ? ' opacity-50 pointer-events-none select-none'
                      : ' opacity-100 transition hover:bg-red-700 hover:text-white pointer-events-auto select-auto'
                  }
                    `}
              >
                <MinusSvg />
              </button>
              <span className='text-lg text-red-700 font-bold h-full flex items-center justify-center'>
                {item.amount}
              </span>
              <button
                onClick={() => addToCart(item)}
                className={`bg-gray-200 p-1 border-2 border-gray-900 rounded-full
                ${
                  cartTotalItems <= 0
                    ? ' opacity-50 pointer-events-none select-none'
                    : ' opacity-100 transition hover:bg-red-700 hover:text-white pointer-events-auto select-auto'
                }
                  `}
              >
                <PlusSvg />
              </button>
            </div>
          </div>
          <div className='flex flex-col'>
            <span className='flex text-lg font-bold mb-6'>{`$${(
              item.amount * item.price
            ).toFixed(2)}`}</span>
            <RemoveButton
              className='flex justify-end cursor-pointer'
              onClick={() => removeItemsFromCart(item.id)}
            >
              <TrashSvg />
            </RemoveButton>
          </div>
        </div>
      )),
    [addToCart, removeFromCart, removeItemsFromCart, cart, cartTotalItems]
  );

  const cartCheckout = useMemo(
    () =>
      cart.length !== 0 && (
        <div className='pt-5'>
          <div className='flex justify-between'>
            <strong className='text-xl'>Total Price</strong>
            <strong className='text-red-700 text-xl'>
              ${cartTotalPrice.toFixed(2)}
            </strong>
          </div>
          <RemoveButton
            className='flex items-center justify-end  mb-4 cursor-pointer'
            onClick={removeAllFromCart}
          >
            Remove all
          </RemoveButton>

          <SubmitButton
            children='Checkout'
            className='bg-green-800 hover:bg-green-700'
          />
        </div>
      ),
    [cart, cartTotalPrice, removeAllFromCart]
  );

  return (
    <Section>
      <HeaderTwo text='Your cart' className='mb-4' />
      {emptyCart}
      {cartContent}
      {cartCheckout}
    </Section>
  );
};

export default Cart;
