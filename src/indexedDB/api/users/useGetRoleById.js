import { useEffect, useState } from "react";
import { DB_NAME_AMAZEN, DB_VERSION, USERS } from "../../config";
import { isDBValid } from "../../utils/validations";

export default function useGetUserById(id) {
  const [user, setUser] = useState('');

  useEffect(() => {
    if (!isDBValid()) return;
    let isMounted = true;
    const openRequest = indexedDB.open(DB_NAME_AMAZEN, DB_VERSION);

    openRequest.onupgradeneeded = function (e) {
      const db = e.target.result;
      isMounted && getUserById(db, setUser, id);
    };

    openRequest.onsuccess = function (e) {
      const db = e.target.result;
      isMounted && getUserById(db, setUser, id);
    };

    openRequest.onerror = function (e) {
      if (e.target.error.code === 0) {
        indexedDB.deleteDatabase(DB_NAME_AMAZEN);
        window.location.reload();
      }
    };

    return () => { isMounted = false };
  }, [id])

  return user;
}

const getUserById = async (db, setUser, id) => {
  if (db.objectStoreNames.contains(USERS)) {
    if (id !== undefined) {
      const request = db.transaction(USERS, "readonly")
        .objectStore(USERS)
        .get(id);

      request.onsuccess = function () {
        const result = request.result;
        setUser(result)
      };

      request.onerror = function (e) {
        console.log("onerror!", e);
      };
    } else {
      setUser('logged-out');
    }
  } else {
    setUser('empty');
  }
};