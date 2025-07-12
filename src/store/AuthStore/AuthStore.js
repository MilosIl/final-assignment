import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  try {
    const token = localStorage.getItem("authToken");
    if (token) {
      return {
        user: null,
        isUserLoggedIn: true,
        loading: true,
        error: null,
      };
    }
  } catch (error) {
    console.error("Error checking auth state:", error);
  }

  return {
    user: null,
    isUserLoggedIn: false,
    loading: false,
    error: null,
  };
};

const authSlice = createSlice({
  name: "auth",
  initialState: getInitialState(),
  reducers: {
    login: (state, action) => {
      state.loading = false;
      state.isUserLoggedIn = true;
      state.user = action.payload;
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.isUserLoggedIn = false;
      state.error = null;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { logout, login, setLoading, setError } = authSlice.actions;
export { authSlice };
