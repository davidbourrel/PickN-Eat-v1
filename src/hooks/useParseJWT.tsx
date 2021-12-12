import { useMemo } from 'react';

interface useParseJWTResult {
  id: string;
  email: string;
  exp: number;
  iat: number;
}

const useParseJWT = (token: string): useParseJWTResult => {
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
