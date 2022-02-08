import axios from 'axios';
import { FC, useCallback, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useFetchingItem from '../../../hooks/useFetchingItem';
import { UseFetchingDatasUrl } from '../../../_types/fetchData';
import HeaderOne from '../../elements/Headings/HeaderOne';
import Section from '../../modules/Section';
import Loader from '../../images/icons/Loader';
import { UserRolesEnum } from '../../../_types/user';
import ItemDetailsDescription from './ItemDetailsDescription';
import { FoodCategoryType } from '../../../_types/datas';
import ItemDetailsMoreDetails from './ItemDetailsMoreDetails';
import useUserRole from '../../../contexts/userContext/useUserRole';
import useUserIsAuth from '../../../contexts/userContext/useUserIsAuth';
import { PICKANDEAT_LS_T } from '../../../_constants/localStorage';
import ItemDetailsAdmin from './ItemDetailsAdmin';

const Buffer = (window.Buffer = window.Buffer || require('buffer').Buffer);

const ItemDetails: FC = () => {
  const { userRole } = useUserRole();
  const isAuth = useUserIsAuth();
  const { category, id } = useParams<string>();
  const navigate = useNavigate();

  const { data, loading, error } = useFetchingItem(
    `${process.env.REACT_APP_API_URL}/${category}/${id}` as unknown as UseFetchingDatasUrl
  );

  const handleDeleteItem = useCallback(
    () =>
      Swal.fire({
        title: `Delete ${data?.title}?`,
        text: 'Are you sure that you want to delete this item ?',
        icon: 'error',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it',
        confirmButtonColor: '#3085d6',
        scrollbarPadding: false,
        showCancelButton: true,
      }).then((result) => {
        const encodedUserToken = localStorage.getItem(PICKANDEAT_LS_T);
        if (
          result.isConfirmed &&
          encodedUserToken &&
          encodedUserToken.length > 0
        ) {
          const decodedToken = JSON.parse(
            Buffer.from(encodedUserToken, 'base64').toString()
          );

          const authAxios = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            headers: {
              Authorization: `${process.env.REACT_APP_ACCESS_TOKEN_TYPE} ${decodedToken}`,
            },
          });

          return authAxios.delete(`${category}/${id}`).then(() => {
            Swal.fire({
              title: 'Deleted!',
              text: `${data?.title} has been deleted.`,
              icon: 'success',
              scrollbarPadding: false,
            });
            navigate('/');
          });
        }
      }),
    [category, id, navigate, data]
  );

  const title = useMemo(
    () =>
      data && data.title ? (
        <div className=' w-full p-4 pb-0 sm:px-8 sm:py-6 sm:pb-0 xl:mx-auto xl:max-w-6xl '>
          <HeaderOne className='capitalize'>{data.title}</HeaderOne>
        </div>
      ) : null,
    [data]
  );
  const adminSection = useMemo(
    () =>
      isAuth && userRole === UserRolesEnum.admin ? (
        <ItemDetailsAdmin
          handleDeleteItem={handleDeleteItem}
          {...(data as FoodCategoryType)}
        />
      ) : null,
    [handleDeleteItem, isAuth, userRole, data]
  );

  if (error)
    return (
      <Section className='items-center flex-1'>
        <p className='text-xl text-red-600 font-semibold'>
          Error ! We cannot find {category}.
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
    <>
      {title}
      <ItemDetailsDescription {...(data as FoodCategoryType)} />
      <ItemDetailsMoreDetails {...(data as FoodCategoryType)} />
      {adminSection}
    </>
  );
};

export default ItemDetails;
