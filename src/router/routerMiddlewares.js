import { Navigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();
  const { userData } = user;
  if (!userData) {
    return <Navigate to="/auth/login" />;
  }
  return children;
};

export const AdminRoute = ({ children }) => {
  const { user } = useAuthContext();
  const { userData } = user;
  if (!userData) {
    return <Navigate to="/auth/login" />;
  }
  if (userData && userData.role !== 'admin') {
    return <Navigate to="/" />;
  }
  return children;
};

export const RejectUserLoggedRoute = ({ children }) => {
  const { user } = useAuthContext();
  const { userData } = user;
  if (userData) {
    return <Navigate to="/" />;
  }
  return children;
};