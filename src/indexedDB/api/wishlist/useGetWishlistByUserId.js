import { useEffect, useState } from "react";
import { DB_NAME_AMAZEN, DB_VERSION, WISHLIST } from "../../config";
import { isDBValid } from "../../utils/validations";

export default function useGetWishlistByUserId(userId) {
  const [wishlist, setWishlist] = useState('');

  useEffect(() => {
    if (!isDBValid()) return;
    let isMounted = true;
    const openRequest = indexedDB.open(DB_NAME_AMAZEN, DB_VERSION);

    openRequest.onupgradeneeded = function (e) {
      const db = e.target.result;
      isMounted && getWishlist(db, setWishlist, userId);
    };

    openRequest.onsuccess = function (e) {
      const db = e.target.result;
      isMounted && getWishlist(db, setWishlist, userId);
    };

    openRequest.onerror = function (e) {
      if (e.target.error.code === 0) {
        indexedDB.deleteDatabase(DB_NAME_AMAZEN);
        window.location.reload();
      }
    };

    return () => { isMounted = false };
  }, [userId])

  return wishlist;
}

const getWishlist = (db, setWishlist, userId) => {
  if (db.objectStoreNames.contains(WISHLIST)) {
    const request = db.transaction(WISHLIST, "readonly")
      .objectStore(WISHLIST)
      .getAll();

    request.onsuccess = function () {
      const result = request.result;
      let arr = [];

      result && result.forEach(element => {
        if (element.userId === userId) {
          arr.push(element);
        }
      });

      setWishlist({
        wishlistIndexed: arr ? arr : [],
      });
    };

    request.onerror = function (e) {
      console.log("onerror!", e);
    };
  } else {
    setWishlist({
      wishlistIndexed: [],
    });
  }
};