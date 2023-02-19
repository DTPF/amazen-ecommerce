import { useEffect, useState } from "react";
import { DB_NAME_AMAZEN, DB_VERSION, SECTIONS } from "../../config";
import { isDBValid } from "../../utils/validations";

export default function useGetSections() {
  const [sections, setSections] = useState('');

  useEffect(() => {
    if (!isDBValid()) return;
    let isMounted = true;
    const openRequest = indexedDB.open(DB_NAME_AMAZEN, DB_VERSION);

    openRequest.onupgradeneeded = function (e) {
      const db = e.target.result;
      isMounted && getSections(db, setSections);
    };

    openRequest.onsuccess = function (e) {
      const db = e.target.result;
      isMounted && getSections(db, setSections);
    };

    openRequest.onerror = function (e) {
      if (e.target.error.code === 0) {
        indexedDB.deleteDatabase(DB_NAME_AMAZEN);
        window.location.reload();
      }
    };

    return () => { isMounted = false };
  }, [])

  return sections;
}

const getSections = async (db, setSections) => {
  if (db.objectStoreNames.contains(SECTIONS)) {

    const request = db.transaction(SECTIONS, "readonly")
      .objectStore(SECTIONS)
      .getAll();

    request.onsuccess = function () {
      const result = request.result;
      setSections({
        sectionsIndexed: result ? result : [],
      });
    };

    request.onerror = function (e) {
      console.log("onerror!", e);
    };
  } else {
    setSections({
      sectionsIndexed: [],
    });
  }
};