import { USERS, SECTIONS, DB_VERSION, LS_NAME } from "../config";

export function createObjects(db) {
  if (!db.objectStoreNames.contains(SECTIONS)) {
    db.createObjectStore(SECTIONS, { keyPath: 'id', autoIncrement: true });
    localStorage.setItem(LS_NAME, DB_VERSION);
  }

    if (!db.objectStoreNames.contains(USERS)) {
    db.createObjectStore(USERS, { keyPath: 'id', autoIncrement: true });
    localStorage.setItem(LS_NAME, DB_VERSION);
  }
}