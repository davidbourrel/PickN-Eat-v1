import { FC, useCallback } from 'react';
import Section from '../../modules/Section';
import SubmitButton from '../../elements/Buttons/SubmitButton';
import HeaderOne from '../../elements/Headings/HeaderOne';
import useHandleLogout from '../../../contexts/userContext/useHandleLogout';
import Swal from 'sweetalert2';
import UserContent from './UserContent';

const User: FC = () => {
  const handleLogout = useHandleLogout();

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    scrollbarPadding: false,
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });

  const onSubmitHandler = useCallback(() => {
    handleLogout();
    Toast.fire({
      icon: 'success',
      title: 'Successfully disconnected!',
    });
  }, [Toast, handleLogout]);

  return (
    <Section>
      <HeaderOne>Your Account</HeaderOne>
      <UserContent />
      <SubmitButton
        onClick={onSubmitHandler}
        value='submit'
        className='py-2 px-8 my-5 bg-gray-800 text-white font-semibold rounded cursor-pointer transition md:hover:bg-gray-700 md:w-1/3 md:mr-auto'
      >
        Sign out
      </SubmitButton>
    </Section>
  );
};
export default User;
