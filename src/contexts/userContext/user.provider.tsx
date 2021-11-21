import { FC, createContext, useState } from 'react';

export interface UserContextInterface {
  isConnected: boolean;
  setIsConnected: (isConnected: boolean) => void;
  lastName: string;
  setLastName: (lastName: string) => void;
  firstName: string;
  setFirstName: (firstName: string) => void;
  age: number;
  setAge: (age: number) => void;
  email: string;
  setEmail: (email: string) => void;
  userRole: number;
  setUserRole: (email: number) => void;
}

// Create an initial provider value.
const initialProviderValue: UserContextInterface = {
  isConnected: false as unknown as UserContextInterface['isConnected'],
  setIsConnected: null as unknown as UserContextInterface['setIsConnected'],
  lastName: null as unknown as UserContextInterface['lastName'],
  setLastName: null as unknown as UserContextInterface['setLastName'],
  firstName: null as unknown as UserContextInterface['firstName'],
  setFirstName: null as unknown as UserContextInterface['setFirstName'],
  age: null as unknown as UserContextInterface['age'],
  setAge: null as unknown as UserContextInterface['setAge'],
  email: null as unknown as UserContextInterface['email'],
  setEmail: null as unknown as UserContextInterface['setEmail'],
  userRole: null as unknown as UserContextInterface['userRole'],
  setUserRole: null as unknown as UserContextInterface['setUserRole'],
};
// Create the store or 'context'.
export const userContext = createContext(initialProviderValue);
const { Provider } = userContext;

const UserProvider: FC = ({ children }) => {
  const [isConnected, setIsConnected] = useState(null as unknown as boolean);
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [age, setAge] = useState(null as unknown as number);
  const [email, setEmail] = useState('');
  const [userRole, setUserRole] = useState(null as unknown as number);

  return (
    <Provider
      value={{
        isConnected,
        setIsConnected,
        lastName,
        setLastName,
        firstName,
        setFirstName,
        age,
        setAge,
        email,
        setEmail,
        userRole,
        setUserRole,
      }}
    >
      {children}
    </Provider>
  );
};

export default UserProvider;
