import { FC } from 'react';
import { borderRightClassName } from './const';

const RestaurantTable: FC = () => {
  return (
    <table className='border-2 border-gray-800'>
      <thead className='border-2 border-gray-800'>
        <tr>
          <th className={`py-2 ${borderRightClassName}`}>Day</th>
          <th className={`py-2 ${borderRightClassName}`}>Lunch</th>
          <th className='py-2'>Dinner</th>
        </tr>
      </thead>
      <tbody className='text-center'>
        <tr>
          <td className={`${borderRightClassName}`}>Monday</td>
          <td className={`${borderRightClassName}`}>10am - 3pm</td>
          <td>6pm - 10pm</td>
        </tr>
        <tr className='border bg-gray-100'>
          <td className={`${borderRightClassName}`}>Tuesday</td>
          <td className={`${borderRightClassName}`}>10am - 3pm</td>
          <td>6pm - 10pm</td>
        </tr>
        <tr className='border'>
          <td className={`${borderRightClassName}`}>Wednesday</td>
          <td className={`${borderRightClassName}`}>10am - 3pm</td>
          <td>6pm - 10pm</td>
        </tr>
        <tr className='border bg-gray-100'>
          <td className={`${borderRightClassName}`}>Thursday</td>
          <td className={`${borderRightClassName}`}>10am - 3pm</td>
          <td>6pm - 10pm</td>
        </tr>
        <tr className='border'>
          <td className={`${borderRightClassName}`}>Friday</td>
          <td className={`${borderRightClassName}`}>10am - 3pm</td>
          <td>6pm - 10pm</td>
        </tr>
        <tr className='border bg-gray-100'>
          <td className={`${borderRightClassName}`}>Saturday</td>
          <td className={`${borderRightClassName}`}>9am - 4pm</td>
          <td>5pm - 11pm</td>
        </tr>
        <tr className='border'>
          <td className={`${borderRightClassName}`}>Sunday</td>
          <td className={`${borderRightClassName}`}>9am - 4pm</td>
          <td>5pm - 11pm</td>
        </tr>
      </tbody>
    </table>
  );
};

export default RestaurantTable;
