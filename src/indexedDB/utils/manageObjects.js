import { SECTIONS, DB_VERSION, LS_NAME } from "./config";

export function createObjects(db) {
  if (!db.objectStoreNames.contains(SECTIONS)) {
    db.createObjectStore(SECTIONS, { keyPath: 'id' });
  }

  localStorage.setItem(LS_NAME, DB_VERSION);
}