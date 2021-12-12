import { useCallback, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import SubmitButton from '../elements/Buttons/SubmitButton';
import Section from '../modules/Section';
import { FETCH_BURGERS_URL } from '../../_constants/dataUrls';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import Loader from '../images/icons/Loader';
import HeaderOne from '../elements/Headings/HeaderOne';
import ErrorMessage from '../elements/ErrorMessage';

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
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, add it!',
      }).then((result) => {
        if (result.isConfirmed) {
          setLoading(true);

          return axios
            .post(FETCH_BURGERS_URL, items)
            .then(() => {
              Swal.fire('Added!', 'Your burger has been added!', 'success');
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
      <HeaderOne>Add your new burger</HeaderOne>
      <form className='my-6' onSubmit={handleSubmit(onSubmitHandler)}>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 mb-5'>
          <div className='flex flex-col'>
            <label htmlFor='title' className='font-bold mb-2'>
              Burger
            </label>
            <input
              id='title'
              type='text'
              placeholder='Burger...'
              required
              maxLength={100}
              className='border-2 rounded p-1 shadow-inner'
              {...register('title')}
            />
            {errors.title && (
              <ErrorMessage>The title is incorrect.</ErrorMessage>
            )}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='image' className='font-bold mb-2'>
              Your image
            </label>
            <input
              id='image'
              type='text'
              placeholder='Url...'
              required
              maxLength={300}
              className='border-2 rounded p-1 shadow-inner'
              {...register('image')}
            />
            {errors.image && <ErrorMessage>The url is incorrect.</ErrorMessage>}
          </div>
          <div className='flex flex-col '>
            <label htmlFor='price' className='font-bold mb-2'>
              Price
            </label>
            <input
              id='price'
              type='number'
              placeholder='Price...'
              required
              min={1}
              max={100}
              className='border-2 rounded p-1 shadow-inner'
              {...register('price')}
            />
            {errors.price && (
              <ErrorMessage>The price is incorrect.</ErrorMessage>
            )}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='allergens' className='font-bold mb-2'>
              Allergens
            </label>
            <input
              id='allergens'
              type='text'
              placeholder='Allergens...'
              maxLength={300}
              className='border-2 rounded p-1 shadow-inner'
              {...register('allergens')}
            />
            {errors.allergens && (
              <ErrorMessage>Allergens are incorrect.</ErrorMessage>
            )}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='description' className='font-bold mb-2'>
              Write a short description
            </label>
            <textarea
              id='description'
              placeholder='Description...'
              required
              maxLength={300}
              className='border-2 rounded p-1 shadow-inner h-32 resize-none '
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
