import { UserContextInterface } from './user.types';

export const INITIAL_USER_CONTEXT: UserContextInterface = {
  isAuth: false,
  setIsAuth: null as unknown as UserContextInterface['setIsAuth'],
  user: null as unknown as UserContextInterface['user'],
  setUser: null as unknown as UserContextInterface['setUser'],
  userRole: null as unknown as UserContextInterface['userRole'],
  setUserRole: null as unknown as UserContextInterface['setUserRole'],
  handleLogout: null as unknown as UserContextInterface['handleLogout'],
};
