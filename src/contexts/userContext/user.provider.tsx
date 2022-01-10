import { FC, useState, useEffect, useMemo, useCallback } from 'react';
import axios from 'axios';
import { userInformationInterface } from '../../_types/user';
import { BASE_URL } from '../../_constants/dataUrls';
import userContext from './user.context';
import { UserContextInterface } from './user.types';
import { PICKANDEAT_LS_T } from '../../_constants/localStorage';

const { Provider } = userContext;

const UserProvider: FC = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null as unknown as userInformationInterface);
  const [userLoading, setUserLoading] = useState(false);
  const [userRole, setUserRole] = useState(null as unknown as string);

  /***************
    * User Logout
  /**************/
  const handleLogout = useCallback(() => {
    localStorage.clear();
    setUser(null as unknown as userInformationInterface);
    setUserRole(null as unknown as string);
    setIsAuth(false);
  }, [setIsAuth, setUser, setUserRole]);

  /***************
   * User authentication
   /**************/
  const handleLogin = useCallback(
    async (token) => {
      if (!!token && token.length > 0) {
        const authAxios = axios.create({
          baseURL: BASE_URL,
          headers: { Authorization: `Bearer ${token}` },
        });

        const parsedToken = await JSON.parse(
          Buffer.from(token.split('.')[1], 'base64').toString()
        );

        if (parsedToken?.id) {
          return await authAxios
            .get(`users/${parsedToken.id}`)
            .then((res) => {
              setUser(res.data);
              setUserRole(res.data.role);
              setIsAuth(true);
              setUserLoading(false);
            })
            .catch((err) => {
              console.log(err);
              setUserLoading(false);
              handleLogout();
            });
        } else {
          setUserLoading(false);
          handleLogout();
        }
      }
    },
    [handleLogout]
  );

  /***************
   * Check if a user has previously logged in
   /**************/
  useEffect(() => {
    const refetch = () => {
      const userToken = localStorage.getItem(PICKANDEAT_LS_T);

      if (userToken) {
        handleLogin(JSON.parse(userToken));
      } else {
        handleLogout();
      }
    };
    refetch();

    window.addEventListener('storage', refetch);

    return () => window.removeEventListener('storage', refetch);
  }, [handleLogin, handleLogout]);

  const contextValue: UserContextInterface = useMemo(
    () => ({
      isAuth,
      user,
      setUser,
      userLoading,
      setUserLoading,
      userRole,
      setUserRole,
      handleLogout,
      handleLogin,
    }),
    [
      isAuth,
      user,
      setUser,
      userLoading,
      setUserLoading,
      userRole,
      setUserRole,
      handleLogout,
      handleLogin,
    ]
  );

  return <Provider value={contextValue}>{children}</Provider>;
};

export default UserProvider;
