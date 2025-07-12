import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  try {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("authToken");

    if (user && token) {
      return {
        user: JSON.parse(user),
        isUserLoggedIn: true,
        loading: false,
        error: null,
      };
    }
  } catch (error) {
    console.error("Error loading user from localStorage:", error);
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
    },
  },
});

export const { logout, login } = authSlice.actions;
export { authSlice };
