import {
  FC,
  createContext,
  useState,
  SetStateAction,
  Dispatch,
  useEffect,
} from 'react';
import axios from 'axios';
import { userInformationInterface } from '../../_types/user';
import { BASE_URL } from '../../_constants/dataUrls';
import useParseJWT from '../../hooks/useParseJWT';

export interface UserContextInterface {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
  user: userInformationInterface;
  setUser: Dispatch<SetStateAction<userInformationInterface>>;
  userRole: string;
  setUserRole: Dispatch<SetStateAction<string>>;
  setToken: Dispatch<SetStateAction<string>>;
}

// Create an initial provider value.
const initialProviderValue: UserContextInterface = {
  isAuth: false,
  setIsAuth: null as unknown as UserContextInterface['setIsAuth'],
  user: null as unknown as UserContextInterface['user'],
  setUser: null as unknown as UserContextInterface['setUser'],
  userRole: null as unknown as UserContextInterface['userRole'],
  setUserRole: null as unknown as UserContextInterface['setUserRole'],
  setToken: null as unknown as UserContextInterface['setToken'],
};
// Create the store or 'context'.
export const userContext = createContext(initialProviderValue);
const { Provider } = userContext;

const UserProvider: FC = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null as unknown as userInformationInterface);
  const [userRole, setUserRole] = useState(null as unknown as string);
  const [token, setToken] = useState(null as unknown as string);

  const tokenParsed = useParseJWT(token);

  // User authentication
  useEffect(() => {
    const authAxios = axios.create({
      baseURL: BASE_URL,
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!!token && token.length > 0 && isAuth) {
      authAxios
        .get(`users/${tokenParsed.id}`, { withCredentials: true })
        .then((res) => {
          setUser(res.data);
          setUserRole(res.data.role);
        });
    }
  }, [token, isAuth, tokenParsed]);

  return (
    <Provider
      value={{
        isAuth,
        setIsAuth,
        user,
        setUser,
        userRole,
        setUserRole,
        setToken,
      }}
    >
      {children}
    </Provider>
  );
};

export default UserProvider;
