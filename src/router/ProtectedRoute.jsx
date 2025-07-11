import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { isUserLoggedIn } = useAuth();

  if (!isUserLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export { ProtectedRoute };
