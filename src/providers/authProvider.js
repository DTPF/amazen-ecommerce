import { useEffect, useState } from 'react';
import useGetUserById from "../indexedDB/api/users/useGetUserById";

export function useCheckIfUserIsLogged() {
  const [userLogged, setUserLogged] = useState(false);
  const user = localStorage.getItem('userLogged');

  useEffect(() => {
    if (user) {
      setUserLogged(true);
    } else {
      setUserLogged(false);
    }
  }, [user]);

  return userLogged;
}

export function useGetUser() {  
  const hasUserLocalStorage = localStorage.getItem('userLogged');
  const user = JSON.parse(hasUserLocalStorage);
  const getUser = useGetUserById(user?.id);

  return getUser;
}