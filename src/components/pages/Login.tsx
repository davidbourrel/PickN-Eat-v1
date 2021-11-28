import Cookies from 'js-cookie';
import { FC, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { login } from '../../API/userApi';
import { userLoginInterface } from '../../_types/user';
import SubmitButton from '../elements/Buttons/SubmitButton';
import logo from '../images/logo.png';
import Section from '../modules/Section';
import { ERROR_CLASS_NAME } from './const';

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });

  const onSubmitHandler = useCallback(
    (values: userLoginInterface) => {
      login(values);
      setTimeout(() => {
        if (Cookies.get('id')) {
          Toast.fire({
            icon: 'success',
            title: 'Successfully connected!',
          });
          navigate('/user');
        }
        reset();
      }, 500);
    },
    [Toast, navigate, reset]
  );

  return (
    <Section>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className='m-5 p-6 text-gray-700 border-2 rounded shadow-md max-w-lg mx-auto'
      >
        <h1 className='text-2xl text-center font-semibold'>Welcome !</h1>
        <img src={logo} alt='Logo PickNEat' className='max-h-32 mx-auto mb-5' />
        <label htmlFor='email' className='flex flex-col mb-5'>
          Email address:
          <input
            id='email'
            className='border shadow-inner rounded p-1 my-2 w-full appearance-none'
            type='email'
            {...register('email', {
              required: true,
              maxLength: 100,
            })}
          />
          {errors.email && (
            <span className={ERROR_CLASS_NAME}>Your email is incorrect.</span>
          )}
        </label>
        <label htmlFor='password' className='flex flex-col mb-4'>
          Password:
          <input
            id='password'
            type='password'
            className='border shadow-inner rounded p-1 my-2 w-full appearance-none'
            {...register('password', {
              required: true,
              maxLength: 255,
            })}
          />
          {errors.password && (
            <span className={ERROR_CLASS_NAME}>
              Your password is incorrect.
            </span>
          )}
        </label>
        <SubmitButton className='w-full'>Sign in</SubmitButton>
        <p className='mt-4 text-sm text-center'>
          New to PickNEat ?{' '}
          <Link to='/sign-up'>
            <span className='font-bold cursor-pointer transition md:hover:text-red-700'>
              Create an account
            </span>
          </Link>
        </p>
      </form>
    </Section>
  );
};

export default Login;
