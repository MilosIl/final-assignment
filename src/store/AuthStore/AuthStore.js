import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isUserLoggedIn: false,
    loading: false,
    error: null,
  },
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
