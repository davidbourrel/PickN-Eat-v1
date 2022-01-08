import { FC } from 'react';
import Loader from '../../images/icons/Loader';
import Section from '../Section';
import HeaderTwo from '../../elements/Headings/HeaderTwo';
import { BASE_URL } from '../../../_constants/dataUrls';
import { SaladType } from '../../../_types/datas';
import CardItem from '../../elements/CardItem';
import useFetchingDatas from '../../../hooks/useFetchingDatas';
import { FUseFetchingDataArgs } from '../../../_types/fetchData';

const SaladsList: FC = () => {
  const {
    data: saladsList,
    loading,
    error,
  } = useFetchingDatas(`${BASE_URL}salads` as unknown as FUseFetchingDataArgs);

  if (error)
    return (
      <Section className='items-center flex-1'>
        <p className='text-xl text-red-600 font-semibold'>
          Error ! We cannot find salads. {error}
        </p>
      </Section>
    );

  if (loading)
    return (
      <Section className='items-center flex-1'>
        <Loader />
      </Section>
    );

  return saladsList && saladsList.length > 0 ? (
    <Section>
      <HeaderTwo>Salads</HeaderTwo>
      <div className='grid grid-cols-1 xs:grid-cols-2 mt-8 gap-8 items-start md:grid-cols-3 xl:grid-cols-4'>
        {saladsList.map((salad) => (
          <CardItem key={salad.id} item={salad as SaladType} />
        ))}
      </div>
    </Section>
  ) : null;
};
export default SaladsList;
