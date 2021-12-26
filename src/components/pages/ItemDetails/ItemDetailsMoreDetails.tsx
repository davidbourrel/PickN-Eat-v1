import { FC, useMemo } from 'react';
import HeaderTwo from '../../elements/Headings/HeaderTwo';
import Section from '../../modules/Section';

const ITEM_TITLE_CLASSNAME = 'font-bold mr-2';
const ITEM_CONTENT_CLASSNAME = 'capitalize';

interface ItemDetailsMoreDetailsProps {
  allergens: string;
  description: string;
  image: string;
  title: string;
  pieces?: number;
  price: number;
}

const ItemDetailsMoreDetails: FC<ItemDetailsMoreDetailsProps> = ({
  allergens,
  title,
  pieces,
  price,
}) => {
  const allergensItem = useMemo(
    () =>
      allergens
        ? allergens
        : 'This product does not contain any reportable allergens.',
    [allergens]
  );
  return (
    <Section>
      <HeaderTwo className='font-bold mt-6 mb-3 md:text-2xl'>Details</HeaderTwo>
      <div className='bg-red-900 text-gray-300 rounded p-5 mt-2 max-w-2xl transition md:hover:text-white'>
        <ul>
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
            <span className={ITEM_CONTENT_CLASSNAME}>{allergensItem}</span>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default ItemDetailsMoreDetails;
