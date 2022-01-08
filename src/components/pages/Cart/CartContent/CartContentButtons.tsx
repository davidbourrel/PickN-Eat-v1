import { FC, useMemo } from 'react';
import useAddToCart from '../../../../contexts/cartContext/useAddToCart ';
import useRemoveCart from '../../../../contexts/cartContext/useRemoveCart';
import { FoodItemTypes } from '../../../../_types/datas';
import MinusSvg from '../../../images/icons/MinusSvg';
import PlusSvg from '../../../images/icons/PlusSvg';

interface CartContentButtonsProps {
  cart: FoodItemTypes[];
  cartTotalItems: number;
  item: FoodItemTypes;
}

const CartContentButtons: FC<CartContentButtonsProps> = ({
  cart,
  cartTotalItems,
  item,
}) => {
  const addToCart = useAddToCart();
  const { removeFromCart } = useRemoveCart();

  const minusButton = useMemo(
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

  const plusButton = useMemo(
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
    <div className='flex flex-grow items-end pb-1'>
      <div className='flex items-center justify-between w-24 bg-gray-900 rounded-full'>
        {minusButton}
        <span className='text-lg text-white font-bold'>{item.amount}</span>
        {plusButton}
      </div>
    </div>
  );
};

export default CartContentButtons;
