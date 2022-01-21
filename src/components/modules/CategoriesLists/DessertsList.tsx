import { FC } from 'react';
import Loader from '../../images/icons/Loader';
import HeaderTwo from '../../elements/Headings/HeaderTwo';
import Section from '../Section';
import { DessertInterface } from '../../../_types/datas';
import CardItem from '../../elements/CardItem';
import useFetchingDatas from '../../../hooks/useFetchingDatas';
import { UseFetchingDatasUrl } from '../../../_types/fetchData';

const DessertsList: FC = () => {
  const {
    data: dessertsList,
    loading,
    error,
  } = useFetchingDatas(
    `${process.env.REACT_APP_API_URL}/desserts` as unknown as UseFetchingDatasUrl
  );

  if (error)
    return (
      <Section className='items-center flex-1'>
        <p className='text-xl text-red-600 font-semibold'>
          Error ! We cannot find desserts. {error}
        </p>
      </Section>
    );

  if (loading)
    return (
      <Section className='items-center flex-1'>
        <Loader />
      </Section>
    );

  return dessertsList && dessertsList.length > 0 ? (
    <Section>
      <HeaderTwo>Desserts</HeaderTwo>
      <div className='grid grid-cols-1 xs:grid-cols-2 mt-8 gap-8 items-start md:grid-cols-3 xl:grid-cols-4'>
        {dessertsList.map((dessert) => (
          <CardItem key={dessert.id} item={dessert as DessertInterface} />
        ))}
      </div>
    </Section>
  ) : null;
};
export default DessertsList;
