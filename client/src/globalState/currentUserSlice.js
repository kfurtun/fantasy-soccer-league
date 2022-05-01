import { createSlice } from "@reduxjs/toolkit";
import { currentUserState } from "./initialState";
import { currentUserReducers } from "./reducers";

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: currentUserState,
  reducers: currentUserReducers,
});

export const { currentUserLoggedIn, currentUserLoggedOut } =
  currentUserSlice.actions;
export default currentUserSlice.reducer;
