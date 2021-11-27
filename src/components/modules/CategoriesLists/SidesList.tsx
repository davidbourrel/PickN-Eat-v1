import { FC, useMemo } from 'react';
import useFetchingData, {
  FUseFetchingDataArgs,
} from '../../../hooks/useFetchingData';
import Loading from '../../images/icons/Loader';
import Section from '../Section';
import HeaderTwo from '../../elements/Headings/HeaderTwo';
import { FETCH_SIDES_URL } from '../../../_constants/dataUrls';
import { SideType } from '../../../_types/dataType';
import CardContent from '../../elements/Card/CardContent';

const SidesList: FC = () => {
  const {
    data: sidesList,
    loading,
    error,
  } = useFetchingData(FETCH_SIDES_URL as unknown as FUseFetchingDataArgs);

  const sidesTitle = 'Sides';

  const allSides = useMemo(
    () =>
      sidesList &&
      sidesList.map((side) => (
        <CardContent key={side.id} item={side as SideType} />
      )),
    [sidesList]
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
      <HeaderTwo>{sidesTitle}</HeaderTwo>
      <div className='grid grid-cols-1 xs:grid-cols-2 mt-8 gap-8 items-start md:grid-cols-3 xl:grid-cols-4'>
        {allSides}
      </div>
    </Section>
  );
};
export default SidesList;
