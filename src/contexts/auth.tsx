import React, {createContext} from 'react';
import * as auth from '../services/api';

interface AuthContextData {
  signed: boolean;
  user: object;
  signIn(): Promise<void>;
}

const authContext = createContext<AuthContextData>({} as AuthContextData);
async function signIn() {
  const response = await auth.signIn();
  console.log(response);
}

export const AuthProvider: React.FC = ({children}) => {
  return (
    <authContext.Provider value={{signed: false, user: {}, signIn}}>
      {children}
    </authContext.Provider>
  );
};

export default authContext;
