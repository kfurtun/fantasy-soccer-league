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
    state = { firstName: "", email: "", team: "" };
  },
};
