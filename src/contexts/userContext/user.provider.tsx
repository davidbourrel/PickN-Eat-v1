import { FC, useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { userInformationInterface } from '../../_types/user';
import { BASE_URL } from '../../_constants/dataUrls';
import useParseJWT from '../../hooks/useParseJWT';
import userContext from './user.context';
import { UserContextInterface } from './user.types';

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

  const contextValue: UserContextInterface = useMemo(
    () => ({
      isAuth,
      setIsAuth,
      user,
      setUser,
      userRole,
      setUserRole,
      setToken,
    }),
    [isAuth, setIsAuth, user, setUser, userRole, setUserRole, setToken]
  );

  return <Provider value={contextValue}>{children}</Provider>;
};

export default UserProvider;
