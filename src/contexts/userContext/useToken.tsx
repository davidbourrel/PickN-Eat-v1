import { useContext, useMemo } from 'react';
import userContext from '.';
import { UserContextInterface } from './user.types';

type UseTokenResult = UserContextInterface['setToken'];

const useToken = (): UseTokenResult => {
  const { setToken } = useContext(userContext);
  return useMemo(() => setToken, [setToken]);
};

export default useToken;
