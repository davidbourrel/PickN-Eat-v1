import Cookies from 'js-cookie';
import { FC, useContext, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { login } from '../../API/userApi';
import userContext from '../../contexts/userContext/';
import SubmitButton from '../elements/Buttons/SubmitButton';
import logo from '../images/logo.png';
import Section from './Section';

interface userLoginInterface {
  email: string;
  password: any;
}

const Login: FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const { setIsConnected } = useContext(userContext);
  const [errorLogin, setErrorLogin] = useState(false);

  const history = useHistory();

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });

  const onSubmit = (values: userLoginInterface) => {
    login(values);
    reset();
    setTimeout(() => {
      if (Cookies.get('id')) {
        setIsConnected(true);
        setErrorLogin(false);
        Toast.fire({
          icon: 'success',
          title: 'Successfully connected!',
        });
        history.push('/user-page');
      } else {
        setIsConnected(false);
        setErrorLogin(true);
      }
    }, 500);
  };

  const incorrectPassword = useMemo(
    () =>
      errorLogin && (
        <p className='mb-6 text-sm text-red-500'>Your password is incorrect.</p>
      ),
    [errorLogin]
  );

  return (
    <Section>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='m-5 p-6 text-gray-700 border-2 rounded shadow-md max-w-lg mx-auto'
      >
        <h1 className='text-2xl text-center font-semibold'>Welcome !</h1>
        <img
          src={logo}
          alt='Logo Breaking Cook'
          className='max-h-32 mx-auto mb-5'
        />
        <label htmlFor='emailAddress' className='flex flex-col mb-5'>
          Email address:
          <input
            id='emailAddress'
            className='border shadow-inner rounded p-1 my-2 w-full appearance-none'
            type='email'
            maxLength={100}
            required
            {...register('email')}
          />
        </label>
        <label
          htmlFor='password'
          className={`flex flex-col ${errorLogin ? 'mb-1' : 'mb-4'}`}
        >
          Password:
          <input
            id='password'
            type='password'
            className='border shadow-inner rounded p-1 my-2 w-full appearance-none'
            {...register('password')}
          />
        </label>
        {incorrectPassword}
        <SubmitButton children='Sign in' />
        <p className='mt-4 text-sm text-center'>
          New to Breaking Cook ?{' '}
          <Link to='/sign-up'>
            <span className='font-bold cursor-pointer transition hover:text-red-700'>
              Create an account
            </span>
          </Link>
        </p>
      </form>
    </Section>
  );
};

export default Login;
