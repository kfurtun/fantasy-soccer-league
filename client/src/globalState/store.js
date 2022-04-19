import { applyMiddleware, createStore } from "redux";
import { initialState } from "./initialState";
import { reducers } from "./reducers";
import { httpCallBacks } from "./httpCallbacks";

const reducer = (state = initialState, action) => {
  const r = reducers[action.type];
  if (r) {
    return r(state, action);
  }

  return state;
};

// const logger = ({ getState }) => {
//   return (next) => (action) => {
//     console.log("will dispatch", action);

//     // Call the next dispatch method in the middleware chain.
//     const returnValue = next(action);

//     console.log("state after dispatch", getState());

//     // This will likely be the action itself, unless
//     // a middleware further in chain changed it.
//     return returnValue;
//   };
// };

export let store = createStore(
  reducer
  //applyMiddleware(logger, httpMiddleware)
);
