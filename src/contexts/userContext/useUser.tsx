import { useContext, useMemo } from 'react';
import userContext from '.';
import { UserContextInterface } from './user.types';

type UseUserResult = Pick<
  UserContextInterface,
  'user' | 'setUser' | 'userLoading' | 'setUserLoading'
>;

const useUser = (): UseUserResult => {
  const { user, setUser, userLoading, setUserLoading } =
    useContext(userContext);
  return useMemo(
    () => ({ user, setUser, userLoading, setUserLoading }),
    [user, setUser, userLoading, setUserLoading]
  );
};

export default useUser;
