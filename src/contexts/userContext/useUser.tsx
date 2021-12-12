import { useContext, useMemo } from 'react';
import userContext from '.';
import { UserContextInterface } from './user.types';

type UseUserResult = Pick<UserContextInterface, 'user' | 'setUser'>;

const useUser = (): UseUserResult => {
  const { user, setUser } = useContext(userContext);
  return useMemo(() => ({ user, setUser }), [user, setUser]);
};

export default useUser;
