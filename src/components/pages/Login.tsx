import { FC, useCallback, useContext, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import userContext from '../../contexts/userContext';
import { userLoginInterface } from '../../_types/user';
import SubmitButton from '../elements/Buttons/SubmitButton';
import Loader from '../images/icons/Loader';
import logo from '../images/logo.png';
import Section from '../modules/Section';
import ErrorMessage from '../elements/ErrorMessage';

const Login: FC = () => {
  const { setToken, setIsAuth } = useContext(userContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const [error, setError] = useState(null as unknown as boolean);
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
      setError(null as unknown as boolean);
      setLoading(true);

      return axios
        .post('/auth', values, { withCredentials: true })
        .then((res) => {
          if (res.statusText === 'OK') {
            if (!!res.data.token && res.data.token.length > 0) {
              setToken(res.data.token);
              setIsAuth(true);
              Toast.fire({
                icon: 'success',
                title: 'Successfully connected!',
              });
              navigate('/user');
            } else {
              setIsAuth(false);
            }
            setLoading(false);
            reset();
          }
        })
        .catch(() => {
          setLoading(false);
          setError(true);
          reset();
        });
    },
    [Toast, navigate, reset, setIsAuth, setToken]
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
        <h1 className='text-2xl text-center font-semibold'>Welcome !</h1>
        <img src={logo} alt='Logo PickNEat' className='max-h-32 mx-auto mb-5' />
        <p>admin@pickandeat.com</p>
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
