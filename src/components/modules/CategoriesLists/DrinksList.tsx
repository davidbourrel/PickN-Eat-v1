import { FC, useMemo } from 'react';
import useFetchingData, {
  FUseFetchingDataArgs,
} from '../../../hooks/useFetchingData';
import Loading from '../../images/icons/Loader';
import Section from '../Section';
import HeaderTwo from '../../elements/Headings/HeaderTwo';
import { FETCH_DRINKS_URL } from '../../../_constants/dataUrls';
import CardItem from '../../elements/Cards/CardItem';
import { DrinkType } from '../../../_types/dataType';

const DrinksList: FC = () => {
  const {
    data: drinksList,
    loading,
    error,
  } = useFetchingData(FETCH_DRINKS_URL as unknown as FUseFetchingDataArgs);

  const drinksTitle = 'Drinks';

  const allDrinks = useMemo(
    () =>
      drinksList &&
      drinksList.map((drink) => (
        <CardItem key={drink.id} item={drink as DrinkType} />
      )),
    [drinksList]
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
      <HeaderTwo text={drinksTitle} />
      <div className='grid grid-cols-1 xs:grid-cols-2 my-8 gap-8 items-start md:grid-cols-3 xl:grid-cols-4'>
        {allDrinks}
      </div>
    </Section>
  );
};
export default DrinksList;
