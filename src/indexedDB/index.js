import { DB_NAME_AMAZEN, DB_VERSION, LS_VERSION } from "./utils/config";
import { createObjects } from "./utils/manageObjects";
import firstPostSections from "./firstInsertDB/sections/firstPostSections";
import firstPostArticles from "./firstInsertDB/articles/firstPostArticles";

export default function DBIndexed() {
  let openRequest = indexedDB.open(DB_NAME_AMAZEN, DB_VERSION);

  openRequest.onupgradeneeded = function () {
    let db = openRequest.result;
    createObjects(db);
  };

  openRequest.onsuccess = function (e) {
    const db = e.target.result;
    firstPostSections(LS_VERSION, db);
    firstPostArticles(LS_VERSION, db);
  }
}