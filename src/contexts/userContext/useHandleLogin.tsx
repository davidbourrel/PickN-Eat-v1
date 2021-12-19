import { useContext, useMemo } from 'react';
import userContext from '.';
import { UserContextInterface } from './user.types';

type UseHandleLoginResult = UserContextInterface['handleLogin'];

const useHandleLogin = (): UseHandleLoginResult => {
  const { handleLogin } = useContext(userContext);
  return useMemo(() => handleLogin, [handleLogin]);
};

export default useHandleLogin;
