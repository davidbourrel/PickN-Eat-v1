import axios from 'axios';
import { FC, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import SubmitButton from '../elements/Buttons/SubmitButton';
import ErrorMessage from '../elements/ErrorMessage';
import HeaderOne from '../elements/Headings/HeaderOne';
import Loader from '../images/icons/Loader';
import Section from '../modules/Section';

const SignUp: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const [errorCheckPassword, setErrorCheckPassword] = useState(
    null as unknown as boolean
  );
  const [errorEmailDuplicated, setErrorEmailDuplicated] = useState(
    null as unknown as boolean
  );
  const [loading, setLoading] = useState(false);

  const Toast = Swal.mixin({
    toast: false,
    position: 'center',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: false,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  const onSubmitHandler = useCallback(
    async (user) => {
      setErrorEmailDuplicated(null as unknown as boolean);

      if (user.password === user.secondPassword) {
        setErrorCheckPassword(null as unknown as boolean);
        setLoading(true);
        return axios
          .post('/register', user)
          .then(() => {
            Toast.fire({
              icon: 'success',
              title: 'Thanks for joining us!',
            });
            setLoading(false);
            reset();
            navigate('/login');
          })
          .catch((err) => {
            if (err.response.status === 409) {
              setErrorEmailDuplicated(true);
            }
            setLoading(false);
            reset();
          });
      }
      setErrorCheckPassword(true);
    },
    [Toast, navigate, reset]
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
              <ErrorMessage>Your first name is incorrect.</ErrorMessage>
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
              <ErrorMessage>Your last name is incorrect.</ErrorMessage>
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
            {errors.email ? (
              <ErrorMessage>Your email is incorrect.</ErrorMessage>
            ) : errorEmailDuplicated ? (
              <ErrorMessage>This email is already used.</ErrorMessage>
            ) : null}
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
              <ErrorMessage>Your age must be a number.</ErrorMessage>
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
              placeholder='Confirm Password...'
              required
              maxLength={255}
              className='border-2 rounded py-1 px-2 shadow-inner'
              {...register('secondPassword')}
            />
            {errorCheckPassword ? (
              <ErrorMessage>Your passwords are not the same.</ErrorMessage>
            ) : errors.firstPassword || errors.secondPassword ? (
              <ErrorMessage>Your password is incorrect.</ErrorMessage>
            ) : null}
          </div>
        </div>
        <SubmitButton>Send !</SubmitButton>
      </form>
    </Section>
  );
};

export default SignUp;
