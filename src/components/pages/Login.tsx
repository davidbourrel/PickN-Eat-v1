import { FC, useCallback, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { userLoginInterface } from '../../_types/user';
import SubmitButton from '../elements/Buttons/SubmitButton';
import Loader from '../images/icons/Loader';
import Section from '../modules/Section';
import ErrorMessage from '../elements/ErrorMessage';
import HeaderOne from '../elements/Headings/HeaderOne';
import BCLogo from '../images/BCLogo';
import { PICKANDEAT_LS_T } from '../../_constants/localStorage';
import useHandleLogin from '../../contexts/userContext/useHandleLogin';

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleLogin = useHandleLogin();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    scrollbarPadding: false,
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });

  const onSubmitHandler = useCallback(
    async (values: userLoginInterface) => {
      setError(false);
      setLoading(true);

      return await axios
        .post('/auth', values)
        .then((res) => {
          if (res.statusText === 'OK') {
            if (!!res.data.token && res.data.token.length > 0) {
              localStorage.setItem(
                PICKANDEAT_LS_T,
                JSON.stringify(res.data.token)
              );
              handleLogin(res.data.token);
              Toast.fire({
                icon: 'success',
                title: 'Successfully connected!',
              });
            }
          }
          setLoading(false);
          reset();
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setError(true);
          reset();
        });
    },
    [Toast, reset, handleLogin]
  );

  if (loading)
    return (
      <Section className='items-center flex-1'>
        <Loader />
      </Section>
    );

  return (
    <Section>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className='m-5 p-6 text-gray-700 border-2 rounded shadow-md w-full max-w-sm mx-auto'
      >
        <HeaderOne className='border-none text-center mb-2'>
          Sign-In to PickN'Eat !
        </HeaderOne>
        <BCLogo className='mb-5 mx-auto' />
        <label htmlFor='email' className='flex flex-col mb-5 font-bold'>
          Email address:
          <input
            id='email'
            type='email'
            required
            maxLength={100}
            placeholder='Email...'
            className='border shadow-inner rounded p-1 my-2 w-full appearance-none'
            {...register('email')}
          />
        </label>
        <label htmlFor='password' className='flex flex-col mb-4 font-bold'>
          Password:
          <input
            id='password'
            type='password'
            required
            maxLength={255}
            placeholder='Password...'
            className='border shadow-inner rounded p-1 my-2 w-full appearance-none'
            {...register('password')}
          />
          {errors.email ||
            errors.password ||
            (error && (
              <ErrorMessage>The email or password is incorrect.</ErrorMessage>
            ))}
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
