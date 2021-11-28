import { FC, useContext } from 'react';
import Cookies from 'js-cookie';
import Section from '../modules/Section';
import userContext from '../../contexts/userContext';
import Swal from 'sweetalert2';
import SubmitButton from '../elements/Buttons/SubmitButton';
import HeaderOne from '../elements/Headings/HeaderOne';
import { userInformationInterface } from '../../_types/user';

const User: FC = () => {
  const { setIsConnected, user, setUser } = useContext(userContext);

  const { first_name, last_name, age, email } = user[0];

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
    setUser([] as unknown as userInformationInterface[]);
    setIsConnected(false);
    Toast.fire({
      icon: 'success',
      title: 'Successfully deconnected!',
    });
  };

  return (
    <Section>
      <HeaderOne>My informations</HeaderOne>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 my-5 text-lg'>
        <div className='mb-2'>
          <span className='font-bold mr-1'>First name :</span>
          <span>{first_name}</span>
        </div>
        <div className='mb-2'>
          <span className='font-bold mr-1'>Last name :</span>
          <span>{last_name}</span>
        </div>
        <div className='mb-2'>
          <span className='font-bold mr-1'>Age :</span>
          <span>{age}</span>
        </div>
        <div className='mb-2'>
          <span className='font-bold mr-1'>Email address :</span>
          <span>{email}</span>
        </div>
        {/* <div className='mb-2'>
          <span className='font-bold mr-1'>Role :</span>
          <span>{roles}</span>
        </div> */}
      </div>
      <SubmitButton
        onClick={logOut}
        value='submit'
        className='py-2 px-8 my-5 bg-gray-800 text-white font-semibold rounded cursor-pointer transition md:hover:bg-gray-700 md:w-1/3 md:mr-auto'
      >
        Sign out
      </SubmitButton>
    </Section>
  );
};
export default User;
