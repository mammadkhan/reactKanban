import { combineReducers } from "@reduxjs/toolkit";

import boardReducer from "./board";
import uiReducer from "./ui";

const rootReducer = combineReducers({
  board: boardReducer,
  ui: uiReducer,
});

export default rootReducer;
