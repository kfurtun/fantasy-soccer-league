import { createSlice } from "@reduxjs/toolkit";
import { lineUp } from "./initialState";
import { lineUpReducers } from "./reducers";

export const lineUpSlice = createSlice({
  name: "lineup",
  initialState: lineUp,
  reducers: lineUpReducers,
});

export const {
  addPlayerToPosition,
  removePlayerFromPosition,
  bringSubmittedLineup,
  clearLineup,
} = lineUpSlice.actions;
export default lineUpSlice.reducer;
