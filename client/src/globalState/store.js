import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "./registrationSlice";
import pageReducer from "./currentRegPageSlice";
import currentUserReducer from "./currentUserSlice";
import lineUpReducer from "./lineUpSlice";
import currentWeekReducers from "./currentWeekSlice";

export default configureStore({
  reducer: {
    registration: registrationReducer,
    page: pageReducer,
    currentUser: currentUserReducer,
    lineUp: lineUpReducer,
    currentWeek: currentWeekReducers,
  },
});
