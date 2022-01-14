import { FC } from 'react';
import Loader from '../../images/icons/Loader';
import Section from '../Section';
import HeaderTwo from '../../elements/Headings/HeaderTwo';
import { BASE_URL } from '../../../_constants/dataUrls';
import { SideInterface } from '../../../_types/datas';
import CardItem from '../../elements/CardItem';
import useFetchingDatas from '../../../hooks/useFetchingDatas';
import { UseFetchingDatasUrl } from '../../../_types/fetchData';

const SidesList: FC = () => {
  const {
    data: sidesList,
    loading,
    error,
  } = useFetchingDatas(`${BASE_URL}sides` as unknown as UseFetchingDatasUrl);

  if (error)
    return (
      <Section className='items-center flex-1'>
        <p className='text-xl text-red-600 font-semibold'>
          Error ! We cannot find sides. {error}
        </p>
      </Section>
    );

  if (loading)
    return (
      <Section className='items-center flex-1'>
        <Loader />
      </Section>
    );

  return sidesList && sidesList.length > 0 ? (
    <Section>
      <HeaderTwo>Sides</HeaderTwo>
      <div className='grid grid-cols-1 xs:grid-cols-2 mt-8 gap-8 items-start md:grid-cols-3 xl:grid-cols-4'>
        {sidesList.map((side) => (
          <CardItem key={side.id} item={side as SideInterface} />
        ))}
      </div>
    </Section>
  ) : null;
};
export default SidesList;
