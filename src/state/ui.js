import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark",
  sideMenuOpen: true,
  addNewTaskModal: false,
  taskModal: {
    open: false,
    taskId: null,
  },
  deleteTaskModal: null,
  addNewBoardModal: false,
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
    toggleTaskModal: (state, action) => {
      state.taskModal = {
        open: !state.taskModal.open,
        taskId: action.payload,
      };
    },
    taskEdit: (state, action) => {
      state.taskModal = {
        open: false,
        taskId: action.payload,
      };
    },
    deleteTaskModal: (state, action) => {
      state.deleteTaskModal = action.payload;
    },
    toggleAddNewBoardModal: (state) => {
      state.addNewBoardModal = !state.addNewBoardModal;
    },
  },
});

export const {
  setTheme,
  toggleSideMenu,
  toggleAddNewTaskModal,
  toggleTaskModal,
  taskEdit,
  deleteTaskModal,
  toggleAddNewBoardModal,
} = uiSlice.actions;

export default uiSlice.reducer;
