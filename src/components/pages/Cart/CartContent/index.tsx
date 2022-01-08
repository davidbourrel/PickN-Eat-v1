import { FC, useMemo } from 'react';
import RemoveButton from '../../../elements/Buttons/RemoveButton';
import HeaderThree from '../../../elements/Headings/HeaderThree';
import TrashSvg from '../../../images/icons/TrashSvg';
import { FoodItemTypes } from '../../../../_types/datas';
import useRemoveCart from '../../../../contexts/cartContext/useRemoveCart';
import CartContentButtons from './CartContentButtons';

interface CartContentProps {
  cart: FoodItemTypes[];
  cartTotalItems: number;
  item: FoodItemTypes;
}

const CartContent: FC<CartContentProps> = ({ cart, cartTotalItems, item }) => {
  const { removeItemsFromCart } = useRemoveCart();

  const totalPrice = useMemo(
    () => `$${(item.amount * item.price).toFixed(2)}`,
    [item]
  );

  return (
    <div className='flex my-5 pb-2 border-b-2 border-gray-300'>
      <div className='cart-image w-20 overflow-hidden rounded flex-shrink-0 sm:w-28 md:w-1/5'>
        <img
          src={item.image}
          alt={item.title}
          className='h-20 w-full object-cover contrast-100 transition duration-300 transform-gpu filter sm:h-24 md:contrast-75 md:hover:contrast-100 md:hover:scale-125'
        />
      </div>

      <div className='cart-information flex flex-col flex-grow self-stretch px-4'>
        <HeaderThree className='font-bold capitalize md:text-xl'>
          {item.title}
        </HeaderThree>
        <CartContentButtons
          cart={cart}
          cartTotalItems={cartTotalItems}
          item={item}
        />
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
