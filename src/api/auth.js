import { basePath, apiVersion } from "./utils/config";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import useAuthContext from "../hooks/useAuthContext";

export function useGetAccessTokenApi() {
  const [accessToken, setAccessToken] = useState('');
  const token = Cookies.get('token')
  const tokenParse = token && JSON?.parse(token)?.ACCESS_TOKEN;
  const user = useAuthContext();

  useEffect(() => {
    setAccessToken(tokenParse);
  }, [tokenParse])

  if (!accessToken || accessToken === "null") {
    return null;
  }
  willExpireToken(accessToken) && logout(user?.setUser);
  return willExpireToken(accessToken) ? null : accessToken;
}

export function useGetRefreshTokenApi() {
  const [refreshToken, setRefreshToken] = useState('');
  const token = Cookies.get('token')
  const tokenParse = token && JSON?.parse(token)?.REFRESH_TOKEN;
  const user = useAuthContext();

  useEffect(() => {
    setRefreshToken(tokenParse);
  }, [tokenParse])

  if (!refreshToken || refreshToken === "null") {
    return null;
  }
  willExpireToken(refreshToken) && logout(user?.setUser);
  return willExpireToken(refreshToken) ? null : refreshToken;
}

export async function useRefreshAccessTokenApi(refreshToken, setUser) {
  const url = `${basePath}/${apiVersion}/refresh-access-token`;
  const bodyObj = {
    refreshToken: refreshToken,
  };
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyObj),
  };

  await fetch(url, params)
    .then((response) => {
      if (response.status !== 200) {
        return null;
      }
      return response.json();
    })
    .then((result) => {
      if (result) {
        const { accessToken, refreshToken } = result;
        let obj = {
          id: 0,
          ACCESS_TOKEN: accessToken,
          REFRESH_TOKEN: refreshToken
        }

        Cookies.set('token', JSON.stringify(obj))
        setUser({
          isLoading: false,
          userData: jwtDecode(accessToken),
        });
      }
    })
    .catch((err) => {
      return err.message;
    });
}

export function logout(setUser, setCart) {
  setUser && setUser({
    isLoading: false,
    userData: null,
  });
  setCart && setCart(0);
  Cookies.remove('token');
}

export function willExpireToken(token) {
  const seconds = 60;
  const metaToken = jwtDecode(token);
  const { exp } = metaToken;
  const now = (Date.now() + seconds) / 1000;
  return now > exp;
}
