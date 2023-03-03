import { basePath, apiVersion } from "./utils/config";
import makeRequest from "./utils/makeRequest";

export function signUpApi(data) {
  const url = `${basePath}/${apiVersion}/sign-up`;
  return makeRequest(url, true, true, "POST", null, JSON.stringify(data));
}

export function signInApi(data) {
  const url = `${basePath}/${apiVersion}/sign-in`;
  return makeRequest(url, true, true, "POST", null, JSON.stringify(data));
}

export function getUsersApi(token) {
  const url = `${basePath}/${apiVersion}/get-users`;
  return makeRequest(url, true, true, "GET", token);
}

export function uploadAvatarApi(token, avatar, userId) {
  const url = `${basePath}/${apiVersion}/upload-avatar/${userId}`;
  const formData = new FormData();
  formData.append("avatar", avatar);
  return makeRequest(url, true, true, "PUT", token, formData);
}

export function getAvatarApi(avatarName) {
  const url = `${basePath}/${apiVersion}/get-avatar/${avatarName}`;
  return makeRequest(url, null, false);
}

export function updateUserApi(token, user, userId) {
  const url = `${basePath}/${apiVersion}/update-user/${userId}`;
  return makeRequest(url, true, true, "PUT", token, JSON.stringify(user));
}

export function deleteUserApi(token, userId) {
  const url = `${basePath}/${apiVersion}/delete-user/${userId}`;
  return makeRequest(url, true, true, "DELETE", token);
}
