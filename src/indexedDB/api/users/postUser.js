import { USERS } from "../../config";
import avatar1 from '../../../assets/images/userAvatar/avatar-1.png';
import avatar2 from '../../../assets/images/userAvatar/avatar-2.png';
import avatar3 from '../../../assets/images/userAvatar/avatar-3.png';
import avatar4 from '../../../assets/images/userAvatar/avatar-4.png';
import avatar5 from '../../../assets/images/userAvatar/avatar-5.png';
import avatar6 from '../../../assets/images/userAvatar/avatar-6.png';
import avatar7 from '../../../assets/images/userAvatar/avatar-7.png';
import avatar8 from '../../../assets/images/userAvatar/avatar-8.png';
import avatar9 from '../../../assets/images/userAvatar/avatar-9.png';

export default async function postUser(db, result, navigate, setMessage, setShowValidationMessage) {
  let transaction = db.transaction([USERS], "readwrite");
  let users = transaction.objectStore(USERS);

  delete result.repeatPassword;
  result.avatar = randomImage();
  let request = users.add((result));

  request.onsuccess = function () {
    return navigate('/auth');
  };

  request.onerror = function () {
    setMessage('El e-mail ya existe');
    setShowValidationMessage(true);
  };
}

const randomImage = () => {
  const images = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9];
  const random = Math.floor(Math.random() * images.length);

  return images[random];
}