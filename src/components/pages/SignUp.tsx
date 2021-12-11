import axios from 'axios';
import { FC, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import SubmitButton from '../elements/Buttons/SubmitButton';
import HeaderOne from '../elements/Headings/HeaderOne';
import Loader from '../images/icons/Loader';
import Section from '../modules/Section';
import { ERROR_CLASSNAME } from './const';

const SignUp: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const [errorCheckPassword, setErrorCheckPassword] = useState(false);
  const [error, setError] = useState(null as unknown as boolean);
  const [loading, setLoading] = useState(false);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  const onSubmitHandler = useCallback(
    async (user) => {
      setError(null as unknown as boolean);
      setLoading(true);
      setErrorCheckPassword(true);
      if (user.password === user.secondPassword) {
        return axios
          .post('/register', user)
          .then(() => {
            Toast.fire({
              icon: 'success',
              title: 'Thank you ! You can connect now',
            });
            navigate('/login');
            reset();
          })
          .catch(() => {
            setLoading(false);
            setError(true);
            reset();
          });
      }
      setErrorCheckPassword(false);
    },
    [Toast, navigate, reset]
  );

  if (error)
    return (
      <Section className='items-center flex-1'>
        <p className='text-xl text-red-600 font-semibold'>
          Error ! We cannot register you.
        </p>
      </Section>
    );

  if (loading)
    return (
      <Section className='items-center flex-1'>
        <Loader />
      </Section>
    );

  return (
    <Section>
      <HeaderOne>Create an account</HeaderOne>
      <form className='my-6' onSubmit={handleSubmit(onSubmitHandler)}>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-5'>
          <div className='flex flex-col'>
            <label htmlFor='first_name' className='font-bold mb-2'>
              First name
            </label>
            <input
              id='first_name'
              type='text'
              placeholder='First name...'
              required
              maxLength={50}
              className='border-2 rounded py-1 px-2 shadow-inner'
              {...register('first_name')}
            />
            {errors.first_name && (
              <span className={ERROR_CLASSNAME}>
                Your first name is incorrect.
              </span>
            )}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='last_name' className='font-bold mb-2'>
              Last name
            </label>
            <input
              id='last_name'
              type='text'
              placeholder='Last name...'
              required
              maxLength={50}
              className='border-2 rounded py-1 px-2 shadow-inner'
              {...register('last_name')}
            />
            {errors.last_name && (
              <span className={ERROR_CLASSNAME}>
                Your last name is incorrect.
              </span>
            )}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email' className='font-bold mb-2'>
              Email
            </label>
            <input
              id='email'
              type='email'
              placeholder='Enter your email...'
              required
              maxLength={100}
              className='border-2 rounded py-1 px-2 shadow-inner'
              {...register('email')}
            />
            {errors.email && (
              <span className={ERROR_CLASSNAME}>Your email is incorrect.</span>
            )}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='age' className='font-bold mb-2'>
              Age
            </label>
            <input
              id='age'
              type='number'
              placeholder='Enter your age...'
              required
              maxLength={100}
              minLength={1}
              className='border-2 rounded py-1 px-2 shadow-inner'
              {...register('age')}
            />
            {errors.age && (
              <span className={ERROR_CLASSNAME}>Your age is incorrect.</span>
            )}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='password' className='font-bold mb-2'>
              Password
            </label>
            <input
              id='password'
              type='password'
              placeholder='Password...'
              required
              maxLength={255}
              className='border-2 rounded py-1 px-2 shadow-inner'
              {...register('password')}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='secondPassword' className='font-bold mb-2'>
              Confirm Password
            </label>
            <input
              id='secondPassword'
              type='password'
              placeholder='Password...'
              required
              maxLength={255}
              className='border-2 rounded py-1 px-2 shadow-inner'
              {...register('secondPassword')}
            />
            {errorCheckPassword ? (
              <span className={ERROR_CLASSNAME}>
                Your passwords are not the same.
              </span>
            ) : errors.firstPassword || errors.secondPassword ? (
              <span className={ERROR_CLASSNAME}>
                Your password is incorrect.
              </span>
            ) : null}
          </div>
        </div>
        <SubmitButton>Send !</SubmitButton>
      </form>
    </Section>
  );
};

export default SignUp;
