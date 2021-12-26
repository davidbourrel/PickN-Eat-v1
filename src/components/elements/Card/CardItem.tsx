import { FC, useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderThree from '../Headings/HeaderThree';
import OrderButton from '../Buttons/OrderButton';
import SeeMoreButton from '../Buttons/SeeMoreButton';
import { FoodItemTypes, categoryFoodEnum } from '../../../_types/datas';
import useCart from '../../../contexts/cartContext/useCart';
import useAddToCart from '../../../contexts/cartContext/useAddToCart ';
import useTotalCart from '../../../contexts/cartContext/useCartTotal';

interface CardItemProps {
  item: FoodItemTypes;
}

const CardItem: FC<CardItemProps> = ({ item }) => {
  const { image, title, id, categories_id, description, price } = item;

  const addToCart = useAddToCart();
  const { cart } = useCart();
  const { cartTotalItems } = useTotalCart();

  const [isActive, setIsActive] = useState(false);

  const handleToggle = useCallback(() => setIsActive((c) => !c), []);
  const handleAddToCart = useCallback(() => addToCart(item), [addToCart, item]);

  const cardImage = useMemo(
    () => (
      <div className='overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='h-36 w-full object-cover transition duration-300 transform-gpu filter contrast-75 md:hover:contrast-100 md:hover:scale-125'
        />
      </div>
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

  const descriptionCutted = useMemo(() => {
    const descriptionWords = description.split(' ');
    if (descriptionWords.length > 10) {
      descriptionWords.length = 10;
    }
    return `${descriptionWords.join(' ')}...`;
  }, [description]);

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
            <SeeMoreButton children='See more' />
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
          className='flex justify-center items-center py-4'
          onClick={handleToggle}
        >
          <span
            className={`inline-block transform transition-transform w-4 h-4 border-b-2 border-l-2 border-t-0 border-r-0 border-gray-800 ${
              isActive
                ? 'transform rotate-135 translate-y-1'
                : 'transform -rotate-45 -translate-y-1'
            }`}
          />
        </button>
        {seeMoreDescription}
      </>
    ),
    [handleToggle, isActive, seeMoreDescription]
  );

  return (
    <div className='card_content flex flex-col rounded overflow-hidden transition shadow-md md:hover:shadow-lg'>
      {cardImage}
      {addToCartSection}
      {seeMoreSection}
    </div>
  );
};

export default CardItem;
