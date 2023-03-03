import { basePath, apiVersion } from "./utils/config";
import jwtDecode from "jwt-decode";
import { DB_NAME_AMAZEN, DB_VERSION, AUTH } from "../indexedDB/config";
import { useState } from "react";

export function useGetAccessTokenApi() {
  const [accessToken, setAccessToken] = useState('');
  let openRequest = indexedDB.open(DB_NAME_AMAZEN, DB_VERSION);

  openRequest.onsuccess = function (e) {
    const result = e.target.result;
    const transaction = result.transaction([AUTH], "readwrite");
    let auth = transaction.objectStore(AUTH);
    let request = auth.get(0);

    request.onsuccess = function (e) {
      const result = e.target.result;
      setAccessToken(result?.ACCESS_TOKEN);
    };

    request.onerror = function () {
      console.log("Error", request.error);
    };
  }

  if (!accessToken || accessToken === "null") {
    return null;
  }

  willExpireToken(accessToken) && logout();

  return willExpireToken(accessToken) ? null : accessToken;
}

export function useGetRefreshTokenApi() {
  const [refreshToken, setRefreshToken] = useState('')
  let openRequest = indexedDB.open(DB_NAME_AMAZEN, DB_VERSION);

  openRequest.onsuccess = function (e) {
    const result = e.target.result;
    const transaction = result.transaction([AUTH], "readwrite");
    let auth = transaction.objectStore(AUTH);
    let request = auth.get(0);

    request.onsuccess = function (e) {
      const result = e.target.result;
      setRefreshToken(result?.REFRESH_TOKEN);
    };

    request.onerror = function () {
      console.log("Error", request.error);
    };
  }

  if (!refreshToken || refreshToken === "null") {
    return null;
  }

  willExpireToken(refreshToken) && logout();

  return willExpireToken(refreshToken) ? null : refreshToken;
}

export async function refreshAccessTokenApi(refreshToken, setUser) {
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
        const openRequest = indexedDB.open(DB_NAME_AMAZEN, DB_VERSION);

        openRequest.onsuccess = function (e) {
          const result = e.target.result;
          const transaction = result.transaction([AUTH], "readwrite");
          let auth = transaction.objectStore(AUTH);
          let obj = {
            id: 0,
            ACCESS_TOKEN: accessToken,
            REFRESH_TOKEN: refreshToken
          }
          let request = auth.put(obj);

          request.onsuccess = function (e) {
            setUser({
              isLoading: false,
              userData: jwtDecode(accessToken),
            });
          };

          request.onerror = function () {
            console.log("Error", request.error);
          };
        }
      }
    })
    .catch((err) => {
      return err.message;
    });
}

export async function logout() {
  let openRequest = indexedDB.open(DB_NAME_AMAZEN, DB_VERSION);

  openRequest.onsuccess = function (e) {
    const result = e.target.result;
    const transaction = result.transaction([AUTH], "readwrite");
    let auth = transaction.objectStore(AUTH);
    const request = auth.clear();

    request.onsuccess = function (e) {
      localStorage.removeItem('cart')
    };

    request.onerror = function () {
      console.log("Error", request.error);
    };
  }
}

export function willExpireToken(token) {
  const seconds = 60;
  const metaToken = jwtDecode(token);
  const { exp } = metaToken;
  const now = (Date.now() + seconds) / 1000;
  return now > exp;
}
