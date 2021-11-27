import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import userContext from '../../contexts/userContext';

const RequireAuth: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { isConnected } = useContext(userContext);
  let location = useLocation();

  if (!isConnected) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
