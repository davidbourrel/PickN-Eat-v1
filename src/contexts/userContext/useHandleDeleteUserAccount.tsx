import { useContext, useMemo } from 'react';
import userContext from '.';
import { UserContextInterface } from './user.types';

type UseHandleDeleteUserAccountResult =
  UserContextInterface['handleDeleteUserAccount'];

const useHandleDeleteUserAccount = (): UseHandleDeleteUserAccountResult => {
  const { handleDeleteUserAccount } = useContext(userContext);
  return useMemo(() => handleDeleteUserAccount, [handleDeleteUserAccount]);
};

export default useHandleDeleteUserAccount;
