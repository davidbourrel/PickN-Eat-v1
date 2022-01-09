import axios from 'axios';
import { FC, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import SubmitButton from '../../elements/Buttons/SubmitButton';
import ErrorMessage from '../../elements/ErrorMessage';
import HeaderOne from '../../elements/Headings/HeaderOne';
import Loader from '../../images/icons/Loader';
import Section from '../../modules/Section';
import {
  FIELD_CONTAINER_CLASSNAME,
  INPUT_CLASSNAME,
  LABEL_CLASSNAME,
} from './const';

const SignUp: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const [errorCheckPassword, setErrorCheckPassword] = useState(false);
  const [errorEmailDuplicated, setErrorEmailDuplicated] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = useCallback(
    async (user) => {
      setErrorEmailDuplicated(false);

      if (user.password === user.secondPassword) {
        setErrorCheckPassword(false);
        setLoading(true);
        return await axios
          .post('/register', user)
          .then(() => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Thanks for joining us!',
              scrollbarPadding: false,
              showConfirmButton: false,
              timer: 1500,
            });
            setLoading(false);
            reset();
            navigate('/login');
          })
          .catch((err) => {
            console.log(err);
            if (err.response.status === 409) {
              setErrorEmailDuplicated(true);
            }
            setLoading(false);
            reset();
          });
      }
      setErrorCheckPassword(true);
    },
    [navigate, reset]
  );

  if (loading)
    return (
      <Section className='items-center flex-1'>
        <Loader />
      </Section>
    );

  return (
    <Section>
      <HeaderOne>Create account</HeaderOne>
      <form className='my-6' onSubmit={handleSubmit(onSubmitHandler)}>
        <div className='grid grid-cols-1 gap-4 mb-5 sm:grid-cols-2 lg:grid-cols-3'>
          <div className={FIELD_CONTAINER_CLASSNAME}>
            <label htmlFor='first_name' className={LABEL_CLASSNAME}>
              First name
            </label>
            <input
              id='first_name'
              type='text'
              placeholder='First name...'
              required
              maxLength={50}
              className={INPUT_CLASSNAME}
              {...register('first_name')}
            />
            {errors.first_name && (
              <ErrorMessage>Your first name is incorrect.</ErrorMessage>
            )}
          </div>
          <div className={FIELD_CONTAINER_CLASSNAME}>
            <label htmlFor='last_name' className={LABEL_CLASSNAME}>
              Last name
            </label>
            <input
              id='last_name'
              type='text'
              placeholder='Last name...'
              required
              maxLength={50}
              className={INPUT_CLASSNAME}
              {...register('last_name')}
            />
            {errors.last_name && (
              <ErrorMessage>Your last name is incorrect.</ErrorMessage>
            )}
          </div>
          <div className={FIELD_CONTAINER_CLASSNAME}>
            <label htmlFor='email' className={LABEL_CLASSNAME}>
              Email
            </label>
            <input
              id='email'
              type='email'
              placeholder='Enter your email...'
              required
              maxLength={100}
              className={INPUT_CLASSNAME}
              {...register('email')}
            />
            {errors.email ? (
              <ErrorMessage>Your email is incorrect.</ErrorMessage>
            ) : errorEmailDuplicated ? (
              <ErrorMessage>This email is already used.</ErrorMessage>
            ) : null}
          </div>
          <div className={FIELD_CONTAINER_CLASSNAME}>
            <label htmlFor='age' className={LABEL_CLASSNAME}>
              Age
            </label>
            <input
              id='age'
              type='number'
              placeholder='Enter your age...'
              required
              maxLength={100}
              minLength={1}
              className={INPUT_CLASSNAME}
              {...register('age')}
            />
            {errors.age && (
              <ErrorMessage>Your age must be a number.</ErrorMessage>
            )}
          </div>
          <div className={FIELD_CONTAINER_CLASSNAME}>
            <label htmlFor='password' className={LABEL_CLASSNAME}>
              Password
            </label>
            <input
              id='password'
              type='password'
              placeholder='Password...'
              required
              maxLength={255}
              className={INPUT_CLASSNAME}
              {...register('password')}
            />
          </div>
          <div className={FIELD_CONTAINER_CLASSNAME}>
            <label htmlFor='secondPassword' className={LABEL_CLASSNAME}>
              Confirm Password
            </label>
            <input
              id='secondPassword'
              type='password'
              placeholder='Confirm Password...'
              required
              maxLength={255}
              className={INPUT_CLASSNAME}
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
