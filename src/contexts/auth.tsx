import React, {createContext, useState} from 'react';
import * as auth from '../services/api';

interface AuthContextData {
  signed: boolean;
  user: object;
  signIn(): Promise<void>;
  signOut(): void;
}

const authContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<object | null>(null);

  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user);
  }

  async function signOut() {
    setUser(null);
  }
  return (
    <authContext.Provider value={{signed: !!user, user, signIn, signOut}}>
      {children}
    </authContext.Provider>
  );
};

export default authContext;
