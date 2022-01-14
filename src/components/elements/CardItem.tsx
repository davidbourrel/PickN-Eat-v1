import { FC, useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderThree from './Headings/HeaderThree';
import OrderButton from './Buttons/OrderButton';
import SeeMoreButton from './Buttons/SeeMoreButton';
import { FoodItemTypes, categoryFoodEnum } from '../../_types/datas';
import useCart from '../../contexts/cartContext/useCart';
import useAddToCart from '../../contexts/cartContext/useAddToCart ';
import useTotalCart from '../../contexts/cartContext/useCartTotal';
import useSeeMoreText from '../../hooks/useSeeMoreText';

interface CardItemProps {
  item: FoodItemTypes;
}

const CardItem: FC<CardItemProps> = ({ item }) => {
  const { image, title, id, categories_id, description, price } = item;

  const addToCart = useAddToCart();
  const { cart } = useCart();
  const { cartTotalItems } = useTotalCart();
  const descriptionCutted = useSeeMoreText(description);

  const [isActive, setIsActive] = useState(false);

  const handleToggle = useCallback(() => setIsActive((c) => !c), []);
  const handleAddToCart = useCallback(() => addToCart(item), [addToCart, item]);

  const cardImage = useMemo(
    () => (
      <img
        src={image}
        alt={title}
        className='h-36 w-full object-cover transition transform-gpu filter md:contrast-75 md:group-hover:contrast-100'
      />
    ),
    [image, title]
  );

  const addToCartSection = useMemo(
    () => (
      <div className='px-3'>
        <HeaderThree className='w-full py-2 capitalize'>{title}</HeaderThree>
        <div className='flex justify-between items-center select-none'>
          <span className='font-bold text-lg md:text-xl'>{`$${price}`}</span>
          <OrderButton
            onClick={handleAddToCart}
            className={
              cart && cartTotalItems >= 20
                ? 'opacity-50 pointer-events-none'
                : 'opacity-100 pointer-events-auto'
            }
          >
            Add to cart
          </OrderButton>
        </div>
      </div>
    ),
    [cart, handleAddToCart, price, cartTotalItems, title]
  );

  const seeMoreDescription = useMemo(
    () => (
      <div
        className={`bg-white transition-height max-h-0 overflow-hidden opacity-0 duration-300 ${
          isActive
            ? 'max-h-screen overflow-visible opacity-100 duration-700'
            : ''
        }`}
      >
        <p className='pb-3 px-3'>
          {descriptionCutted}
          <Link to={`/${categoryFoodEnum[categories_id]}/${id}`}>
            <SeeMoreButton>see more</SeeMoreButton>
          </Link>
        </p>
      </div>
    ),
    [categories_id, descriptionCutted, id, isActive]
  );

  const seeMoreSection = useMemo(
    () => (
      <>
        <button
          className='flex justify-center items-center pt-4 pb-2'
          onClick={handleToggle}
        >
          <span
            className={`inline-block transform-gpu transition-transform w-4 h-4 border-b-2 border-l-2 border-t-0 border-r-0 border-gray-800 ${
              isActive
                ? 'rotate-135 translate-y-1'
                : '-rotate-45 -translate-y-1'
            }`}
          />
        </button>
        {seeMoreDescription}
      </>
    ),
    [handleToggle, isActive, seeMoreDescription]
  );

  return (
    <div className='card_content group flex flex-col rounded overflow-hidden transition transform-gpu shadow-md md:hover:shadow-lg md:hover:-translate-y-1'>
      {cardImage}
      {addToCartSection}
      {seeMoreSection}
    </div>
  );
};

export default CardItem;
