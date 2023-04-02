import { combineReducers } from "@reduxjs/toolkit";

import boardReducer from "./board";
import uiReducer from "./ui";
import themeReducer from "./theme";

const rootReducer = combineReducers({
  board: boardReducer,
  ui: uiReducer,
  theme: themeReducer,
});

export default rootReducer;
