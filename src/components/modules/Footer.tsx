import { FC } from 'react';
import { Link } from 'react-router-dom';

const COL_CLASS_NAME = 'p-4 sm:p-8 sm:flex-1';
const HEADER_CLASS_NAME = 'font-bold text-lg py-5';
const ITEM_CLASS_NAME = 'text-sm mb-2 md:hover:underline cursor-pointer';

const Footer: FC = () => {
  return (
    <footer className='w-full pb-10 shadow-sm bg-gray-800 text-white'>
      <div className='py-2 flex flex-col flex-wrap xs:flex-row xs:justify-center xs:text-center xl:mx-auto xl:max-w-6xl'>
        <div className={COL_CLASS_NAME}>
          <h3 className={HEADER_CLASS_NAME}>About Us</h3>
          <ul>
            <li className={ITEM_CLASS_NAME}>
              <Link to='/'>Leadership Team</Link>
            </li>
            <li className={ITEM_CLASS_NAME}>
              <Link to='/'>Values In Action</Link>
            </li>
            <li className={ITEM_CLASS_NAME}>
              <Link to='/'>Digital Accessibility</Link>
            </li>
            <li className={ITEM_CLASS_NAME}>
              <Link to='/'>Franchise Info</Link>
            </li>
          </ul>
        </div>
        <div className={COL_CLASS_NAME}>
          <h3 className={HEADER_CLASS_NAME}>Careers</h3>
          <ul>
            <li className={ITEM_CLASS_NAME}>
              <Link to='/'>Education Opportunities</Link>
            </li>
            <li className={ITEM_CLASS_NAME}>
              <Link to='/'>Employee Perks</Link>
            </li>
            <li className={ITEM_CLASS_NAME}>
              <Link to='/'>Working with Us</Link>
            </li>
            <li className={ITEM_CLASS_NAME}>
              <Link to='/'>Apply Now</Link>
            </li>
          </ul>
        </div>
        <div className={COL_CLASS_NAME}>
          <h3 className={HEADER_CLASS_NAME}>Contact Us</h3>
          <ul>
            <li className={ITEM_CLASS_NAME}>
              <Link to='/'>Arch Card</Link>
            </li>
            <li className={ITEM_CLASS_NAME}>
              <Link to='/'>Restaurant Feedback</Link>
            </li>
            <li className={ITEM_CLASS_NAME}>
              <Link to='/'>Frequently Asked Questions</Link>
            </li>
            <li className={ITEM_CLASS_NAME}>
              <Link to='/'>Send an email</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
