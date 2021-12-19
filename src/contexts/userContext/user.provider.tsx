import { FC, useState, useEffect, useMemo, useCallback } from 'react';
import axios from 'axios';
import { userInformationInterface } from '../../_types/user';
import { BASE_URL } from '../../_constants/dataUrls';
import userContext from './user.context';
import { UserContextInterface } from './user.types';
import Swal from 'sweetalert2';
import {
  PICKANDEAT_LS_CONNECTED,
  PICKANDEAT_LS_ROLE,
  PICKANDEAT_LS_TOKEN,
  PICKANDEAT_LS_USER,
} from '../../_constants/localStorage';

const { Provider } = userContext;

const UserProvider: FC = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null as unknown as userInformationInterface);
  const [userRole, setUserRole] = useState(null as unknown as string);

  /***************
    * User Logout
  /**************/
  const handleLogout = useCallback(() => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      scrollbarPadding: false,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
    localStorage.clear();
    setUser(null as unknown as userInformationInterface);
    setUserRole(null as unknown as string);
    setIsAuth(false);
    Toast.fire({
      icon: 'success',
      title: 'Successfully disconnected!',
    });
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
          window.atob(token.split('.')[1].replace('-', '+').replace('_', '/'))
        );

        if (parsedToken?.id) {
          return await authAxios
            .get(`users/${parsedToken.id}`)
            .then((res) => {
              localStorage.setItem(
                PICKANDEAT_LS_USER,
                JSON.stringify(res.data)
              );
              setUser(res.data);
              localStorage.setItem(
                PICKANDEAT_LS_ROLE,
                JSON.stringify(res.data.role)
              );
              setUserRole(res.data.role);
              localStorage.setItem(PICKANDEAT_LS_CONNECTED, 'true');
              setIsAuth(true);
            })
            .catch((err) => {
              console.log(err);
              handleLogout();
            });
        } else {
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
      const userToken = localStorage.getItem(PICKANDEAT_LS_TOKEN);
      const userInformation = localStorage.getItem(PICKANDEAT_LS_USER);
      const userRole = localStorage.getItem(PICKANDEAT_LS_ROLE);
      const userConnected = localStorage.getItem(PICKANDEAT_LS_CONNECTED);

      if (userToken && userInformation && userRole && userConnected) {
        setUser(JSON.parse(userInformation));
        setUserRole(JSON.parse(userRole));
        setIsAuth(JSON.parse(userConnected));
      } else {
        handleLogout();
      }
    };

    refetch();

    window.addEventListener('storage', refetch);

    return () => window.removeEventListener('storage', refetch);
  }, [handleLogout]);

  const contextValue: UserContextInterface = useMemo(
    () => ({
      isAuth,
      user,
      setUser,
      userRole,
      setUserRole,
      handleLogout,
      handleLogin,
    }),
    [isAuth, user, setUser, userRole, setUserRole, handleLogout, handleLogin]
  );

  return <Provider value={contextValue}>{children}</Provider>;
};

export default UserProvider;
