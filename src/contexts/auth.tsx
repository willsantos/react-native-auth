import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/api';

interface iUser {
  name: string;
  email: string;
}
interface AuthContextData {
  signed: boolean;
  user: iUser | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}

const authContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@WILLauth:user');
      const storageToken = await AsyncStorage.getItem('@WILLauth:token');

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
    }

    loadStorageData();
  }, []);

  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user);
    await AsyncStorage.setItem('@WILLauth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@WILLauth:token', response.token);

    setLoading(false);
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <authContext.Provider
      value={{signed: !!user, loading, user, signIn, signOut}}>
      {children}
    </authContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(authContext);

  return context;
}
