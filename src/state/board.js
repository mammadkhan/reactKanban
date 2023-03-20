import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    reorder: (state, action) => {
      const { destination, source } = action.payload;
      console.log(destination, source);
    },
    changeSelected: (state, action) => {
      state.selected = state.data
        .map((board) => board.id)
        .indexOf(action.payload.id);
    },
    addTask: (state, action) => {
      const index = state.data[state.selected].columns.findIndex(
        (column) => column.title === action.payload.status
      );
      state.data[state.selected].columns[index].cards.push({
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description
          ? action.payload.description
          : "No description.",
        subtasks: action.payload.subtasks,
      });
    },
  },
});

export const { reorder, changeSelected, addTask } = boardSlice.actions;

export default boardSlice.reducer;
