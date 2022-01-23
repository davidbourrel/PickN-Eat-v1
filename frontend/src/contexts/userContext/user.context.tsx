import { createContext } from 'react';
import { INITIAL_USER_CONTEXT } from './user.const';

const userContext = createContext(INITIAL_USER_CONTEXT);

export default userContext;
