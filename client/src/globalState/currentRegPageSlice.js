import { createSlice } from "@reduxjs/toolkit";
import { pageState } from "./initialState";
import { pageReducers } from "./reducers";

export const currentRegPaceSlice = createSlice({
  name: "page",
  initialState: pageState,
  reducers: pageReducers,
});

export const { changeCurrentPage } = currentRegPaceSlice.actions;
export default currentRegPaceSlice.reducer;
