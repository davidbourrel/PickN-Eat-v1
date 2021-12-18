import { FC, useCallback } from 'react';
import Section from '../modules/Section';
import Swal from 'sweetalert2';
import SubmitButton from '../elements/Buttons/SubmitButton';
import HeaderOne from '../elements/Headings/HeaderOne';
import { userInformationInterface } from '../../_types/user';
import axios from 'axios';
import { useNavigate } from 'react-router';
import useUserIsAuth from '../../contexts/userContext/useUserIsAuth';
import useUser from '../../contexts/userContext/useUser';
import useToken from '../../contexts/userContext/useToken';
import useUserRole from '../../contexts/userContext/useUserRole';

const User: FC = () => {
  const { setIsAuth } = useUserIsAuth();
  const { user, setUser } = useUser();
  const setToken = useToken();
  const { setUserRole } = useUserRole();

  const navigate = useNavigate();

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    scrollbarPadding: false,
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });

  const handleLogOut = useCallback(() => {
    setToken(null as unknown as string);
    setUser(null as unknown as userInformationInterface);
    setUserRole(null as unknown as string);
    setIsAuth(false);
    axios.post('/logout', { withCredentials: true }).then(() => {
      Toast.fire({
        icon: 'success',
        title: 'Successfully disconnected!',
      });
      navigate('/login');
    });
  }, [Toast, setIsAuth, setToken, setUser, setUserRole, navigate]);

  return (
    <Section>
      <HeaderOne>My informations</HeaderOne>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 my-5 text-lg'>
        <div className='mb-2'>
          <span className='font-bold mr-1'>First name :</span>
          <span>{user?.first_name}</span>
        </div>
        <div className='mb-2'>
          <span className='font-bold mr-1'>Last name :</span>
          <span>{user?.last_name}</span>
        </div>
        <div className='mb-2'>
          <span className='font-bold mr-1'>Age :</span>
          <span>{user?.age}</span>
        </div>
        <div className='mb-2'>
          <span className='font-bold mr-1'>Email address :</span>
          <span>{user?.email}</span>
        </div>
        <div className='mb-2'>
          <span className='font-bold mr-1'>Role :</span>
          <span>{user?.role}</span>
        </div>
      </div>
      <SubmitButton
        onClick={handleLogOut}
        value='submit'
        className='py-2 px-8 my-5 bg-gray-800 text-white font-semibold rounded cursor-pointer transition md:hover:bg-gray-700 md:w-1/3 md:mr-auto'
      >
        Sign out
      </SubmitButton>
    </Section>
  );
};
export default User;
