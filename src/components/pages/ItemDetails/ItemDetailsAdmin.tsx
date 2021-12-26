import { FC } from 'react';
import RemoveButton from '../../elements/Buttons/RemoveButton';
import HeaderTwo from '../../elements/Headings/HeaderTwo';
import Section from '../../modules/Section';

interface ItemDetailsAdminProps {
  title: string;
  handleDeleteItem: () => void;
}

const ItemDetailsAdmin: FC<ItemDetailsAdminProps> = ({
  title,
  handleDeleteItem,
}) => {
  return (
    <Section>
      <HeaderTwo className='mt-6 mb-3 font-bold'>Admin section</HeaderTwo>
      <RemoveButton
        onClick={handleDeleteItem}
        className='rounded transition bg-red-600 text-white font-semibold px-4 py-2 mt-2 hover:bg-red-700 capitalize w-full md:w-48'
      >
        Delete {title}
      </RemoveButton>
    </Section>
  );
};

export default ItemDetailsAdmin;
