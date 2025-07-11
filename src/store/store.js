import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./AuthStore";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    // themeReducer: ThemeStore,
  },
});

export { store };
