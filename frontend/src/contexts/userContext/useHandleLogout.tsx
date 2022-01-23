import { useContext, useMemo } from 'react';
import userContext from '.';
import { UserContextInterface } from './user.types';

type UseHandleLogoutResult = UserContextInterface['handleLogout'];

const useHandleLogout = (): UseHandleLogoutResult => {
  const { handleLogout } = useContext(userContext);
  return useMemo(() => handleLogout, [handleLogout]);
};

export default useHandleLogout;
