import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark",
  sideMenuOpen: true,
  addNewTaskModal: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
    toggleSideMenu: (state) => {
      state.sideMenuOpen = !state.sideMenuOpen;
    },
    toggleAddNewTaskModal: (state) => {
      state.addNewTaskModal = !state.addNewTaskModal;
    },
  },
});

export const { setTheme, toggleSideMenu, toggleAddNewTaskModal } =
  uiSlice.actions;

export default uiSlice.reducer;
