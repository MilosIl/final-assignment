import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./AuthStore";
import { themeSlice } from "./ThemeStore";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    theme: themeSlice.reducer,
  },
});

export { store };
