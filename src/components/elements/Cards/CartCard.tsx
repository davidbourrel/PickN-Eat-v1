import { FC, useCallback, useContext, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import cartContext from '../../../contexts/cartContext';
import { CartCardTypes } from '../../../_types/components';
import HeaderThree from '../HeaderThree';
import OrderButton from '../Buttons/OrderButton';

interface CartCardProps {
  item: CartCardTypes;
}

const CartCard: FC<CartCardProps> = ({ item }) => {
  const { image, title, id, category, description, price } = item;
  const { addToCart, cart, cartTotalItems } = useContext(cartContext);

  const [isActive, setIsActive] = useState(false);
  const handleToggle = useCallback(() => setIsActive(!isActive), [isActive]);

  const handleAddToCart = useCallback(() => addToCart(item), [addToCart, item]);

  const addToCartSection = useMemo(
    () => (
      <div className='flex justify-between items-center w-full'>
        <span className='font-bold text-lg md:text-xl'>{`$${price}`}</span>
        <span
          onClick={handleAddToCart}
          className={
            cart && cartTotalItems >= 20
              ? 'opacity-50 pointer-events-none select-none'
              : 'opacity-100 pointer-events-auto select-auto'
          }
        >
          <OrderButton>Add to cart</OrderButton>
        </span>
      </div>
    ),
    [cart, handleAddToCart, price, cartTotalItems]
  );

  const seeMoreClassName = useMemo(
    () =>
      `bg-white transition-height max-h-0 overflow-hidden opacity-0 duration-300 ${
        isActive ? 'max-h-screen overflow-visible opacity-100 duration-700' : ''
      }`,
    [isActive]
  );

  const seeMoreSection = useMemo(
    () => (
      <div className='pt-3'>
        <div
          className='relative flex justify-center items-center w-100 text-left pb-4 font-semibold outline-none select-none transition hover:text-red-700'
          onClick={handleToggle}
          role='button'
          tabIndex={0}
          aria-hidden='true'
        >
          <span
            className={`inline-block transform transition-transform w-4 h-4 border-b-2 border-l-2 border-t-0 border-r-0 border-gray-800 ${
              isActive
                ? 'transform rotate-135 translate-y-1'
                : 'transform -rotate-45 -translate-y-1'
            }`}
          />
        </div>
        <div className={seeMoreClassName}>
          <p className='pb-3 px-3'>{description}</p>
          <Link to={`/${category}/${id}`}>
            <OrderButton children='See more' />
          </Link>
        </div>
      </div>
    ),
    [handleToggle, category, description, id, isActive, seeMoreClassName]
  );

  return (
    <div className='card flex flex-col shadow-md rounded transition sm:hover:shadow-lg overflow-hidden'>
      <div className='image overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='h-36 w-full object-cover transition duration-300 transform-gpu hover:scale-125 filter contrast-75 hover:contrast-100'
        />
      </div>
      <div className='flex flex-wrap px-3'>
        <HeaderThree text={title} className='w-full capitalize' />
        {addToCartSection}
      </div>
      {seeMoreSection}
    </div>
  );
};

export default CartCard;
