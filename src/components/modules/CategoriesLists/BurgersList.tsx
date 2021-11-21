import { FC, useMemo } from 'react';
import useFetchingData, {
  FUseFetchingDataArgs,
} from '../../../hooks/useFetchingData';
import Loading from '../../images/icons/Loader';
import Section from '../Section';
import HeaderTwo from '../../elements/Headings/HeaderTwo';
import { fetchBurgersData } from '../../../_constants/dataUrls';
import CardItem from '../../elements/Cards/CardItem';
import { BurgerType } from '../../../_types/dataType';

const BurgersList: FC = () => {
  const {
    data: burgersList,
    loading,
    error,
  } = useFetchingData(fetchBurgersData as unknown as FUseFetchingDataArgs);

  const burgersTitle = 'Burgers';

  const allBurgers = useMemo(
    () =>
      burgersList &&
      burgersList.map((burger) => (
        <CardItem key={burger.id} item={burger as BurgerType} />
      )),
    [burgersList]
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
      <HeaderTwo text={burgersTitle} />
      <div className='grid grid-cols-1 xs:grid-cols-2 my-8 gap-8 items-start md:grid-cols-3 xl:grid-cols-4'>
        {allBurgers}
      </div>
    </Section>
  );
};
export default BurgersList;
