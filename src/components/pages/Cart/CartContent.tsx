import { FC, useMemo } from 'react';
import RemoveButton from '../../elements/Buttons/RemoveButton';
import HeaderThree from '../../elements/Headings/HeaderThree';
import MinusSvg from '../../images/icons/MinusSvg';
import PlusSvg from '../../images/icons/PlusSvg';
import TrashSvg from '../../images/icons/TrashSvg';
import { FoodItemTypes } from '../../../_types/datas';
import useAddToCart from '../../../contexts/cartContext/useAddToCart ';
import useRemoveCart from '../../../contexts/cartContext/useRemoveCart';
import useCart from '../../../contexts/cartContext/useCart';
import useTotalCart from '../../../contexts/cartContext/useCartTotal';

interface CartContentProps {
  item: FoodItemTypes;
}

const CartContent: FC<CartContentProps> = ({ item }) => {
  const { cart } = useCart();
  const { cartTotalItems } = useTotalCart();
  const addToCart = useAddToCart();
  const { removeFromCart, removeItemsFromCart } = useRemoveCart();

  const totalPrice = useMemo(
    () => `$${(item.amount * item.price).toFixed(2)}`,
    [item]
  );

  const cartMinusButton = useMemo(
    () => (
      <button
        onClick={() => removeFromCart(item.id)}
        className={`bg-gray-200 p-1 border-2 border-gray-900 rounded-full
      ${
        cartTotalItems <= 0
          ? ' opacity-50 pointer-events-none select-none'
          : ' opacity-100 transition md:hover:bg-red-700 md:hover:text-white pointer-events-auto select-auto'
      }
        `}
      >
        <MinusSvg />
      </button>
    ),
    [cartTotalItems, removeFromCart, item]
  );

  const cartPlusButton = useMemo(
    () => (
      <button
        onClick={() => addToCart(item)}
        className={`bg-gray-200 p-1 border-2 border-gray-900 rounded-full
    ${
      (cart && cartTotalItems <= 0) || cartTotalItems >= 20
        ? ' opacity-50 pointer-events-none select-none'
        : ' opacity-100 transition md:hover:bg-red-700 md:hover:text-white pointer-events-auto select-auto'
    }
      `}
      >
        <PlusSvg />
      </button>
    ),
    [cart, cartTotalItems, addToCart, item]
  );

  return (
    <div className='flex my-5 pb-2 border-b-2 border-gray-300'>
      <div className='cart-image w-20 overflow-hidden rounded flex-shrink-0 sm:w-28 md:w-1/5'>
        <img
          src={item.image}
          alt={item.title}
          className='h-20 w-full object-cover contrast-100 transition duration-300 transform-gpu filter md:hover:scale-125 md:contrast-75 sm:h-24'
        />
      </div>

      <div className='cart-information flex flex-col flex-grow self-stretch px-4'>
        <HeaderThree className='font-bold capitalize md:text-xl'>
          {item.title}
        </HeaderThree>
        <div className='flex flex-grow items-end pb-1'>
          <div className='flex items-center justify-between w-24 bg-gray-900 rounded-full'>
            {cartMinusButton}
            <span className='text-lg text-white font-bold'>{item.amount}</span>
            {cartPlusButton}
          </div>
        </div>
      </div>

      <div className='cart-price flex flex-col'>
        <span className='flex items-end text-lg font-bold'>{totalPrice}</span>
        <div className='flex h-full pb-1'>
          <RemoveButton
            className='cursor-pointer mt-auto ml-auto text-gray-500 transition md:hover:text-red-700'
            onClick={() => removeItemsFromCart(item.id)}
          >
            <TrashSvg />
          </RemoveButton>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
