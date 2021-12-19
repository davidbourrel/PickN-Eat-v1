import { FC } from 'react';
import { Navigate, useLocation } from 'react-router';
import useUserIsAuth from '../../contexts/userContext/useUserIsAuth';

const ValidAuth: FC<{ children: JSX.Element }> = ({ children }) => {
  const isAuth = useUserIsAuth();
  let location = useLocation();

  if (isAuth) {
    return <Navigate to='/user' state={{ from: location }} />;
  }

  return children;
};

export default ValidAuth;
