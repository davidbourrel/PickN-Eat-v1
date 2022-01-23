import { Dispatch, SetStateAction } from 'react';
import { UserInformationInterface } from '../../_types/user';

export interface UserContextInterface {
  isAuth: boolean;
  user: UserInformationInterface;
  setUser: Dispatch<SetStateAction<UserInformationInterface>>;
  userLoading: boolean;
  setUserLoading: Dispatch<SetStateAction<boolean>>;
  userRole: string;
  setUserRole: Dispatch<SetStateAction<string>>;
  handleLogout: () => void;
  handleLogin: (token: string) => void;
  handleDeleteUserAccount: () => void;
}
