import { USERS, SECTIONS, ARTICLES, AUTH, DB_VERSION, LS_NAME } from "../config";

export function createObjects(db) {
  if (!db.objectStoreNames.contains(SECTIONS)) {
    db.createObjectStore(SECTIONS, { keyPath: 'id', autoIncrement: true });
  }

  if (!db.objectStoreNames.contains(USERS)) {
    db.createObjectStore(USERS, { keyPath: 'id', autoIncrement: true });
  }

  if (!db.objectStoreNames.contains(ARTICLES)) {
    db.createObjectStore(ARTICLES, { keyPath: 'id', autoIncrement: true });
  }

  if (!db.objectStoreNames.contains(AUTH)) {
    db.createObjectStore(AUTH, { keyPath: 'id' });
  }

  localStorage.setItem(LS_NAME, DB_VERSION);
}