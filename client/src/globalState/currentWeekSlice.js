import { createSlice } from "@reduxjs/toolkit";
import { currentWeekState } from "./initialState";
import { currentWeekReducers } from "./reducers";

export const currentWeekSlice = createSlice({
  name: "currentWeek",
  initialState: currentWeekState,
  reducers: currentWeekReducers,
});

export const { setCurrentWeek } = currentWeekSlice.actions;
export default currentWeekSlice.reducer;
