import { FC, useContext, useEffect, useMemo } from 'react';
import HeaderTwo from '../elements/HeaderTwo';
import Cookies from 'js-cookie';
import Section from './Section';
import userContext from '../../contexts/userContext';
import Swal from 'sweetalert2';
import { getUserInfos } from '../../API/userApi';

const User: FC = () => {
  const {
    setIsConnected,
    lastName,
    setLastName,
    firstName,
    setFirstName,
    age,
    setAge,
    email,
    setEmail,
    userRole,
    setUserRole,
  } = useContext(userContext);

  useEffect(() => {
    getUserInfos().then((data) => {
      // const { last_name, first_name, age, email, roles_id } = data;
      setLastName(data[0].last_name);
      setFirstName(data[0].first_name);
      setAge(data[0].age);
      setEmail(data[0].email);
      setUserRole(data[0].roles_id);
    });
  }, [
    setLastName,
    setFirstName,
    setAge,
    setIsConnected,
    setEmail,
    setUserRole,
  ]);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });

  const logOut = () => {
    Cookies.remove('id');
    Cookies.remove('role');
    Cookies.remove('token');
    setIsConnected(false);
    Toast.fire({
      icon: 'success',
      title: 'Successfully deconnected!',
    });
  };

  const roles = useMemo(
    () => (userRole ? (userRole === 1 ? 'Admin' : 'User') : ''),
    [userRole]
  );

  return (
    <Section>
      <HeaderTwo text='My informations' />
      <div className='my-5'>
        <div className='mb-2'>
          <span className='font-bold mr-1'>Last name :</span>
          <span>{lastName}</span>
        </div>
        <div className='mb-2'>
          <span className='font-bold mr-1'>First name :</span>
          <span>{firstName}</span>
        </div>
        <div className='mb-2'>
          <span className='font-bold mr-1'>Age :</span>
          <span>{age}</span>
        </div>
        <div className='mb-2'>
          <span className='font-bold mr-1'>Email address :</span>
          <span>{email}</span>
        </div>
        <div className='mb-2'>
          <span className='font-bold mr-1'>Role :</span>
          <span>{roles}</span>
        </div>
        <button
          type='submit'
          onClick={logOut}
          value='submit'
          className='py-2 px-8 my-5 bg-gray-800 text-white font-semibold rounded cursor-pointer transition hover:bg-gray-700'
        >
          Sign out
        </button>
      </div>
    </Section>
  );
};
export default User;
