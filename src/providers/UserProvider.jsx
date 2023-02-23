import React, { createContext, useEffect, useState } from 'react';
import useGetAuthUserId from '../indexedDB/api/auth/useGetAuthUserId';
import useGetUserById from '../indexedDB/api/users/useGetUserById';

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [userContext, setUserContext] = useState(undefined);
  const userId = useGetAuthUserId();
  const getUser = useGetUserById(userId?.id);

  useEffect(() => {
    if (userId && (getUser !== 'logged-out')) {
      delete getUser.password;
      setUserContext(getUser);
    }
  }, [getUser, userId]);

  return (
    <UserContext.Provider value={{ userContext, setUserContext }} >
      {children}
    </UserContext.Provider>
  )
}