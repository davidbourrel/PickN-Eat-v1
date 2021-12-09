import axios from 'axios';
import { FC, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import userContext from '../../contexts/userContext';
import { userLoginInterface } from '../../_types/user';
import SubmitButton from '../elements/Buttons/SubmitButton';
import Loader from '../images/icons/Loader';
import logo from '../images/logo.png';
import Section from '../modules/Section';
import { ERROR_CLASSNAME } from './const';

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
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });

  const onSubmitHandler = async (values: userLoginInterface) => {
    setError(null as unknown as boolean);
    setLoading(true);

    axios
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
  };

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
        <label htmlFor='email' className='flex flex-col mb-5 font-bold'>
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
          {errors.email ||
            (error && (
              <span className={ERROR_CLASSNAME}>Your email is incorrect.</span>
            ))}
        </label>
        <label htmlFor='password' className='flex flex-col mb-4 font-bold'>
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
          {errors.password ||
            (error && (
              <span className={ERROR_CLASSNAME}>
                Your password is incorrect.
              </span>
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
