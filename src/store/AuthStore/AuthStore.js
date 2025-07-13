import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  try {
    const token = localStorage.getItem("authToken");

    if (token) {
      return {
        user: null,
        isUserLoggedIn: true,
      };
    }
  } catch (error) {
    console.error("Error checking auth token:", error);
  }

  return {
    user: null,
    isUserLoggedIn: false,
  };
};

const authSlice = createSlice({
  name: "auth",
  initialState: getInitialState(),
  reducers: {
    login: (state, action) => {
      state.isUserLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isUserLoggedIn = false;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { logout, login, updateUser } = authSlice.actions;
export { authSlice };
