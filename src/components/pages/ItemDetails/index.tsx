import axios from 'axios';
import { FC, useCallback, useContext, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import userContext from '../../../contexts/userContext';
import useFetchingItem from '../../../hooks/useFetchingItem';
import { BASE_URL } from '../../../_constants/dataUrls';
import { FUseFetchingDataArgs } from '../../../_types/fetchData';
import HeaderOne from '../../elements/Headings/HeaderOne';
import HeaderTwo from '../../elements/Headings/HeaderTwo';
import Section from '../../modules/Section';
import Loader from '../../images/icons/Loader';
import { userRolesEnum } from '../../../_types/user';
import ItemDetailsDescription from './ItemDetailsDescription';
import { FoodItemTypes } from '../../../_types/datas';
import ItemDetailsMoreDetails from './ItemDetailsMoreDetails';

const ItemDetails: FC = () => {
  const { isAuth, userRole } = useContext(userContext);
  const { category, id } = useParams<string>();
  const navigate = useNavigate();

  const { data, loading, error } = useFetchingItem(
    `${BASE_URL}/${category}/${id}` as unknown as FUseFetchingDataArgs
  );

  const handleMenuDelete = useCallback(
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
        if (result.isConfirmed) {
          return axios.delete(`${BASE_URL}/${category}/${id}`).then(() => {
            Swal.fire(
              'Deleted!',
              `${data?.title} has been deleted.`,
              'success'
            );
            navigate('/');
          });
        }
      }),
    [category, id, navigate, data]
  );

  const adminSection = useMemo(
    () =>
      isAuth &&
      userRolesEnum.admin === userRole && (
        <div>
          <HeaderTwo className='mt-6 mb-3 font-bold'>Admin section</HeaderTwo>
          <button
            type='button'
            onClick={handleMenuDelete}
            className='rounded transition bg-red-600 text-white font-semibold px-4 py-2 mt-4 hover:bg-red-700 capitalize'
          >
            Delete {data?.title}
          </button>
        </div>
      ),
    [handleMenuDelete, isAuth, userRole, data]
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
    <Section>
      <HeaderOne className='capitalize'>{data?.title}</HeaderOne>
      <HeaderTwo className='font-bold mt-6 mb-3 md:text-2xl'>
        Description
      </HeaderTwo>
      <ItemDetailsDescription {...(data as FoodItemTypes)} />
      <HeaderTwo className='font-bold mt-6 mb-3 md:text-2xl'>Details</HeaderTwo>
      <ItemDetailsMoreDetails
        category={category}
        {...(data as FoodItemTypes)}
      />
      {adminSection}
    </Section>
  );
};

export default ItemDetails;
