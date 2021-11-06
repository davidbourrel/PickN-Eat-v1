import { FC, useMemo } from 'react';
import useFetchingData, {
  FUseFetchingDataArgs,
} from '../../../../hooks/useFetchingData';
import Loading from '../../../images/icons/Loading';
import Section from '../../Section';
import { saladsUrl } from '../../const';
import HeaderTwo from '../../../elements/HeaderTwo';
import MenuCard from '../../../elements/MenuCard';

const SaladsList: FC = () => {
  const {
    data: saladsList,
    loading,
    error,
  } = useFetchingData(saladsUrl as unknown as FUseFetchingDataArgs);

  const saladsTitle = 'Salads';

  const allSalads = useMemo(
    () =>
      saladsList &&
      saladsList.map((salad) => (
        <MenuCard
          key={salad.id}
          imageUrl={salad.saladImage}
          title={salad.title}
          description={salad.description}
        />
      )),
    [saladsList]
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
      <HeaderTwo text={saladsTitle} />
      <div className='grid grid-cols-1 my-8 gap-8 items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {allSalads}
      </div>
    </Section>
  );
};
export default SaladsList;
