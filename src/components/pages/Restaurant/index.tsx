import { FC } from 'react';
import Section from '../../modules/Section';
import RestaurantTable from './RestaurantTable';
import HeaderOne from '../../elements/Headings/HeaderOne';
import RestaurantMap from './RestaurantMap';

const Restaurant: FC = () => {
  return (
    <Section className='flex-1'>
      <HeaderOne>Plan</HeaderOne>
      <div className='w-full my-6 grid grid-cols-1 gap-4 lg:grid-cols-2'>
        <RestaurantMap />
        <RestaurantTable />
      </div>
    </Section>
  );
};

export default Restaurant;
