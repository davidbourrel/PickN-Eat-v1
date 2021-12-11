import axios from 'axios';
import { FC, useCallback, useContext, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import userContext from '../../contexts/userContext';
import useFetchingItem from '../../hooks/useFetchingItem';
import { BASE_URL } from '../../_constants/dataUrls';
import { FUseFetchingDataArgs } from '../../_types/fetchData';
import HeaderOne from '../elements/Headings/HeaderOne';
import HeaderTwo from '../elements/Headings/HeaderTwo';
import Section from '../modules/Section';
import Loader from '../images/icons/Loader';
import { userRoleEnum } from '../../_types/user';

const ItemDetails: FC = () => {
  const { isAuth, userRole } = useContext(userContext);
  const { category, id } = useParams<string>();
  const navigate = useNavigate();

  const { data, loading, error } = useFetchingItem(
    `${BASE_URL}/${category}/${id}` as unknown as FUseFetchingDataArgs
  );

  const descriptionSection = useMemo(
    () => (
      <div className='flex flex-col sm:grid sm:grid-cols-2 sm:gap-4'>
        <div className='overflow-hidden bg-gray-800 text-gray-300 p-5 transition md:hover:text-white sm:rounded'>
          {data?.description}
        </div>
        <div className='overflow-hidden sm:rounded'>
          <img
            src={data?.image}
            alt={data?.title}
            className='max-h-60 h-60 w-full object-cover transition filter duration-300 transform-gpu scale-105 contrast-75 md:hover:contrast-100 md:hover:scale-125'
          />
        </div>
      </div>
    ),
    [data]
  );

  const detailsSection = useMemo(
    () => (
      <div className='bg-red-900 text-gray-300 max-w-2xl transition md:hover:text-white sm:rounded'>
        <ul className='p-5'>
          <li>
            <span className='font-bold mr-1'>Burger:</span>
            <span className='capitalize'>{data?.title}</span>
          </li>
          <li>
            <span className='font-bold mr-1'>Price:</span>
            <span>${data?.price}</span>
          </li>
          <li>
            <span className='font-bold mr-1'>Category:</span>
            <span>{data?.category}</span>
          </li>
          <li>
            <span className='font-bold mr-1'>Allergens:</span>
            <span>
              {!!data?.allergens
                ? data?.allergens
                : 'This product does not contain any reportable allergens.'}
            </span>
          </li>
        </ul>
      </div>
    ),
    [data]
  );

  const handleMenuDelete = useCallback(
    () =>
      Swal.fire({
        title: 'Delete this details?',
        text: 'Are you sure that you want to delete this details?',
        icon: 'error',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it',
      }).then((result) => {
        if (result.isConfirmed) {
          setTimeout(() => {
            axios.delete(`${BASE_URL}/${category}/${id}`);
            Swal.fire('Deleted!', 'Your details has been deleted.', 'success');
            navigate('/');
          }, 400);
        }
      }),
    [category, id, navigate]
  );

  const adminSection = useMemo(
    () =>
      isAuth &&
      userRoleEnum.admin === userRole && (
        <div>
          <HeaderTwo className='mt-6 mb-3 font-bold'>Admin section</HeaderTwo>
          <button
            type='button'
            onClick={handleMenuDelete}
            className='rounded transition bg-red-600 text-white font-semibold px-4 py-2 mt-4 hover:bg-red-700'
          >
            Delete this details
          </button>
        </div>
      ),
    [handleMenuDelete, isAuth, userRole]
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
        <Loader />
      </Section>
    );

  return (
    <Section>
      <HeaderOne className='capitalize'>{data?.title}</HeaderOne>
      <HeaderTwo className='font-bold mt-6 mb-3 md:text-2xl'>
        Description
      </HeaderTwo>
      {descriptionSection}
      <HeaderTwo className='font-bold mt-6 mb-3 md:text-2xl'>Details</HeaderTwo>
      {detailsSection}
      {adminSection}
    </Section>
  );
};

export default ItemDetails;
