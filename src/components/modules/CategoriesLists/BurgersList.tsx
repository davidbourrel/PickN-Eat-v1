import { FC, useMemo } from 'react';
import Loader from '../../images/icons/Loader';
import Section from '../Section';
import HeaderTwo from '../../elements/Headings/HeaderTwo';
import { FETCH_BURGERS_URL } from '../../../_constants/dataUrls';
import { BurgerType } from '../../../_types/datas';
import CardContent from '../../elements/Card/CardContent';
import useFetchingDatas from '../../../hooks/useFetchingDatas';
import { FUseFetchingDataArgs } from '../../../_types/fetchData';

const BurgersList: FC = () => {
  const {
    data: burgersList,
    loading,
    error,
  } = useFetchingDatas(FETCH_BURGERS_URL as unknown as FUseFetchingDataArgs);

  const allBurgers = useMemo(
    () =>
      burgersList &&
      burgersList.map((burger) => (
        <CardContent key={burger.id} item={burger as BurgerType} />
      )),
    [burgersList]
  );

  if (error)
    return (
      <Section className='items-center flex-1'>
        <p className='text-xl text-red-600 font-semibold'>
          Error ! We cannot find burgers. {error}
        </p>
      </Section>
    );

  if (loading)
    return (
      <Section className='items-center flex-1'>
        <Loader />
      </Section>
    );

  return (
    <Section>
      <HeaderTwo>Burgers</HeaderTwo>
      <div className='grid grid-cols-1 xs:grid-cols-2 mt-8 gap-8 items-start md:grid-cols-3 xl:grid-cols-4'>
        {allBurgers}
      </div>
    </Section>
  );
};
export default BurgersList;
