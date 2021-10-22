import { FC, useContext } from 'react';
import userContext from '../../contexts/userContext';
import Login from '../modules/Login';
import User from '../modules/User';

const UserPage: FC = () => {
  const { isConnected } = useContext(userContext);
  return <>{isConnected ? <User /> : <Login />}</>;
};

export default UserPage;
