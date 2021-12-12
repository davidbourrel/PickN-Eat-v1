import { useContext, useMemo } from 'react';
import userContext from '.';
import { UserContextInterface } from './user.types';

type UseUserIsAuthResult = Pick<UserContextInterface, 'isAuth' | 'setIsAuth'>;

const useUserIsAuth = (): UseUserIsAuthResult => {
  const { isAuth, setIsAuth } = useContext(userContext);
  return useMemo(() => ({ isAuth, setIsAuth }), [isAuth, setIsAuth]);
};

export default useUserIsAuth;
