import { DB_NAME_AMAZEN, DB_VERSION, AUTH } from "../../config";

export default function deleteUserIDB() {
  let openRequest = indexedDB.open(DB_NAME_AMAZEN, DB_VERSION);
  openRequest.onupgradeneeded = function () {
    let db = openRequest.result;
    console.log(db);
  };

  openRequest.onsuccess = function () {
    let db = openRequest.result;
    deleteUser(db);
  }
}

const deleteUser = (db) => {
  const request = db.transaction([AUTH], "readwrite");
  let auth = request.objectStore(AUTH);
  auth.clear();
}