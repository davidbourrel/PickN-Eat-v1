import { useCallback, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import SubmitButton from '../elements/SubmitButton';
import Section from '../modules/Section';
import HeaderTwo from '../elements/HeaderTwo';

const Admin = () => {
  const [name, setName] = useState('');
  const [burger, setBurger] = useState('');
  const [sauce, setSauce] = useState('');
  const [menuImage, setMenuImage] = useState('');
  const [description, setDescription] = useState('');
  const [extras, setExtras] = useState('');
  const [price, setPrice] = useState('');
  const maxLength = 300;

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      Swal.fire({
        title: 'Add this menu?',
        text: 'Are you sure that you want to add this menu?',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, add it!',
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .post(`${process.env.REACT_APP_API_URL}menus`, {
              name: name,
              burger: burger,
              sauce: sauce,
              menuImage: menuImage,
              description: description,
              extras: extras,
              price: price,
            })
            .then(() => {
              setName('');
              setBurger('');
              setSauce('');
              setMenuImage('');
              setDescription('');
              setExtras('');
              setPrice('');
            });
          Swal.fire('Added!', 'Your menu has been added!', 'success');
        }
      });
    },
    [name, burger, sauce, menuImage, description, extras, price]
  );

  const handleMenuChange = useCallback((e) => {
    setName(e.target.value);
  }, []);
  const handleBurgerChange = useCallback((e) => {
    setBurger(e.target.value);
  }, []);
  const handleSaucesChange = useCallback((e) => {
    setSauce(e.target.value);
  }, []);
  const handleMenuImageChange = useCallback((e) => {
    setMenuImage(e.target.value);
  }, []);
  const handleDescriptionChange = useCallback((e) => {
    setDescription(e.target.value);
  }, []);
  const handleExtrasChange = useCallback((e) => {
    setExtras(e.target.value);
  }, []);
  const handlePriceChange = useCallback((e) => {
    setPrice(e.target.value);
  }, []);

  return (
    <Section>
      <div className='mx-auto xl:max-w-7xl'>
        <HeaderTwo text='Add your new menu' />
        <form className='mx-5 my-6' onSubmit={handleSubmit}>
          <div className='mb-5 grid gap-4 grid-flow-col grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2'>
            <div className='flex flex-col '>
              <label htmlFor='menuName' className='font-semibold mb-2'>
                Menu
              </label>
              <input
                required
                value={name}
                onChange={handleMenuChange}
                id='menuName'
                type='text'
                placeholder='Name...'
                className='border-2 rounded p-1 shadow-inner focus:border-red-700'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='burgerName' className='font-semibold mb-2'>
                Burger
              </label>
              <input
                required
                value={burger}
                onChange={handleBurgerChange}
                id='burgerName'
                type='text'
                placeholder='Burger...'
                className='border-2 rounded p-1 shadow-inner focus:border-red-700'
              />
            </div>
            <div className='flex flex-col '>
              <label htmlFor='extras-select' className='font-semibold mb-2'>
                Extras
              </label>
              <select
                value={extras}
                id='extras-select'
                className='border-2 rounded p-1 shadow-inner focus:border-red-700'
                onChange={handleExtrasChange}
              >
                <option value=''>Choose an extra</option>
                <option value='Fries'>Fries</option>
                <option value='Potatoes'>Potatoes</option>
                <option value='Popcorn Chicken'>Popcorn Chicken</option>
                <option value='Wings'>Wings</option>
              </select>
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
            <div className='flex flex-col '>
              <label htmlFor='sauce-select' className='font-semibold mb-2'>
                Sauces
              </label>
              <select
                value={sauce}
                id='sauce-select'
                className='border-2 rounded p-1 shadow-inner focus:border-red-700'
                onChange={handleSaucesChange}
              >
                <option value=''>Choose a sauce</option>
                <option value='Ketchup'>Ketchup</option>
                <option value='BBQ'>BBQ</option>
                <option value='Gravy'>Gravy</option>
                <option value='Deluxe'>Deluxe</option>
              </select>
            </div>
            <div className='flex flex-col'>
              <label htmlFor='urlImage' className='font-semibold mb-2'>
                Put your image
              </label>
              <input
                required
                value={menuImage}
                onChange={handleMenuImageChange}
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
          <SubmitButton>Send !</SubmitButton>
        </form>
      </div>
    </Section>
  );
};

export default Admin;
