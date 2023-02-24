import { USERS } from "../../config";
import { usersData } from "./usersData";

export default function firstPostUsers(vls, db) {
  if (vls === 1 || vls < db.version) {
    usersData.forEach((user, index) => {
      const { name, lastname, userName, email, password, avatar, role, createdAt } = user;
      postUsers(db, name, lastname, userName, email, password, avatar, role, createdAt, index);
    });
  }
}

function postUsers(db, name, lastname, userName, email, password, avatar, role, createdAt, index) {
  let transaction = db.transaction([USERS], "readwrite");
  let users = transaction.objectStore(USERS);
  let user = {
    id: `:r1:${email}`,
    name: name,
    lastname: lastname,
    userName: userName,
    email: email,
    password: password,
    avatar: avatar,
    role: role,
    createdAt: createdAt
  };
  let request = users.put(user);

  request.onsuccess = function (e) {
  };

  request.onerror = function () {
    console.log("Error", request.error);
  };
}