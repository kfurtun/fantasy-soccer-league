import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "./registrationSlice";
import pageReducer from "./currentRegPageSlice";
import currentUserReducer from "./currentUserSlice";

export default configureStore({
  reducer: {
    registration: registrationReducer,
    page: pageReducer,
    currentUser: currentUserReducer,
  },
});
