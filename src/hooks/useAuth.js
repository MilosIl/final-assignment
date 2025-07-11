import { useDispatch, useSelector } from "react-redux";
import { login as loginRedux, logout as logoutRedux } from "@/store/AuthStore";
import { login as apiLogin, logout as apiLogout } from "../api/auth";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, loading, error } = useSelector(
    (state) => state.auth
  );

  const login = async (username, password) => {
    try {
      const result = await apiLogin(username, password);

      if (result.success) {
        dispatch(loginRedux(result.user));
        return { success: true };
      }
    } catch (error) {
      console.log("error during login", error);
      return { success: false, error };
    }
  };

  const logoutUser = () => {
    apiLogout();
    dispatch(logoutRedux());
  };

  return {
    user,
    isAuthenticated,
    loading,
    error,
    login,
    logout: logoutUser,
  };
};
