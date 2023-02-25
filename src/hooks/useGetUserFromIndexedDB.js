import useGetUserById from "../indexedDB/api/users/useGetUserById";

export default function useGetUserFromIndexedDB(id) {
  const getUser = useGetUserById(id);

  return getUser;
}