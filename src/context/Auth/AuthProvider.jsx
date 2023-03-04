import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import jwtDecode from "jwt-decode";
import { useGetAccessTokenApi, useGetRefreshTokenApi } from "../../api/auth";

export default function AuthProvider({ children }) {
  const accessToken = useGetAccessTokenApi();
  const refreshToken = useGetRefreshTokenApi();
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