import { FC, useCallback } from 'react';
import Section from '../../modules/Section';
import SubmitButton from '../../elements/Buttons/SubmitButton';
import HeaderOne from '../../elements/Headings/HeaderOne';
import useHandleLogout from '../../../contexts/userContext/useHandleLogout';
import Swal from 'sweetalert2';
import UserContent from './UserContent';
import useHandleDeleteUserAccount from '../../../contexts/userContext/useHandleDeleteUserAccount';

const User: FC = () => {
  const handleLogout = useHandleLogout();
  const handleDeleteUserAccount = useHandleDeleteUserAccount();

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    scrollbarPadding: false,
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });

  const onSubmitLogoutHandler = useCallback(() => {
    handleLogout();
    Toast.fire({
      icon: 'success',
      title: 'Successfully disconnected!',
    });
  }, [Toast, handleLogout]);

  const onSubmitDeleteUserHandler = useCallback(
    () =>
      Swal.fire({
        title: `Delete your account?`,
        text: 'Are you sure that you want to delete your account ?',
        icon: 'error',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it',
        confirmButtonColor: '#3085d6',
        scrollbarPadding: false,
        showCancelButton: true,
      })
        .then((result) => {
          if (result.isConfirmed) {
            handleDeleteUserAccount();
          }
        })
        .catch((err) => console.log(err)),
    [handleDeleteUserAccount]
  );

  return (
    <>
      <Section>
        <HeaderOne>Your Account</HeaderOne>
        <UserContent />
        <SubmitButton
          onClick={onSubmitLogoutHandler}
          value='submit'
          className='py-2 px-8 my-5 bg-gray-800 text-white font-semibold rounded cursor-pointer transition md:hover:bg-gray-700 md:w-1/3 md:mr-auto'
        >
          Sign out
        </SubmitButton>
      </Section>
      <Section>
        <HeaderOne className='text-red-700'>Delete account</HeaderOne>
        <p className='mt-4'>
          Once you delete your account, there is no going back. Please be
          certain.
        </p>
        <SubmitButton
          onClick={onSubmitDeleteUserHandler}
          value='submit'
          className='py-2 px-8 my-5 bg-red-800 text-white font-semibold rounded cursor-pointer transition md:hover:bg-red-700 md:w-1/3 md:mr-auto'
        >
          Delete your account
        </SubmitButton>
      </Section>
    </>
  );
};
export default User;
