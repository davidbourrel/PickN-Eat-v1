import { FC } from 'react';
import Loader from '../../images/icons/Loader';
import Section from '../Section';
import HeaderTwo from '../../elements/Headings/HeaderTwo';
import { DrinkInterface } from '../../../_types/datas';
import CardItem from '../../elements/CardItem';
import useFetchingDatas from '../../../hooks/useFetchingDatas';
import { UseFetchingDatasUrl } from '../../../_types/fetchData';

const DrinksList: FC = () => {
  const {
    data: drinksList,
    loading,
    error,
  } = useFetchingDatas(
    `${process.env.REACT_APP_API_URL}/drinks` as unknown as UseFetchingDatasUrl
  );

  if (error)
    return (
      <Section className='items-center flex-1'>
        <p className='text-xl text-red-600 font-semibold'>
          Error ! We cannot find drinks. {error}
        </p>
      </Section>
    );

  if (loading)
    return (
      <Section className='items-center flex-1'>
        <Loader />
      </Section>
    );

  return drinksList && drinksList.length > 0 ? (
    <Section>
      <HeaderTwo>Drinks</HeaderTwo>
      <div className='grid grid-cols-1 xs:grid-cols-2 mt-8 gap-8 items-start md:grid-cols-3 xl:grid-cols-4'>
        {drinksList.map((drink) => (
          <CardItem key={drink.id} item={drink as DrinkInterface} />
        ))}
      </div>
    </Section>
  ) : null;
};
export default DrinksList;
