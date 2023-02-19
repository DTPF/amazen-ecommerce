import { DB_NAME_AMAZEN, DB_VERSION, LS_VERSION } from "./config";
import firstPostSections from "./api/firstInsertDB/sections/firstPostSections";
import firstPostUsers from "./api/firstInsertDB/users/firstPostUsers";
import { createObjects } from "./utils/manageObjects";

export default function DBIndexed() {
  let openRequest = indexedDB.open(DB_NAME_AMAZEN, DB_VERSION);

  openRequest.onupgradeneeded = function () {
    let db = openRequest.result;
    createObjects(db);
  };

  openRequest.onsuccess = function (e) {
    const db = e.target.result;
    firstPostSections(LS_VERSION, db);
    firstPostUsers(LS_VERSION, db)
  }
}