import { FC, useMemo } from 'react';
import useFetchingData, {
  FUseFetchingDataArgs,
} from '../../../hooks/useFetchingData';
import Loading from '../../images/icons/Loader';
import Section from '../Section';
import HeaderTwo from '../../elements/Headings/HeaderTwo';
import { FETCH_BURGERS_URL } from '../../../_constants/dataUrls';
import { BurgerType } from '../../../_types/dataType';
import CardContent from '../../elements/Card/CardContent';

const BurgersList: FC = () => {
  const {
    data: burgersList,
    loading,
    error,
  } = useFetchingData(FETCH_BURGERS_URL as unknown as FUseFetchingDataArgs);

  const burgersTitle = 'Burgers';

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
      <HeaderTwo>{burgersTitle}</HeaderTwo>
      <div className='grid grid-cols-1 xs:grid-cols-2 mt-8 gap-8 items-start md:grid-cols-3 xl:grid-cols-4'>
        {allBurgers}
      </div>
    </Section>
  );
};
export default BurgersList;
