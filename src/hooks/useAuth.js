import { useDispatch, useSelector } from "react-redux";
import {
  login as loginRedux,
  logout as logoutRedux,
  updateUser,
} from "@/store/AuthStore";
import { login as apiLogin, logout as apiLogout } from "@/api/";
import { useGetCurrentUser } from "@/services";
import { useEffect } from "react";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isUserLoggedIn, loading, error } = useSelector(
    (state) => state.auth
  );

  const { data: currentUser } = useGetCurrentUser();

  useEffect(() => {
    if (currentUser && isUserLoggedIn) {
      dispatch(updateUser(currentUser));
    }
  }, [currentUser, dispatch, isUserLoggedIn]);

  const login = async (username, password) => {
    try {
      const result = await apiLogin(username, password);

      if (result.success) {
        dispatch(loginRedux(result.user));
        return { success: true };
      }
      return { success: false, error: result.error };
    } catch (error) {
      console.error("Error during login", error);
      return { success: false, error };
    }
  };

  const logoutUser = () => {
    apiLogout();
    dispatch(logoutRedux());
  };

  return {
    user,
    isUserLoggedIn,
    loading,
    error,
    login,
    logout: logoutUser,
  };
};
