import { FC, useMemo, useState } from 'react';
import useFetchingData, {
  FUseFetchingDataArgs,
} from '../../../../hooks/useFetchingData';
import Loading from '../../../images/icons/Loading';
import { menusUrl } from '../../const';
import MenuCard from './MenuCard';
import SearchMenu from '../../SearchMenu';
import Section from '../../Section';
import HeaderTwo from '../../../elements/HeaderTwo';

const MenusList: FC = () => {
  const {
    data: menusList,
    loading,
    error,
  } = useFetchingData(menusUrl as unknown as FUseFetchingDataArgs);

  const [searchValue, setSearchValue] = useState('');

  const menusTitle = 'Menus';

  const allMenus = useMemo(
    () =>
      menusList &&
      menusList
        .filter((e) => e.name.toLowerCase().includes(searchValue.toLowerCase()))
        .map((menu) => <MenuCard key={menu.id} menu={menu} />),
    [menusList, searchValue]
  );

  const menuSection = useMemo(
    () =>
      allMenus.length > 0 ? (
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {allMenus}
        </div>
      ) : (
        <p className='font-semibold text-red-600 w-full'>
          Aucun menu ne correspond à votre recherche :&nbsp;
          <span className='font-bold text-gray-800'>{searchValue}</span>
        </p>
      ),
    [allMenus, searchValue]
  );

  if (error)
    return (
      <Section className='items-center flex-1'>
        <p className='text-xl text-red-600 font-semibold'>
          Error ! We cannot find menus. {error}
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
      <HeaderTwo text={menusTitle} />
      <SearchMenu searchValue={searchValue} setSearchValue={setSearchValue} />
      {menuSection}
    </Section>
  );
};

export default MenusList;
