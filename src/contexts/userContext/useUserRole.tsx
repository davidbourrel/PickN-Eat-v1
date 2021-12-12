import { useContext, useMemo } from 'react';
import userContext from '.';
import { UserContextInterface } from './user.types';

type UseUserRoleResult = Pick<UserContextInterface, 'userRole' | 'setUserRole'>;

const useUserRole = (): UseUserRoleResult => {
  const { userRole, setUserRole } = useContext(userContext);
  return useMemo(() => ({ userRole, setUserRole }), [userRole, setUserRole]);
};

export default useUserRole;
