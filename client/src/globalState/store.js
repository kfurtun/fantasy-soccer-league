import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "./registrationSlice";
import pageReducer from "./currentRegPageSlice";

export default configureStore({
  reducer: {
    registration: registrationReducer,
    page: pageReducer,
  },
});
