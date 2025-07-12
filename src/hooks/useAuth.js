import { useDispatch, useSelector } from "react-redux";
import {
  login as loginRedux,
  logout as logoutRedux,
  setLoading,
  setError,
} from "@/store/AuthStore";
import {
  login as apiLogin,
  logout as apiLogout,
  getCurrentUser,
} from "@/api/auth";
import { useEffect } from "react";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isUserLoggedIn, loading, error } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    const fetchUserData = async () => {
      if (isUserLoggedIn && !user && !loading && !error) {
        dispatch(setLoading(true));
        try {
          const result = await getCurrentUser();
          if (result.success) {
            dispatch(loginRedux(result.user));
          }
        } catch (error) {
          dispatch(setError(error.message || "Failed to fetch user data"));
          apiLogout();
          dispatch(logoutRedux());
        }
      }
    };
    fetchUserData();
  }, [dispatch, isUserLoggedIn, user, loading, error]);

  const login = async (username, password) => {
    try {
      dispatch(setLoading(true));
      const result = await apiLogin(username, password);

      if (result.success) {
        dispatch(loginRedux(result.user));
        return { success: true };
      } else {
        dispatch(setError(result.error));
        return { success: false, error: result.error };
      }
    } catch (error) {
      console.log("error during login", error);
      dispatch(setError(error.message || "Login failed"));
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
