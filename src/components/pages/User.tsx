import { FC } from 'react';
import Section from '../modules/Section';
import SubmitButton from '../elements/Buttons/SubmitButton';
import HeaderOne from '../elements/Headings/HeaderOne';
import useUser from '../../contexts/userContext/useUser';
import useHandleLogout from '../../contexts/userContext/useHandleLogout';

const User: FC = () => {
  const { user } = useUser();
  const handleLogout = useHandleLogout();

  return (
    <Section>
      <HeaderOne>My informations</HeaderOne>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 my-5 text-lg'>
        <div className='mb-2'>
          <span className='font-bold mr-1'>First name :</span>
          <span>{user?.first_name}</span>
        </div>
        <div className='mb-2'>
          <span className='font-bold mr-1'>Last name :</span>
          <span>{user?.last_name}</span>
        </div>
        <div className='mb-2'>
          <span className='font-bold mr-1'>Age :</span>
          <span>{user?.age}</span>
        </div>
        <div className='mb-2'>
          <span className='font-bold mr-1'>Email address :</span>
          <span>{user?.email}</span>
        </div>
        <div className='mb-2'>
          <span className='font-bold mr-1'>Role :</span>
          <span>{user?.role}</span>
        </div>
      </div>
      <SubmitButton
        onClick={handleLogout}
        value='submit'
        className='py-2 px-8 my-5 bg-gray-800 text-white font-semibold rounded cursor-pointer transition md:hover:bg-gray-700 md:w-1/3 md:mr-auto'
      >
        Sign out
      </SubmitButton>
    </Section>
  );
};
export default User;
