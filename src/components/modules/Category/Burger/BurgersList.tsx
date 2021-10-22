import { FC, useMemo } from 'react';
import useFetchingData, {
  FUseFetchingDataArgs,
} from '../../../../hooks/useFetchingData';
import Loading from '../../../images/icons/Loading';
import { menusUrl } from '../../const';
import Section from '../../Section';
import HeaderTwo from '../../../elements/HeaderTwo';
import MenuCard from '../../../elements/MenuCard';

const BurgersList: FC = () => {
  const { data, loading, error } = useFetchingData(
    menusUrl as unknown as FUseFetchingDataArgs
  );
  const allBurgers = useMemo(
    () =>
      data &&
      data.map((menu) => (
        <MenuCard
          key={menu.id}
          imageUrl={menu.menuImage}
          title={menu.burger}
          description={menu.description}
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
      <HeaderTwo text='Burgers' />
      {/* Ce code se répète */}
      <div className='grid grid-cols-1 my-8 gap-8 items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {allBurgers}
      </div>
    </Section>
  );
};
export default BurgersList;
