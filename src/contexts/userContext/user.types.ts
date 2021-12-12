import { Dispatch, SetStateAction } from "react";
import { userInformationInterface } from "../../_types/user";

export interface UserContextInterface {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
  user: userInformationInterface;
  setUser: Dispatch<SetStateAction<userInformationInterface>>;
  userRole: string;
  setUserRole: Dispatch<SetStateAction<string>>;
  setToken: Dispatch<SetStateAction<string>>;
}
