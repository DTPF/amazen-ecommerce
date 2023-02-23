import { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';

export default function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
}