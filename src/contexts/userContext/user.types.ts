import { Dispatch, SetStateAction } from 'react';
import { userInformationInterface } from '../../_types/user';

export interface UserContextInterface {
  isAuth: boolean;
  user: userInformationInterface;
  setUser: Dispatch<SetStateAction<userInformationInterface>>;
  userLoading: boolean;
  setUserLoading: Dispatch<SetStateAction<boolean>>;
  userRole: string;
  setUserRole: Dispatch<SetStateAction<string>>;
  handleLogout: () => void;
  handleLogin: (token: string) => void;
}
