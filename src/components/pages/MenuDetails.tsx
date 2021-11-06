// import { useContext } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getMenusUrl } from '../../_constants/urls';
import { FullMenuInformation } from '../../_types/components';
import HeaderThree from '../elements/HeaderThree';
import HeaderTwo from '../elements/HeaderTwo';
import Section from '../modules/Section';

type MenuParams = {
  id: string;
};

const MenuDetails: FC = () => {
  const { id } = useParams<MenuParams>();
  const [menu, setMenu] = useState(null as unknown as FullMenuInformation);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${getMenusUrl}/${id}`)
      .then((res) => res.data)
      .then((menuDTO) => setMenu(menuDTO));
  }, [id]);

  const mainTitle = useMemo(() => <HeaderTwo text={menu?.name} />, [menu]);

  const descriptionSection = useMemo(
    () => (
      <div className='flex flex-col sm:grid sm:grid-cols-1 sm:auto-cols-fr sm:mx-5'>
        <div className='sm:w-80 sm:justify-self-end overflow-hidden sm:rounded mb-4'>
          <img
            src={menu?.picture}
            alt={menu?.name}
            className='max-h-60 h-60 w-full object-cover transition filter duration-300 transform-gpu scale-105 hover:scale-125 contrast-75 hover:contrast-100 '
          />
        </div>
        <div className='overflow-hidden bg-gray-800 text-gray-300 p-5 transition hover:text-white sm:rounded'>
          {menu?.description}
        </div>
      </div>
    ),
    [menu]
  );

  const detailsSection = useMemo(
    () => (
      <div className='bg-red-900 text-gray-300 max-w-2xl transition hover:text-white sm:rounded sm:mx-5'>
        <ul className='p-5'>
          <li>
            <span className='font-semibold mr-1'>Burger:</span>
            <span>{menu?.burger}</span>
          </li>
          <li>
            <span className='font-semibold mr-1'>Extra:</span>
            <span>{menu?.extra}</span>
          </li>
          <li>
            <span className='font-semibold mr-1'>Sauce:</span>
            <span>{menu?.sauce}</span>
          </li>
          <li>
            <span className='font-semibold mr-1'>Price:</span>
            <span className='font-bold'>{menu?.price}$</span>
          </li>
        </ul>
      </div>
    ),
    [menu]
  );

  const handleMenuDelete = useCallback(
    () =>
      Swal.fire({
        title: 'Delete this menu?',
        text: 'Are you sure that you want to delete this menu?',
        icon: 'error',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it',
      }).then((result) => {
        if (result.isConfirmed) {
          setTimeout(() => {
            axios.delete(`${getMenusUrl}/${id}`);
            Swal.fire('Deleted!', 'Your menu has been deleted.', 'success');
            history.push('/');
          }, 400);
        }
      }),
    [history, id]
  );

  const adminSection = useMemo(
    () =>
      !!Cookies.get('id') &&
      Cookies.get('role') === '1' && (
        <div>
          <h2 className='mx-5 mt-6 mb-3 text-2xl font-bold text-right'>
            Admin section
          </h2>
          <div className='flex justify-end'>
            <button
              type='button'
              onClick={handleMenuDelete}
              className='text-right rounded transition bg-red-600 text-white font-semibold px-4 py-2 mb-5 mx-5 hover:bg-red-700'
            >
              Delete this menu
            </button>
          </div>
        </div>
      ),
    [handleMenuDelete]
  );

  return (
    <Section>
      {mainTitle}
      <HeaderThree
        text='Description'
        className='mx-5 mt-6 mb-3 text-2xl font-bold text-left sm:text-right'
      />
      {descriptionSection}
      <HeaderThree
        text='Détails'
        className='mx-5 mt-6 mb-3 text-2xl font-bold'
      />
      {detailsSection}
      {adminSection}
    </Section>
  );
};

export default MenuDetails;
