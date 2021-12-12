import { FC } from 'react';

const ITEM_TITLE_CLASSNAME = 'font-bold mr-2';
const ITEM_CONTENT_CLASSNAME = 'capitalize';

interface ItemDetailsMoreDetailsProps {
  allergens: string;
  category?: string;
  description: string;
  image: string;
  title: string;
  pieces?: number;
  price: number;
}

const ItemDetailsMoreDetails: FC<ItemDetailsMoreDetailsProps> = ({
  allergens,
  category,
  title,
  pieces,
  price,
}) => {
  return (
    <div className='bg-red-900 text-gray-300 rounded p-5 max-w-2xl transition md:hover:text-white'>
      <ul>
        {category ? (
          <li>
            <span className={ITEM_TITLE_CLASSNAME}>Category:</span>
            <span className={ITEM_CONTENT_CLASSNAME}>{category}</span>
          </li>
        ) : null}
        <li>
          <span className={ITEM_TITLE_CLASSNAME}>Name:</span>
          <span className={ITEM_CONTENT_CLASSNAME}>{title}</span>
        </li>
        {pieces ? (
          <li>
            <span className={ITEM_TITLE_CLASSNAME}>Pieces:</span>
            <span className={ITEM_CONTENT_CLASSNAME}>{pieces}</span>
          </li>
        ) : null}
        <li>
          <span className={ITEM_TITLE_CLASSNAME}>Price:</span>
          <span className={ITEM_CONTENT_CLASSNAME}>${price}</span>
        </li>
        <li>
          <span className={ITEM_TITLE_CLASSNAME}>Allergens:</span>
          <span className={ITEM_CONTENT_CLASSNAME}>
            {!!allergens
              ? allergens
              : 'This product does not contain any reportable allergens.'}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ItemDetailsMoreDetails;
