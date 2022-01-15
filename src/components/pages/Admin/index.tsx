import { useCallback, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import SubmitButton from '../../elements/Buttons/SubmitButton';
import Section from '../../modules/Section';
import { BASE_URL } from '../../../_constants/dataUrls';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import Loader from '../../images/icons/Loader';
import HeaderOne from '../../elements/Headings/HeaderOne';
import ErrorMessage from '../../elements/ErrorMessage';
import { PICKANDEAT_LS_T } from '../../../_constants/localStorage';
import { INPUT_CLASSNAME, LABEL_CLASSNAME } from './const';

const Admin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const onSubmitHandler = useCallback(
    (items) => {
      Swal.fire({
        title: `Add ${items.title}?`,
        text: 'Are you sure that you want to add it?',
        icon: 'info',
        scrollbarPadding: false,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, add it!',
      }).then((result) => {
        const encodedUserToken = localStorage.getItem(PICKANDEAT_LS_T);
        if (
          result.isConfirmed &&
          !!encodedUserToken &&
          encodedUserToken.length > 0
        ) {
          setLoading(true);

          const decodedToken = JSON.parse(
            Buffer.from(encodedUserToken, 'base64').toString()
          );

          const authAxios = axios.create({
            baseURL: BASE_URL,
            headers: {
              Authorization: `${process.env.REACT_APP_ACCESS_TOKEN_TYPE} ${decodedToken}`,
            },
          });

          return authAxios
            .post('burgers', items)
            .then(() => {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Added',
                text: 'Your burger has been added!',
                scrollbarPadding: false,
                showConfirmButton: false,
                timer: 1500,
              });
              setLoading(false);
              reset();
              navigate('/');
            })
            .catch(() => {
              setLoading(false);
            });
        }
      });
    },
    [reset, navigate]
  );

  if (loading)
    return (
      <Section className='items-center flex-1'>
        <Loader />
      </Section>
    );

  return (
    <Section>
      <HeaderOne>Add new burger</HeaderOne>
      <form className='my-6' onSubmit={handleSubmit(onSubmitHandler)}>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 mb-5'>
          <div className='flex flex-col'>
            <label htmlFor='title' className={LABEL_CLASSNAME}>
              Burger
            </label>
            <input
              id='title'
              type='text'
              placeholder='Burger...'
              required
              maxLength={100}
              className={INPUT_CLASSNAME}
              {...register('title')}
            />
            {errors.title && (
              <ErrorMessage>The title is incorrect.</ErrorMessage>
            )}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='image' className={LABEL_CLASSNAME}>
              Your image
            </label>
            <input
              id='image'
              type='text'
              placeholder='Url...'
              required
              maxLength={300}
              minLength={20}
              className={INPUT_CLASSNAME}
              {...register('image')}
            />
            {errors.image && <ErrorMessage>The url is incorrect.</ErrorMessage>}
          </div>
          <div className='flex flex-col '>
            <label htmlFor='price' className={LABEL_CLASSNAME}>
              Price
            </label>
            <input
              id='price'
              type='number'
              placeholder='Price...'
              required
              min={1}
              max={100}
              className={INPUT_CLASSNAME}
              {...register('price')}
            />
            {errors.price && (
              <ErrorMessage>The price is incorrect.</ErrorMessage>
            )}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='allergens' className={LABEL_CLASSNAME}>
              Allergens
            </label>
            <input
              id='allergens'
              type='text'
              placeholder='Allergens...'
              maxLength={300}
              className={INPUT_CLASSNAME}
              {...register('allergens')}
            />
            {errors.allergens && (
              <ErrorMessage>Allergens are incorrect.</ErrorMessage>
            )}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='description' className={LABEL_CLASSNAME}>
              Write a short description
            </label>
            <textarea
              id='description'
              placeholder='Description...'
              required
              maxLength={300}
              className='border-2 rounded p-1 shadow-inner h-32 resize-none'
              {...register('description')}
            />
            {errors.description && (
              <ErrorMessage>The description is incorrect.</ErrorMessage>
            )}
          </div>
        </div>
        <SubmitButton>Send !</SubmitButton>
      </form>
    </Section>
  );
};

export default Admin;
