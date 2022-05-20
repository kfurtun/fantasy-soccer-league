import { initialState, currentUserState, lineUp } from "./initialState";

export const reducers = {
  addInputValues: (state, action) => {
    state[action.payload.name] = action.payload.value;
  },
  addCheckbox: (state, action) => {
    state.gender = action.payload.value;
  },
  chooseTeam: (state, action) => {
    state.team = action.payload.value;
  },
  clearForm: (state) => {
    return (state = initialState);
  },
};

export const pageReducers = {
  changeCurrentPage: (state, action) => {
    return (state = action.payload);
  },
};

export const currentUserReducers = {
  currentUserLoggedIn: (state, action) => {
    return (state = action.payload);
  },
  currentUserLoggedOut: (state) => {
    return (state = currentUserState);
  },
};

export const lineUpReducers = {
  addPlayerToPosition: (state, action) => {
    state[action.payload.position] = action.payload.player;
  },
  removePlayerFromPosition: (state, action) => {
    delete state[action.payload.position];
  },
  bringSubmittedLineup: (state, action) => {
    return (state = action.payload);
  },
  clearLineup: (state) => {
    return (state = lineUp);
  },
};

export const currentWeekReducers = {
  setCurrentWeek: (state, action) => {
    return (state = action.payload);
  },
};
