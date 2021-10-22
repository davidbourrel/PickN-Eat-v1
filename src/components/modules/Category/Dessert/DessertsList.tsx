import { FC, useMemo } from 'react';
import useFetchingData, {
  FUseFetchingDataArgs,
} from '../../../../hooks/useFetchingData';
import Loading from '../../../images/icons/Loading';
import HeaderTwo from '../../../elements/HeaderTwo';
import Section from '../../Section';
import { dessertsUrl } from '../../const';
import MenuCard from '../../../elements/MenuCard';

const DessertsList: FC = () => {
  const { data, loading, error } = useFetchingData(
    dessertsUrl as unknown as FUseFetchingDataArgs
  );

  const allDesserts = useMemo(
    () =>
      data &&
      data.map((dessert) => (
        <MenuCard
          key={dessert.id}
          imageUrl={dessert.dessertImage}
          title={dessert.title}
          description={dessert.description}
        />
      )),
    [data]
  );

  if (error)
    return (
      <Section className='items-center flex-1'>
        <p className='text-xl text-red-600 font-semibold'>
          Error ! We cannot find the data. {error}
        </p>
      </Section>
    );

  if (loading)
    return (
      <Section className='items-center flex-1'>
        <Loading />
      </Section>
    );

  return (
    <Section>
      <HeaderTwo text='Desserts' />
      <div className='grid grid-cols-1 my-8 gap-8 items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {allDesserts}
      </div>
    </Section>
  );
};
export default DessertsList;
