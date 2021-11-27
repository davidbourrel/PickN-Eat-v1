import axios from 'axios';
import Cookies from 'js-cookie';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FETCH_BURGERS_URL } from '../../_constants/dataUrls';
import { BurgerType } from '../../_types/dataType';
import HeaderOne from '../elements/Headings/HeaderOne';
import HeaderTwo from '../elements/Headings/HeaderTwo';
import Section from '../modules/Section';

const ItemDetails: FC = () => {
  const { id } = useParams<string>();
  const [burger, setBurger] = useState(null as unknown as BurgerType);
  const navigate = useNavigate();

  console.log(useParams);

  useEffect(() => {
    axios
      .get(`${FETCH_BURGERS_URL}/${id}`)
      .then((res) => res.data)
      .then((menuDTO) => setBurger(menuDTO));
  }, [id]);

  const descriptionSection = useMemo(
    () => (
      <div className='flex flex-col sm:grid sm:grid-cols-2 sm:gap-4'>
        <div className='overflow-hidden bg-gray-800 text-gray-300 p-5 transition md:hover:text-white sm:rounded'>
          {burger?.description}
        </div>
        <div className='overflow-hidden sm:rounded'>
          <img
            src={burger?.image}
            alt={burger?.title}
            className='max-h-60 h-60 w-full object-cover transition filter duration-300 transform-gpu scale-105 contrast-75 md:hover:contrast-100 md:hover:scale-125'
          />
        </div>
      </div>
    ),
    [burger]
  );

  const detailsSection = useMemo(
    () => (
      <div className='bg-red-900 text-gray-300 max-w-2xl transition md:hover:text-white sm:rounded'>
        <ul className='p-5'>
          <li>
            <span className='font-semibold mr-1'>Burger:</span>
            <span className='capitalize'>{burger?.title}</span>
          </li>
          <li>
            <span className='font-semibold mr-1'>Price:</span>
            <span className='font-bold'>{burger?.price}$</span>
          </li>
          {/* <li>
            <span className='font-semibold mr-1'>Category:</span>
            <span className='font-bold'>{burger?.category}$</span>
          </li>
          <li>
            <span className='font-semibold mr-1'>Allergens:</span>
            <span className='font-bold'>{burger?.allergens}$</span>
          </li> */}
        </ul>
      </div>
    ),
    [burger]
  );

  const handleMenuDelete = useCallback(
    () =>
      Swal.fire({
        title: 'Delete this burger?',
        text: 'Are you sure that you want to delete this burger?',
        icon: 'error',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it',
      }).then((result) => {
        if (result.isConfirmed) {
          setTimeout(() => {
            axios.delete(`${FETCH_BURGERS_URL}/${id}`);
            Swal.fire('Deleted!', 'Your burger has been deleted.', 'success');
            navigate('/');
          }, 400);
        }
      }),
    [id, navigate]
  );

  const adminSection = useMemo(
    () =>
      !!Cookies.get('id') &&
      Cookies.get('role') === '1' && (
        <div>
          <HeaderTwo className='mt-6 mb-3 font-bold'>Admin section</HeaderTwo>
          <button
            type='button'
            onClick={handleMenuDelete}
            className='rounded transition bg-red-600 text-white font-semibold px-4 py-2 mt-4 hover:bg-red-700'
          >
            Delete this burger
          </button>
        </div>
      ),
    [handleMenuDelete]
  );

  return (
    <Section>
      <HeaderOne className='capitalize'>{burger?.title}</HeaderOne>
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
