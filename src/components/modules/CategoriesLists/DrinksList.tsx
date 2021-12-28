import { FC } from 'react';
import Loader from '../../images/icons/Loader';
import Section from '../Section';
import HeaderTwo from '../../elements/Headings/HeaderTwo';
import { BASE_URL } from '../../../_constants/dataUrls';
import { DrinkType } from '../../../_types/datas';
import CardItem from '../../elements/Card/CardItem';
import useFetchingDatas from '../../../hooks/useFetchingDatas';
import { FUseFetchingDataArgs } from '../../../_types/fetchData';

const DrinksList: FC = () => {
  const {
    data: drinksList,
    loading,
    error,
  } = useFetchingDatas(`${BASE_URL}drinks` as unknown as FUseFetchingDataArgs);

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
          <CardItem key={drink.id} item={drink as DrinkType} />
        ))}
      </div>
    </Section>
  ) : null;
};
export default DrinksList;
