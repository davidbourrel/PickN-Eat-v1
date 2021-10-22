import { FC, createContext, useState } from 'react';

export interface MenuContext {
  toto: boolean;
}

// Create an initial provider value.
const initialProviderValue: MenuContext = {
  // guideType: null as unknown as FGuideHomeContext['guideType'],
  // posts: null as unknown as FGuideHomeContext['posts'],
  // titles: null as unknown as FGuideHomeContext['titles'],
  // topStickyHeight: 0,
  // handleRegisterTitle: null as unknown as FGuideHomeContext['handleRegisterTitle'],
  // topSticky: null as unknown as FGuideHomeContext['topSticky'],

  toto: false,
};
// Create the store or 'context'.
export const menuContext = createContext(initialProviderValue);
const { Provider } = menuContext;

const MenuProvider: FC = ({ children }) => {
  const [toto] = useState(false);

  return <Provider value={{ toto }}>{children}</Provider>;
};

export default MenuProvider;
