import { useCallback, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import SubmitButton from '../elements/Buttons/SubmitButton';
import Section from '../modules/Section';
import HeaderTwo from '../elements/Headings/HeaderTwo';
import { fetchBurgersData } from '../../_constants/urls';

const Admin = () => {
  const [title, setTitle] = useState(null as unknown as string);
  const [price, setPrice] = useState(null as unknown as number);
  const [description, setDescription] = useState(null as unknown as string);
  const [image, setImage] = useState(null as unknown as string);
  const [allergens, setAllergens] = useState(null as unknown as string);

  const maxLength = 300;

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      Swal.fire({
        title: 'Add this burger?',
        text: 'Are you sure that you want to add this burger?',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, add it!',
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .post(fetchBurgersData, {
              title,
              price,
              description,
              image,
              allergens,
            })
            .then(() => {
              setTitle(null as unknown as string);
              setPrice(null as unknown as number);
              setDescription(null as unknown as string);
              setImage(null as unknown as string);
              setAllergens(null as unknown as string);
            });
          Swal.fire('Added!', 'Your burger has been added!', 'success');
        }
      });
    },
    [title, image, description, price, allergens]
  );

  const handleTitleChange = useCallback((e) => {
    setTitle(e.target.value);
  }, []);
  const handleImageChange = useCallback((e) => {
    setImage(e.target.value);
  }, []);
  const handleDescriptionChange = useCallback((e) => {
    setDescription(e.target.value);
  }, []);
  const handlePriceChange = useCallback((e) => {
    setPrice(e.target.value);
  }, []);
  const handleAllergensChange = useCallback((e) => {
    setAllergens(e.target.value);
  }, []);

  return (
    <Section>
      <div className='mx-auto xl:max-w-7xl'>
        <HeaderTwo text='Add your new burger' />
        <form className='mx-5 my-6' onSubmit={handleSubmit}>
          <div className='mb-5 grid gap-4 grid-flow-col grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2'>
            <div className='flex flex-col'>
              <label htmlFor='burgerName' className='font-semibold mb-2'>
                Burger
              </label>
              <input
                required
                value={title}
                onChange={handleTitleChange}
                id='burgerName'
                type='text'
                placeholder='Burger...'
                className='border-2 rounded p-1 shadow-inner focus:border-red-700'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='urlImage' className='font-semibold mb-2'>
                Put your image
              </label>
              <input
                required
                value={image}
                onChange={handleImageChange}
                id='urlImage'
                type='text'
                placeholder='Url...'
                className='border-2 rounded p-1 shadow-inner focus:border-red-700'
              />
            </div>
          </div>
          <div className='flex flex-col '>
            <label htmlFor='description' className='font-semibold mb-2'>
              Write a description
            </label>
            <textarea
              required
              value={description}
              onChange={handleDescriptionChange}
              id='description'
              maxLength={maxLength}
              placeholder='Description...'
              className='border-2 rounded p-1 shadow-inner max-w-lg max-h-72 focus:border-red-700'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='burgerName' className='font-semibold mb-2'>
              Allergens
            </label>
            <input
              required
              value={allergens}
              onChange={handleAllergensChange}
              id='burgerName'
              type='text'
              placeholder='Burger...'
              className='border-2 rounded p-1 shadow-inner focus:border-red-700'
            />
          </div>
          <div className='flex flex-col '>
            <label htmlFor='price' className='font-semibold mb-2'>
              Price
            </label>
            <input
              type='number'
              min='1'
              max='100'
              value={price}
              onChange={handlePriceChange}
              id='price'
              placeholder='Price...'
              className='border-2 rounded p-1 shadow-inner focus:border-red-700'
              required
            />
          </div>
          <SubmitButton>Send !</SubmitButton>
        </form>
      </div>
    </Section>
  );
};

export default Admin;
