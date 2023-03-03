import React, { useState, useEffect, createContext } from "react";
import jwtDecode from "jwt-decode";
import { useGetAccessTokenApi, useGetRefreshTokenApi } from "../api/auth";

export const AuthContext = createContext();

export default function AuthProvider(props) {
  const accessToken = useGetAccessTokenApi();
  const refreshToken = useGetRefreshTokenApi();
  const { children } = props;
  const [user, setUser] = useState({
    userData: null,
    isLoading: true,
  });

  useEffect(() => {
    checkUserLogin(setUser, accessToken, refreshToken);
  }, [setUser, accessToken, refreshToken]);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
}

export function checkUserLogin(setUser, accessToken, refreshToken) {
  if (!accessToken || !refreshToken) {
    setUser({
      user: null,
      isLoading: false,
    });
  } else {
    setUser({
      isLoading: false,
      userData: jwtDecode(accessToken),
    });
  }
}