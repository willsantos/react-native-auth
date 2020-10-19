import React, {createContext, useState} from 'react';
import * as auth from '../services/api';

interface AuthContextData {
  signed: boolean;
  user: object;
  signIn(): Promise<void>;
}

const authContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<object | null>(null);

  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user);
  }

  return (
    <authContext.Provider value={{signed: !!user, user, signIn}}>
      {children}
    </authContext.Provider>
  );
};

export default authContext;
