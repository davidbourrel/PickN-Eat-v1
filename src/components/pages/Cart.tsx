import { FC, useMemo } from 'react';
import HeaderThree from '../elements/Headings/HeaderThree';
import HeaderTwo from '../elements/Headings/HeaderTwo';
import SubmitButton from '../elements/Buttons/SubmitButton';
import MinusSvg from '../images/icons/MinusSvg';
import PlusSvg from '../images/icons/PlusSvg';
import Section from '../modules/Section';
import TrashSvg from '../images/icons/TrashSvg';
import RemoveButton from '../elements/Buttons/RemoveButton';
import useCart from '../../contexts/cartContext/useCart';
import useAddToCart from '../../contexts/cartContext/useAddToCart ';
import useRemoveCart from '../../contexts/cartContext/useRemoveCart';
import useTotalCart from '../../contexts/cartContext/useCartTotal';

const Cart: FC = () => {
  const { cart } = useCart();
  const { cartTotalPrice, cartTotalItems } = useTotalCart();
  const addToCart = useAddToCart();
  const { removeFromCart, removeItemsFromCart, removeAllFromCart } =
    useRemoveCart();

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
          <div className='cart-image w-20 overflow-hidden flex-shrink-0 sm:w-28 md:w-1/5'>
            <img
              src={item.image}
              alt={item.title}
              className='h-20 w-full rounded object-cover contrast-100 transition duration-300 transform-gpu hover:contrast-100 filter md:hover:scale-125 md:contrast-75 sm:h-24'
            />
          </div>

          <div className='cart-information flex flex-col flex-grow self-stretch px-4'>
            <HeaderThree
              text={item.title}
              className='font-bold capitalize md:text-xl'
            />
            <div className='flex flex-grow items-end pb-1'>
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
                <span className='text-lg font-bold'>{item.amount}</span>
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
          </div>
          <div className='cart-price flex flex-col self-stretch'>
            <span className='flex items-end text-lg font-bold'>{`$${(
              item.amount * item.price
            ).toFixed(2)}`}</span>
            <RemoveButton
              className='flex flex-grow justify-end items-end cursor-pointer pb-1'
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
            <strong className='text-xl'>${cartTotalPrice.toFixed(2)}</strong>
          </div>
          <RemoveButton
            className='flex items-center justify-end mb-4 cursor-pointer'
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
