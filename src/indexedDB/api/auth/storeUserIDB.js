import { AUTH } from "../../config";

export default function storeUserIDB(db, userData) {
  userData && store(db, userData);
}

function store(db, userData) {
  let transaction = db.transaction([AUTH], "readwrite");
  let auth = transaction.objectStore(AUTH);
  let user = {
    id: userData.id,
  };
  let request = auth.put(user);

  request.onsuccess = function (e) {
    // console.log('Auth success');
  };

  request.onerror = function () {
    console.log("Error", request.error);
  };
}