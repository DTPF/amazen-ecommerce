import { useEffect, useState } from "react";
import { DB_NAME_AMAZEN, DB_VERSION, USERS } from "../../config";
import { isDBValid } from "../../utils/validations";

export default function useLogin(email, pwd) {
  const [user, setUser] = useState('');

  useEffect(() => {
    if (!isDBValid()) return;
    let isMounted = true;
    const openRequest = indexedDB.open(DB_NAME_AMAZEN, DB_VERSION);

    openRequest.onupgradeneeded = function (e) {
      const db = e.target.result;
      isMounted && getUser(db, setUser, email, pwd);
    };

    openRequest.onsuccess = function (e) {
      const db = e.target.result;
      isMounted && getUser(db, setUser, email, pwd);
    };

    openRequest.onerror = function (e) {
      if (e.target.error.code === 0) {
        indexedDB.deleteDatabase(DB_NAME_AMAZEN);
        window.location.reload();
      }
    };

    return () => { isMounted = false };
  }, [email, pwd])

  return user;
}

const getUser = async (db, setUser, email, pwd) => {
  if (db.objectStoreNames.contains(USERS)) {

    const request = db.transaction(USERS, "readonly")
      .objectStore(USERS)
      .getAll();

    request.onsuccess = function () {
      const result = request.result;
      let findByEmail = result.find((e) => e.email === email);

      if (!findByEmail) {
        setUser('email-not-valid');
      } else {
        const { id, name, userName, email, password, createdAt } = findByEmail;
        if (password !== pwd) {
          setUser('password-not-valid');
        } else {
          const user = {
            id: id,
            name: name,
            userName: userName,
            email: email,
            createdAt: createdAt
          }
          localStorage.setItem('userLogged', JSON.stringify(user));
          setUser(user);
        }
      }
    };

    request.onerror = function (e) {
      console.log("onerror!", e);
    };
  } else {
    setUser('empty');
  }
};