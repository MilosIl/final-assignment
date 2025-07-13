import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./AuthStore";
import { themeSlice } from "./ThemeStore";
import { paginationSlice } from "./PaginationStore";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    theme: themeSlice.reducer,
    pagination: paginationSlice.reducer,
  },
});

export { store };
