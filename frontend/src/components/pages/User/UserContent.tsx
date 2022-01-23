import { FC, memo } from 'react';
import useUser from '../../../contexts/userContext/useUser';
import { USER_CONTAINER_CLASSNAME, USER_LABEL_CLASSNAME } from './const';

const UserContent: FC = () => {
  const { user } = useUser();

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 my-5 text-lg'>
      <div className={USER_CONTAINER_CLASSNAME}>
        <span className={USER_LABEL_CLASSNAME}>First name :</span>
        <span>{user?.first_name}</span>
      </div>
      <div className={USER_CONTAINER_CLASSNAME}>
        <span className={USER_LABEL_CLASSNAME}>Last name :</span>
        <span>{user?.last_name}</span>
      </div>
      <div className={USER_CONTAINER_CLASSNAME}>
        <span className={USER_LABEL_CLASSNAME}>Age :</span>
        <span>{user?.age}</span>
      </div>
      <div className={USER_CONTAINER_CLASSNAME}>
        <span className={USER_LABEL_CLASSNAME}>Email address :</span>
        <span>{user?.email}</span>
      </div>
    </div>
  );
};

export default memo(UserContent);
