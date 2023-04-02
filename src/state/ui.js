import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobileSideMenu: false,
  sideMenuOpen: true,
  moreMenu: false,
  addNewTaskModal: false,
  addNewBoardModal: false,
  addNewColumnModal: false,
  taskModal: null,
  editTaskModal: null,
  deleteTaskModal: null,
  deleteBoardModal: null,
  editBoardModal: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileSideMenu: (state) => {
      state.mobileSideMenu = !state.mobileSideMenu;
    },
    toggleSideMenu: (state) => {
      state.sideMenuOpen = !state.sideMenuOpen;
    },
    toggleAddNewTaskModal: (state) => {
      state.addNewTaskModal = !state.addNewTaskModal;
    },
    toggleAddNewColumnModal: (state) => {
      state.addNewColumnModal = !state.addNewColumnModal;
    },
    toggleMoreMenu: (state) => {
      state.moreMenu = !state.moreMenu;
    },
    taskModal: (state, action) => {
      state.taskModal = action.payload;
    },
    editTaskModal: (state, action) => {
      state.editTaskModal = action.payload;
    },
    editBoardModal: (state, action) => {
      state.editBoardModal = action.payload;
    },
    deleteTaskModal: (state, action) => {
      state.deleteTaskModal = action.payload;
    },
    deleteBoardModal: (state, action) => {
      state.deleteBoardModal = action.payload;
    },
    toggleAddNewBoardModal: (state) => {
      state.addNewBoardModal = !state.addNewBoardModal;
    },
  },
});

export const {
  toggleMobileSideMenu,
  toggleSideMenu,
  toggleAddNewTaskModal,
  toggleAddNewColumnModal,
  toggleMoreMenu,
  taskModal,
  editTaskModal,
  editBoardModal,
  deleteTaskModal,
  deleteBoardModal,
  toggleAddNewBoardModal,
} = uiSlice.actions;

export default uiSlice.reducer;
