import { useEffect, useState } from "react";
import { DB_NAME_AMAZEN, DB_VERSION, AUTH } from "../../config";
import { isDBValid } from "../../utils/validations";

export default function useGetAuthUserId() {
  const [authId, setAuthId] = useState('');

  useEffect(() => {
    if (!isDBValid()) return;
    let isMounted = true;
    const openRequest = indexedDB.open(DB_NAME_AMAZEN, DB_VERSION);

    openRequest.onupgradeneeded = function (e) {
      const db = e.target.result;
      isMounted && getSections(db, setAuthId);
    };

    openRequest.onsuccess = function (e) {
      const db = e.target.result;
      isMounted && getSections(db, setAuthId);
    };

    openRequest.onerror = function (e) {
      if (e.target.error.code === 0) {
        indexedDB.deleteDatabase(DB_NAME_AMAZEN);
        window.location.reload();
      }
    };

    return () => { isMounted = false };
  }, [])

  return authId;
}

const getSections = async (db, setAuthId) => {
  if (db.objectStoreNames.contains(AUTH)) {

    const request = db.transaction(AUTH, "readonly")
      .objectStore(AUTH)
      .getAll();

    request.onsuccess = function () {
      const result = request.result;
      setAuthId(result ? result[0] : []);
    };

    request.onerror = function (e) {
      console.log("onerror!", e);
    };
  } else {
    setAuthId(undefined);
  }
};