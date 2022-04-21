import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { reducers } from "./reducers";

export const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers,
});

export const { addInputValues, addCheckbox, chooseTeam } =
  registrationSlice.actions;
export default registrationSlice.reducer;
