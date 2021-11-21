import { FC } from 'react';
import { Link } from 'react-router-dom';

const colClassName = 'p-4 sm:p-8 sm:flex-1';
const headingClassName = 'font-bold text-lg py-5';
const itemClassName = 'text-sm mb-2 hover:underline cursor-pointer';

const Footer: FC = () => {
  return (
    <footer className='w-full pb-10 shadow-sm bg-gray-800 text-white'>
      <div className='py-2 flex flex-col flex-wrap xs:flex-row xs:justify-center xs:text-center xl:mx-auto xl:max-w-7xl'>
        <div className={colClassName}>
          <h3 className={headingClassName}>About Us</h3>
          <ul>
            <li className={itemClassName}>
              <Link to='/'>Leadership Team</Link>
            </li>
            <li className={itemClassName}>
              <Link to='/'>Values In Action</Link>
            </li>
            <li className={itemClassName}>
              <Link to='/'>Digital Accessibility</Link>
            </li>
            <li className={itemClassName}>
              <Link to='/'>Franchise Info</Link>
            </li>
          </ul>
        </div>
        <div className={colClassName}>
          <h3 className={headingClassName}>Careers</h3>
          <ul>
            <li className={itemClassName}>
              <Link to='/'>Education Opportunities</Link>
            </li>
            <li className={itemClassName}>
              <Link to='/'>Employee Perks</Link>
            </li>
            <li className={itemClassName}>
              <Link to='/'>Working with Us</Link>
            </li>
            <li className={itemClassName}>
              <Link to='/'>Apply Now</Link>
            </li>
          </ul>
        </div>
        <div className={colClassName}>
          <h3 className={headingClassName}>Contact Us</h3>
          <ul>
            <li className={itemClassName}>
              <Link to='/'>Arch Card</Link>
            </li>
            <li className={itemClassName}>
              <Link to='/'>Restaurant Feedback</Link>
            </li>
            <li className={itemClassName}>
              <Link to='/'>Frequently Asked Questions</Link>
            </li>
            <li className={itemClassName}>
              <Link to='/'>Send an email</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
