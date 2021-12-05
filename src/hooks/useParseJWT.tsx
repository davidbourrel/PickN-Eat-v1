import { useMemo } from 'react';
import { userInformationInterface } from '../_types/user';

const useParseJWT = (token: string): userInformationInterface => {
  const userInformation = useMemo(() => {
    if (token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
    }
  }, [token]);
  return userInformation;
};

export default useParseJWT;
