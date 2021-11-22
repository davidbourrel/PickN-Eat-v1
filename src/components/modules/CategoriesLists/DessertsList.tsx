import { FC, useMemo } from 'react';
import useFetchingData, {
  FUseFetchingDataArgs,
} from '../../../hooks/useFetchingData';
import Loading from '../../images/icons/Loader';
import HeaderTwo from '../../elements/Headings/HeaderTwo';
import Section from '../Section';
import { FETCH_DESSERTS_URL } from '../../../_constants/dataUrls';
import CardItem from '../../elements/Cards/CardItem';
import { DessertType } from '../../../_types/dataType';

const DessertsList: FC = () => {
  const {
    data: dessertsList,
    loading,
    error,
  } = useFetchingData(FETCH_DESSERTS_URL as unknown as FUseFetchingDataArgs);

  const dessertsTitle = 'Desserts';

  const allDesserts = useMemo(
    () =>
      dessertsList &&
      dessertsList.map((dessert) => (
        <CardItem key={dessert.id} item={dessert as DessertType} />
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
