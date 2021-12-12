import { FC } from 'react';

interface ItemDetailsDescriptionProps {
  description: string;
  image: string;
  title: string;
}

const ItemDetailsDescription: FC<ItemDetailsDescriptionProps> = ({
  description,
  image,
  title,
}) => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
      <div className='overflow-hidden rounded'>
        <img
          src={image}
          alt={title}
          className='max-h-60 h-60 w-full object-cover transition filter duration-300 transform-gpu scale-105 contrast-75 md:hover:contrast-100 md:hover:scale-125'
        />
      </div>
      <div className='overflow-hidden rounded bg-gray-800 text-gray-300 p-5 transition md:hover:text-white '>
        {description}
      </div>
    </div>
  );
};

export default ItemDetailsDescription;
