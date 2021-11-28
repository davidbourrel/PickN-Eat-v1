import { FC, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { postNewUser } from '../../API/userApi';
import SubmitButton from '../elements/Buttons/SubmitButton';
import HeaderOne from '../elements/Headings/HeaderOne';
import Section from '../modules/Section';
import { ERROR_CLASS_NAME } from './const';

const SignUp: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const [errorPasswordCheck, setErrorPasswordCheck] = useState(false);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  const onSubmitHandler = useCallback(
    async (data) => {
      if (data.hashedPassword === data.secondPassword) {
        postNewUser(data);
        reset();
        Toast.fire({
          icon: 'success',
          title: 'Sign up done!',
        });
        navigate('/user');
      } else {
        setErrorPasswordCheck(true);
      }
    },
    [Toast, navigate, reset]
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
              className='border-2 rounded py-1 px-2 shadow-inner'
              {...register('first_name', {
                required: true,
                maxLength: 50,
              })}
            />
            {errors.first_name && (
              <span className={ERROR_CLASS_NAME}>
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
              className='border-2 rounded py-1 px-2 shadow-inner'
              {...register('last_name', {
                required: true,
                maxLength: 50,
              })}
            />
            {errors.last_name && (
              <span className={ERROR_CLASS_NAME}>
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
              className='border-2 rounded py-1 px-2 shadow-inner'
              {...register('email', {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.email && (
              <span className={ERROR_CLASS_NAME}>Your email is incorrect.</span>
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
              className='border-2 rounded py-1 px-2 shadow-inner'
              {...register('age', {
                required: true,
                valueAsNumber: true,
                max: 100,
                min: 1,
              })}
            />
            {errors.age && (
              <span className={ERROR_CLASS_NAME}>Your age is incorrect.</span>
            )}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='hashedPassword' className='font-bold mb-2'>
              Password
            </label>
            <input
              id='hashedPassword'
              type='password'
              placeholder='Password...'
              className='border-2 rounded py-1 px-2 shadow-inner'
              {...register('hashedPassword', {
                required: true,
                maxLength: 255,
              })}
            />
            {errorPasswordCheck ? (
              <span className={ERROR_CLASS_NAME}>
                Your passwords are not the same.
              </span>
            ) : errors.firstPassword ? (
              <span className={ERROR_CLASS_NAME}>
                Your password is incorrect.
              </span>
            ) : null}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='secondPassword' className='font-bold mb-2'>
              Confirm Password
            </label>
            <input
              id='secondPassword'
              type='password'
              placeholder='Password...'
              className='border-2 rounded py-1 px-2 shadow-inner'
              {...register('secondPassword', {
                required: true,
                maxLength: 255,
              })}
            />
            {errors.secondPassword && (
              <span className={ERROR_CLASS_NAME}>
                Your password is incorrect.
              </span>
            )}
          </div>
        </div>
        <SubmitButton>Send !</SubmitButton>
      </form>
    </Section>
  );
};

export default SignUp;
