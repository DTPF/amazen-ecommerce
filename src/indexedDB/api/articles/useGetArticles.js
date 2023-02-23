import { useEffect, useState } from "react";
import { DB_NAME_AMAZEN, DB_VERSION, ARTICLES } from "../../../indexedDB/config";
import { isDBValid } from "../../../indexedDB/utils/validations";

export default function useGetArticles() {
  const [articles, setArticles] = useState('');

  useEffect(() => {
    if (!isDBValid()) return;
    let isMounted = true;
    const openRequest = indexedDB.open(DB_NAME_AMAZEN, DB_VERSION);

    openRequest.onupgradeneeded = function (e) {
      const db = e.target.result;
      isMounted && getArticles(db, setArticles);
    };

    openRequest.onsuccess = function (e) {
      const db = e.target.result;
      isMounted && getArticles(db, setArticles);
    };

    openRequest.onerror = function (e) {
      if (e.target.error.code === 0) {
        indexedDB.deleteDatabase(DB_NAME_AMAZEN);
        window.location.reload();
      }
    };

    return () => { isMounted = false };
  }, [])

  return articles;
}

const getArticles = async (db, setArticles) => {
  if (db.objectStoreNames.contains(ARTICLES)) {
    const request = db.transaction(ARTICLES, "readonly")
      .objectStore(ARTICLES)
      .getAll();

    request.onsuccess = function () {
      const result = request.result;
      setArticles({
        articlesIndexed: result ? result : [],
      });
    };

    request.onerror = function (e) {
      console.log("onerror!", e);
    };
  } else {
    setArticles({
      articlesIndexed: [],
    });
  }
};