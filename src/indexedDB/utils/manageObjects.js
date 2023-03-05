import { SECTIONS, AUTH, DB_VERSION, LS_NAME } from "./config";

export function createObjects(db) {
  if (!db.objectStoreNames.contains(SECTIONS)) {
    db.createObjectStore(SECTIONS, { keyPath: 'id' });
  }

  if (!db.objectStoreNames.contains(AUTH)) {
    db.createObjectStore(AUTH, { keyPath: 'id' });
  }

  localStorage.setItem(LS_NAME, DB_VERSION);
}