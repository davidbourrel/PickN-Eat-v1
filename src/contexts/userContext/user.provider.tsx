import {
  FC,
  createContext,
  useState,
  SetStateAction,
  Dispatch,
  useCallback,
} from 'react';
import axios from 'axios';
import {
  userInformationInterface,
  userLoginInterface,
} from '../../_types/user';
import { BASE_URL } from '../../_constants/dataUrls';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export interface UserContextInterface {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
  user: userInformationInterface[];
  setUser: Dispatch<SetStateAction<userInformationInterface[]>>;
  userRole: number;
  setUserRole: Dispatch<SetStateAction<number>>;
  handleLogin: (values: userLoginInterface) => void;
  // fetchUser: () => void;
}

// Create an initial provider value.
const initialProviderValue: UserContextInterface = {
  isAuth: false,
  setIsAuth: null as unknown as UserContextInterface['setIsAuth'],
  user: null as unknown as UserContextInterface['user'],
  setUser: null as unknown as UserContextInterface['setUser'],
  userRole: null as unknown as UserContextInterface['userRole'],
  setUserRole: null as unknown as UserContextInterface['setUserRole'],
  handleLogin: null as unknown as UserContextInterface['handleLogin'],
  // fetchUser: null as unknown as UserContextInterface['fetchUser'],
};
// Create the store or 'context'.
export const userContext = createContext(initialProviderValue);
const { Provider } = userContext;

const UserProvider: FC = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState([] as unknown as userInformationInterface[]);
  const [userRole, setUserRole] = useState(null as unknown as number);
  const [accessToken, setAccessToken] = useState(null as unknown as string);

  const authAxios = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const fetchUser = useCallback(() => {
    authAxios.get('users').then((res) => {
      console.log('coucou fetchUser', res.data);
      setUser(res.data);
    });
  }, [authAxios]);

  const handleLogin = useCallback(
    (values: userLoginInterface) => {
      axios.post('/auth', values).then((res) => {
        if (res.data.accessToken.length > 10) {
          setAccessToken(res.data.accessToken);
          setIsAuth(true);
          fetchUser();
        } else {
          setIsAuth(false);
        }
      });
    },
    [fetchUser]
  );

  return (
    <Provider
      value={{
        isAuth,
        setIsAuth,
        user,
        setUser,
        userRole,
        setUserRole,
        handleLogin,
        // fetchUser,
      }}
    >
      {children}
    </Provider>
  );
};

export default UserProvider;
