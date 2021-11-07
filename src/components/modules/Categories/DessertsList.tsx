import { FC, useMemo } from 'react';
import useFetchingData, {
  FUseFetchingDataArgs,
} from '../../../hooks/useFetchingData';
import Loading from '../../images/icons/Loading';
import HeaderTwo from '../../elements/HeaderTwo';
import Section from '../Section';
import { fetchDessertsData } from '../../../_constants/urls';
import { DessertType } from '../../../_types/components';
import CartCard from '../../elements/Cards/CartCard';

const DessertsList: FC = () => {
  const {
    data: dessertsList,
    loading,
    error,
  } = useFetchingData(fetchDessertsData as unknown as FUseFetchingDataArgs);

  const dessertsTitle = 'Desserts';

  const allDesserts = useMemo(
    () =>
      dessertsList &&
      dessertsList.map((dessert) => (
        <CartCard key={dessert.id} item={dessert as DessertType} />
      )),
    [dessertsList]
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
      <HeaderTwo text={dessertsTitle} />
      <div className='grid grid-cols-1 xs:grid-cols-2 my-8 gap-8 items-start md:grid-cols-3 xl:grid-cols-4'>
        {allDesserts}
      </div>
    </Section>
  );
};
export default DessertsList;
