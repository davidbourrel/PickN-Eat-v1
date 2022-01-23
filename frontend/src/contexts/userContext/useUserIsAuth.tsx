import { useContext, useMemo } from 'react';
import userContext from '.';
import { UserContextInterface } from './user.types';

type UseUserIsAuthResult = UserContextInterface['isAuth'];

const useUserIsAuth = (): UseUserIsAuthResult => {
  const { isAuth } = useContext(userContext);
  return useMemo(() => isAuth, [isAuth]);
};

export default useUserIsAuth;
