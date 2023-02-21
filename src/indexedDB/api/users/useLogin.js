import { useEffect, useState } from "react";
import { DB_NAME_AMAZEN, DB_VERSION, USERS } from "../../config";
import { isDBValid } from "../../utils/validations";

export default function useLogin(email, pwd) {
  const [response, setResponse] = useState('');

  useEffect(() => {
    if (!isDBValid()) return;
    let isMounted = true;
    const openRequest = indexedDB.open(DB_NAME_AMAZEN, DB_VERSION);

    openRequest.onupgradeneeded = function (e) {
      const db = e.target.result;
      isMounted && getUser(db, setResponse, email, pwd);
    };

    openRequest.onsuccess = function (e) {
      const db = e.target.result;
      isMounted && getUser(db, setResponse, email, pwd);
    };

    openRequest.onerror = function (e) {
      if (e.target.error.code === 0) {
        indexedDB.deleteDatabase(DB_NAME_AMAZEN);
        window.location.reload();
      }
    };

    return () => { isMounted = false };
  }, [email, pwd])

  return response;
}

const getUser = async (db, setResponse, email, pwd) => {
  if (!email) {
    return setResponse('empty-email');
  }

  if (db.objectStoreNames.contains(USERS)) {
    const request = db.transaction(USERS, "readonly")
      .objectStore(USERS)
      .getAll();

    request.onsuccess = function () {
      const result = request.result;
      let findByEmail = result.find((e) => e.email === email);

      if (!findByEmail) {
        return setResponse('email-not-valid');
      } else {
        const { id, name, lastname, userName, email, password, createdAt } = findByEmail;
        if (password !== pwd) {
          setResponse('password-not-valid');
        } else {
          const user = {
            id: id,
            name: name,
            lastname: lastname,
            userName: userName,
            email: email,
            createdAt: createdAt
          }
          localStorage.setItem('userLogged', JSON.stringify(user));
          setResponse('success');
        }
      }
    };

    request.onerror = function (e) {
      console.log("onerror!", e);
    };
  } else {
    setResponse('empty');
  }
};