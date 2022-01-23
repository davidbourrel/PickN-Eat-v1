import { FC } from 'react';
import { BORDER_RIGHT_CLASSNAME } from './const';

const RestaurantTable: FC = () => {
  return (
    <table className='border-2 border-gray-800'>
      <thead className='border-2 border-gray-800'>
        <tr>
          <th className={`py-2 ${BORDER_RIGHT_CLASSNAME}`}>Day</th>
          <th className={`py-2 ${BORDER_RIGHT_CLASSNAME}`}>Lunch</th>
          <th className='py-2'>Dinner</th>
        </tr>
      </thead>
      <tbody className='text-center'>
        <tr>
          <td className={`${BORDER_RIGHT_CLASSNAME}`}>Monday</td>
          <td className={`${BORDER_RIGHT_CLASSNAME}`}>10am - 3pm</td>
          <td>6pm - 10pm</td>
        </tr>
        <tr className='border bg-gray-100'>
          <td className={`${BORDER_RIGHT_CLASSNAME}`}>Tuesday</td>
          <td className={`${BORDER_RIGHT_CLASSNAME}`}>10am - 3pm</td>
          <td>6pm - 10pm</td>
        </tr>
        <tr className='border'>
          <td className={`${BORDER_RIGHT_CLASSNAME}`}>Wednesday</td>
          <td className={`${BORDER_RIGHT_CLASSNAME}`}>10am - 3pm</td>
          <td>6pm - 10pm</td>
        </tr>
        <tr className='border bg-gray-100'>
          <td className={`${BORDER_RIGHT_CLASSNAME}`}>Thursday</td>
          <td className={`${BORDER_RIGHT_CLASSNAME}`}>10am - 3pm</td>
          <td>6pm - 10pm</td>
        </tr>
        <tr className='border'>
          <td className={`${BORDER_RIGHT_CLASSNAME}`}>Friday</td>
          <td className={`${BORDER_RIGHT_CLASSNAME}`}>10am - 3pm</td>
          <td>6pm - 10pm</td>
        </tr>
        <tr className='border bg-gray-100'>
          <td className={`${BORDER_RIGHT_CLASSNAME}`}>Saturday</td>
          <td className={`${BORDER_RIGHT_CLASSNAME}`}>9am - 4pm</td>
          <td>5pm - 11pm</td>
        </tr>
        <tr className='border'>
          <td className={`${BORDER_RIGHT_CLASSNAME}`}>Sunday</td>
          <td className={`${BORDER_RIGHT_CLASSNAME}`}>9am - 4pm</td>
          <td>5pm - 11pm</td>
        </tr>
      </tbody>
    </table>
  );
};

export default RestaurantTable;
