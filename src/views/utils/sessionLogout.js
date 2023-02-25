import deleteUserIDB from "../../indexedDB/api/auth/deleteUserIDB";

export default async function handleSessionLogout() {
  await deleteUserIDB().then(() => {
    localStorage.clear();
    window.location.reload();
  });
}