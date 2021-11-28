import Cookies from 'js-cookie';
import {
  FC,
  createContext,
  useState,
  SetStateAction,
  useEffect,
  Dispatch,
} from 'react';
import { getUserInfos } from '../../API/userApi';
import { userInformationInterface } from '../../_types/user';

export interface UserContextInterface {
  isConnected: boolean;
  setIsConnected: (isConnected: boolean) => void;
  user: userInformationInterface[];
  setUser: Dispatch<SetStateAction<userInformationInterface[]>>;
  userRole: number;
  setUserRole: (email: number) => void;
}

// Create an initial provider value.
const initialProviderValue: UserContextInterface = {
  isConnected: false as unknown as UserContextInterface['isConnected'],
  setIsConnected: null as unknown as UserContextInterface['setIsConnected'],
  user: null as unknown as UserContextInterface['user'],
  setUser: null as unknown as UserContextInterface['setUser'],
  userRole: null as unknown as UserContextInterface['userRole'],
  setUserRole: null as unknown as UserContextInterface['setUserRole'],
};
// Create the store or 'context'.
export const userContext = createContext(initialProviderValue);
const { Provider } = userContext;

const UserProvider: FC = ({ children }) => {
  const [isConnected, setIsConnected] = useState(null as unknown as boolean);
  const [user, setUser] = useState([] as unknown as userInformationInterface[]);
  const [userRole, setUserRole] = useState(null as unknown as number);

  useEffect(() => {
    Cookies.get('id') &&
      getUserInfos().then((data) => {
        if (data && data.length > 0) {
          setUser(data);
          setUserRole(data[0].roles_id);
        }
      });
  }, [setIsConnected]);

  useEffect(() => {
    Cookies.get('id') ? setIsConnected(true) : setIsConnected(false);
  }, [setIsConnected]);

  return (
    <Provider
      value={{
        isConnected,
        setIsConnected,
        user,
        setUser,
        userRole,
        setUserRole,
      }}
    >
      {children}
    </Provider>
  );
};

export default UserProvider;
