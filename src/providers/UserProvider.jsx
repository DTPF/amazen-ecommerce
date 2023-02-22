import React, { createContext, useEffect, useState, useContext } from 'react';
import useGetUserById from '../indexedDB/api/users/useGetUserById';

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(undefined);
  const userId = localStorage.getItem('user_id');
  const getUser = useGetUserById(Math.floor(userId && userId));

  useEffect(() => {
      if (user && user.id !== getUser.id) return;
    if (userId && (getUser !== 'logged-out')) {
      delete getUser.password;
      setUser(getUser);
    }
  }, [getUser, userId, user]);

  return (
    <UserContext.Provider value={{ user, setUser }} >
      {children}
    </UserContext.Provider>
  )
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
}

export function useGetUserFromIndexedDB() {
  const hasUserLocalStorage = localStorage.getItem('userLogged');
  const user = JSON.parse(hasUserLocalStorage);
  const getUser = useGetUserById(user?.id);

  return getUser;
}