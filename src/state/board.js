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
      state.data[state.selected].columns[index].tasks.push({
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description
          ? action.payload.description
          : "No description.",
        subtasks: action.payload.subtasks,
      });
    },
    saveTask: (state, action) => {
      const columnIndex = state.data[state.selected].columns.findIndex(
        (column) => column.tasks.some((task) => task.id === action.payload.id)
      );
      const taskIndex = state.data[state.selected].columns[
        columnIndex
      ].tasks.findIndex((task) => task.id === action.payload.id);
      state.data[state.selected].columns[columnIndex].tasks[taskIndex] =
        action.payload;
      if (
        state.data[state.selected].columns[columnIndex].title !==
        action.payload.status
      ) {
        const statusIndex = state.data[state.selected].columns.findIndex(
          (column) => column.title === action.payload.status
        );
        const removed = state.data[state.selected].columns[
          columnIndex
        ].tasks.splice(taskIndex, 1)[0];
        state.data[state.selected].columns[statusIndex].tasks.push(removed);
      }
    },
    deleteTask: (state, action) => {
      const columnIndex = state.data[state.selected].columns.findIndex(
        (column) => column.tasks.some((task) => task.id === action.payload)
      );
      state.data[state.selected].columns[columnIndex].tasks = state.data[
        state.selected
      ].columns[columnIndex].tasks.filter((task) => task.id !== action.payload);
    },
    toggleSubtask: (state, action) => {
      const { subtaskId, taskId, columnId } = action.payload;
      const columnIndex = state.data[state.selected].columns.findIndex(
        (column) => column.id === columnId
      );
      const taskIndex = state.data[state.selected].columns[
        columnIndex
      ].tasks.findIndex((task) => task.id === taskId);
      const subtaskIndex = state.data[state.selected].columns[
        columnIndex
      ].tasks[taskIndex].subtasks.findIndex(
        (subtask) => subtask.id === subtaskId
      );
      state.data[state.selected].columns[columnIndex].tasks[taskIndex].subtasks[
        subtaskIndex
      ].done =
        !state.data[state.selected].columns[columnIndex].tasks[taskIndex]
          .subtasks[subtaskIndex].done;
    },
    setStatus: (state, action) => {
      const { taskId, sourceId, destinationId } = action.payload;
      const sourceIndex = state.data[state.selected].columns.findIndex(
        (column) => column.id === sourceId
      );
      const taskIndex = state.data[state.selected].columns[
        sourceIndex
      ].tasks.findIndex((task) => task.id === taskId);
      const destinationIndex = state.data[state.selected].columns.findIndex(
        (column) => column.id === destinationId
      );
      const removed = state.data[state.selected].columns[
        sourceIndex
      ].tasks.splice(taskIndex, 1)[0];
      removed.status =
        state.data[state.selected].columns[destinationIndex].title;
      state.data[state.selected].columns[destinationIndex].tasks.push(removed);
    },
  },
});

export const {
  reorder,
  changeSelected,
  addTask,
  toggleSubtask,
  setStatus,
  saveTask,
  deleteTask,
} = boardSlice.actions;

export default boardSlice.reducer;
