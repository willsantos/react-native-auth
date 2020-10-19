import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
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

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@WILLauth:user');
      const storageToken = await AsyncStorage.getItem('@WILLauth:token');

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
      }
    }

    loadStorageData();
  }, []);

  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user);
    await AsyncStorage.setItem('@WILLauth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@WILLauth:token', response.token);
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }
  return (
    <authContext.Provider value={{signed: !!user, user, signIn, signOut}}>
      {children}
    </authContext.Provider>
  );
};

export default authContext;
