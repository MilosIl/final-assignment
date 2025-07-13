import { createSlice } from "@reduxjs/toolkit";
import { ITEMS_PER_PAGE } from "@/constants/ITEMS_PER_PAGE";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    page: 1,
    limit: ITEMS_PER_PAGE[0],
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
      state.page = 1;
    },
    resetPagination: (state) => {
      state.page = 1;
      state.limit = ITEMS_PER_PAGE[0];
    },
  },
});

export const { setPage, setLimit, resetPagination } = paginationSlice.actions;
export { paginationSlice };
