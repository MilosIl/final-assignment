import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  try {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme !== null) {
      return {
        isDarkMode: JSON.parse(savedTheme),
        loading: false,
        error: null,
      };
    }

    const systemPrefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    return {
      isDarkMode: systemPrefersDark,
      loading: false,
      error: null,
    };
  } catch (error) {
    console.error("Error loading theme from localStorage:", error);
  }
};

const themeSlice = createSlice({
  name: "theme",
  initialState: getInitialState(),
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("theme", JSON.stringify(state.isDarkMode));
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export { themeSlice };
