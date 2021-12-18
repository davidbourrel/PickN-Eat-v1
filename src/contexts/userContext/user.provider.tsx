import { FC, useState, useEffect, useMemo, useCallback } from 'react';
import axios from 'axios';
import { userInformationInterface } from '../../_types/user';
import { BASE_URL } from '../../_constants/dataUrls';
import useParseJWT from '../../hooks/useParseJWT';
import userContext from './user.context';
import { UserContextInterface } from './user.types';
import Swal from 'sweetalert2';
import { PICKANDEAT_LS_PREFIX } from '../../_constants/localStorage';

const { Provider } = userContext;

const UserProvider: FC = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null as unknown as userInformationInterface);
  const [userRole, setUserRole] = useState(null as unknown as string);

  const token = localStorage.getItem(PICKANDEAT_LS_PREFIX) as string;

  const tokenParsed = useParseJWT(
    localStorage.getItem(PICKANDEAT_LS_PREFIX) as string
  );

  console.log('token :', token);
  console.log('tokenParsed :', tokenParsed);

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
    localStorage.removeItem(PICKANDEAT_LS_PREFIX);
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
  useEffect(() => {
    const authAxios = axios.create({
      baseURL: BASE_URL,
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!!token && token.length > 0) {
      if (tokenParsed?.id) {
        authAxios
          .get(`users/${tokenParsed.id}`, { withCredentials: true })
          .then((res) => {
            setUser(res.data);
            setUserRole(res.data.role);
          })
          .catch((err) => {
            console.log(err);
            handleLogout();
          });
      } else {
        handleLogout();
      }
    }
  }, [token, isAuth, tokenParsed, handleLogout]);

  /***************
   * Check if token is already valid
   /**************/
  useEffect(() => {
    !tokenParsed?.id ||
      !tokenParsed?.exp ||
      (tokenParsed?.exp > Date.now() && handleLogout());
  }, [token, isAuth, tokenParsed, handleLogout]);

  const contextValue: UserContextInterface = useMemo(
    () => ({
      isAuth,
      setIsAuth,
      user,
      setUser,
      userRole,
      setUserRole,
      handleLogout,
    }),
    [isAuth, setIsAuth, user, setUser, userRole, setUserRole, handleLogout]
  );

  return <Provider value={contextValue}>{children}</Provider>;
};

export default UserProvider;
