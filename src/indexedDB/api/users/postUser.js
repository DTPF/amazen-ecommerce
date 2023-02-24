import { USERS } from "../../config";
import randomAvatar from "../../utils/randomAvatar";

export default async function postUser(db, result, navigate, setMessage, setShowValidationMessage) {
  let transaction = db.transaction([USERS], "readwrite");
  let users = transaction.objectStore(USERS);

  delete result.repeatPassword;
  result.avatar = randomAvatar();
  let request = users.add((result));

  request.onsuccess = function () {
    return navigate('/auth');
  };

  request.onerror = function () {
    setMessage('El e-mail ya existe');
    setShowValidationMessage(true);
  };
}