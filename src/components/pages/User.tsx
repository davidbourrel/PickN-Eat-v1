import { FC, useContext } from 'react';
import Section from '../modules/Section';
import userContext from '../../contexts/userContext';
import Swal from 'sweetalert2';
import SubmitButton from '../elements/Buttons/SubmitButton';
import HeaderOne from '../elements/Headings/HeaderOne';
import { userInformationInterface, userRoleEnum } from '../../_types/user';
import axios from 'axios';

const User: FC = () => {
  const { setIsAuth, user, setUser, setToken, setUserRole } =
    useContext(userContext);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });

  const handleLogOut = () => {
    setToken(null as unknown as string);
    setUser(null as unknown as userInformationInterface);
    setUserRole(null as unknown as string);
    setIsAuth(false);
    axios.post('/logout', { withCredentials: true });
    Toast.fire({
      icon: 'success',
      title: 'Successfully deconnected!',
    });
  };

  const handleRefreshToken = () => {
    axios.post('/refresh', { withCredentials: true }).then((res) => {
      console.log('resfresh Token', res.data);
    });
  };

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
          <span>
            {userRoleEnum.admin === user?.roles_id ? 'Admin !' : 'User'}
          </span>
        </div>
      </div>
      <SubmitButton
        onClick={handleLogOut}
        value='submit'
        className='py-2 px-8 my-5 bg-gray-800 text-white font-semibold rounded cursor-pointer transition md:hover:bg-gray-700 md:w-1/3 md:mr-auto'
      >
        Sign out
      </SubmitButton>
      <SubmitButton
        onClick={handleRefreshToken}
        value='submit'
        className='py-2 px-8 my-5 bg-gray-800 text-white font-semibold rounded cursor-pointer transition md:hover:bg-gray-700 md:w-1/3 md:mr-auto'
      >
        Refresh Token
      </SubmitButton>
    </Section>
  );
};
export default User;
