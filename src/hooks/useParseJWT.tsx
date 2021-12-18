import { useMemo } from 'react';

export interface useParseJWTResult {
  id: string;
  exp: number;
  iat: number;
}

const useParseJWT: (token: string) => useParseJWTResult = (token) => {
  const tokenResult = useMemo(() => {
    if (token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
    }
  }, [token]);
  return tokenResult;
};

export default useParseJWT;
